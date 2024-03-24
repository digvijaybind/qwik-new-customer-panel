import { useEffect,useRef } from "react";
import crypto from 'crypto-js';
import PropTypes from 'prop-types';
import Axios from 'axios';


const loadScript =src=>new Promise((resolve)=>{
    const script =document.createElement('script');
    script.src=src;
    script.onload=()=>{
        console.log("razorpay loaded successfully");
        resolve(true);
    };
    script.onerror=()=>{
        console.error('error in loading razorpay');
        resolve(false);
    };
    document.body.appendChild(script);
});

const RenderRazorpay=({
    orderId,
    keyId,
    keySecret,
    currency,
    amount
})=>{
    const paymentId=useRef(null);
    const paymentMethod=useRef(null);

    //To loader razorpay checkout modal script.
    const displayRazorpay=async(options)=>{
        const res = await loaderScript(
          'https://checkout.razorpay.com/v1/checkout.js'
        );
        if(!res){
            console.log('Razorpay SDK failed to load. Are you online?');
            return;
        }

        const rzpl=new window.RenderRazorpay(options);
        rzpl.on('payment.submit',(response)=>{
            paymentMethod.current=response.method;
        });

        rzpl.on('payment.failed', (response) => {
          paymentId.current = response.error.metadata.payment_id;
        });

        rzpl.open();
    };


    const handlePayment=async(status,orderDetails={})=>{
          await Axios.post(`http://localhost:8000/payment/paymentCapture`,{
            status,
            orderDetails
          });


    };

    const options={
        key:keyId,
        amount,
        currency,
        name:'Digvijay',
        order_id:orderId,
        handler:(response)=>{
            console.log('succedded');
            console.log(response);
            paymentId.current=response.razorpay_payment_id;
            const succedded=crypto.HmacSHA256(`${orderId}|${response.razorpay_payment_id}`,keySecret).toString()===response.razorpay_signature;
            if(succedded){
                handlePayment('succedded',{
                    orderId,
                    paymentId,
                    signature:response.razorpay_signature,
                });   
            }else{
                handlePayment('failed',{
                    orderId,
                    paymentId:response.razorpay_payment_id
                });
            }  
        },
     modal:{
        confirm_close:true,
        ondismiss:async(reason)=>{
            const {
                reason:paymentReason,field, step, code
            }= reason && reason.error ? reason.error:{};
            if(reason===undefiend){
                console.log('timeout');
                handlePayment('timeout');
            }else{
                console.log('failed');
                handlePayment('failed',{
                    paymentReason,field,step,code
                });
            }
        },
     },
     //This property allows to enable/disable retries
     //this is enabled true by default 

     retry:{
        enabled:false,
     },
     timeout:900,
     theme:{
        color:'',
     }
    };

    useEffect(()=>{
        console.log('in razorpay');
        displayRazorpay(options);
    },[]);
    return null;

};



export default RenderRazorpay;
