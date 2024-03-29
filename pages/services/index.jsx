import Layout from '@/components/layout/Layout';
import styles from './Services.module.css';
import ShadowCard from '@/components/shadowCard';
const Services = () => {
  const servicee = [
    {
      img: 'https://qwiklif.com/wp-content/uploads/2024/01/1-230x230.png',
      head: 'Neonatal and Pediatric Air Transfer Services',
      text: 'Expert Transport for Neonates and Pediatric Patients QwikLif Air Ambulance specializes in safe and expert…',
    },
    {
      img: 'https://qwiklif.com/wp-content/uploads/2024/01/5-230x230.png',
      head: 'ECMO Initiation and Air Transfer Services',
      text: 'Expert ECMO Assistance with Global Air Ambulance Solutions QwikLif Air Ambulance specializes in expert ECMO…',
    },
    {
      img: 'https://qwiklif.com/wp-content/uploads/2019/01/challenger-605_1-re-230x230.jpg',
      head: 'Dedicated Air Ambulance',
      text: 'Swift and Expert Medical Transport Anywhere, Anytime QwikLif Air Ambulance offers unparalleled specialized air ambulance…',
    },
    {
      img: 'https://qwiklif.com/wp-content/uploads/2019/01/Untitled-design-2-230x230.png',
      head: 'International Patient Transfer',
      text: 'Cost-Effective Air Ambulance Solutions Worldwide QwikLif Air Ambulance specializes in providing cost-effective and reliable international…',
    },
    {
      img: 'https://qwiklif.com/wp-content/uploads/2019/01/Untitled-design-3-230x230.png',
      head: 'Commercial Stretcher Transfer',
      text: 'Efficient Patient Transport via Commercial Airlines with Stretcher Configurations QwikLif Air Ambulance offers reliable and…',
    },
  ];

  return (
   
      <div>
        <div className={`bg-black ${styles.Image}   bg-black h-[400px] w-full`}>
          <div className=" font-[700] z-[100px] pl-[40px] sm:pl-[10px] relative  text-white">
            <p className="text-[50px]  pt-[150px] sm:pt-[100px]">Services </p>
            <div className="flex pt-[30px] text-[20px]">
              <p className="text-[#C5D5FF] pr-[10px]">
                {'Air Ambulance Services >'}
              </p>
              <p> Services</p>
            </div>
          </div>
        </div>
        <div className="text-center w-[50%] sm:w-[80%] m-auto py-[30px]">
          <h2 className="text-[25px] font-bold text-[#111]">Our Services</h2>
          <p className="pt-[10px]">
            At Qwiklif, We Are Dedicated To Providing The Highest Level Of Care
            And Service When It Matters Most.
          </p>
        </div>
        <div className="flex justify-between sm:items-center px-[10%] flex-wrap">
          {servicee.map((data, i) => (
            <div
              className={`w-[47%] sm:w-[100%] mt-[20px] ${
                i == 4 ? 'mb-[20px]' : ''
              } `}
              key={i}
            >
              <ShadowCard
                img={data.img}
                head={data.head}
                text={data.text}
              ></ShadowCard>
            </div>
          ))}
        </div>
      </div>

  );
};

export default Services;
