import styles from './Services.module.css';
import ShadowCard from '@/components/shadowCard';
const Services = () => {
  return (
    <div>
      <div className={`bg-black ${styles.Image}   bg-black h-[400px] w-full`}>
        <div className=" font-[700] z-[100px] pl-[40px] sm:pl-[10px] relative  text-white">
          <p className="text-[50px]  pt-[150px] sm:pt-[100px]">Services</p>
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
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div
            className={`w-[47%] sm:w-[100%] mt-[20px] ${i == 4 ? 'mb-[20px]' : ''} `}
            key={i}
          >
            <ShadowCard></ShadowCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
