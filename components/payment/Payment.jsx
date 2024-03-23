import React, { useState } from 'react';

const Payment = () => {
  const [displayRazorpay, setDispayRazorpay] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    orderId: null,
    currency: null,
    amount: null,
  });

  const handlerCreateOrder = async (amount, currency) => {
    const data = axios.post('http://localhost:8000/payment/order', {
      amount: amount * 100,
      currency,
      keyId: process.env.REACT_APP_RAZORPAY_KEY_ID,
      KeySecret: process.env.REACT_APP_RAZORPAY_KEY_SECRET,
    });
    if (data && data.order_id) {
      setOrderDetails({
        orderId: data.order_id,
        currency: data.currency,
        amount: data.amount,
      });
      setDispayRazorpay(true);
    }
  };
  return (
    <div>
        <button onClick={()=>handlerCreateOrder(100,'USD')}>
            Place Order
        </button>
{/* 
        {
            displayRazorpay && (
                
            )
        } */}
    </div>
  );
};

export default Payment;
