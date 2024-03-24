import styles from "./Card.module.css"
const ShadowCard = ({ img, head, text }) => {
  return (
    <div className="flex sm:flex-col items-center sm:justify-center shadow-lg bg-white rounded-[10px] px-[15px] py-[15px]">
      <div className={`${styles.Imagecon} mr-[15px] w-[800px]`}>
        <img  src={img} className={`${styles.Imagechild}`} alt="" />
      </div>
      <div className="px-[15px]">
        <p className="text-[24px] sm:text-center text-[#111] py-[5px] font-bold">
          {head}
        </p>
        <p className="text-[16px] sm:text-center opacity-[90%] font-[500] py-[10px]">
          {text}
        </p>
        <button className={`${styles.Button} border-[#396CF0] mt-[20px] mb-[10px] sm:ml-[50%] sm:transform sm:translate-x-[-50%] border-[1px] px-[10px] py-[5px] rounded-[5px]`}>
          <p className={`text-[#396CF0] font-[600] ${styles.Text}`}>{`See Details >`}</p>
        </button>
      </div>
    </div>
  );
};

export default ShadowCard;
