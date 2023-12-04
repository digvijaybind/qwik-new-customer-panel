import styles from "./Review.module.css";
const Review = () => {
  return (
    <div className={`${styles.Container} w-[30%] sm:w-[100%]`}>
      <div className={`${styles.Container2} p-[16px]`}>
        <p className="font-bold text-[24px]">REVIEW</p>
        <p className="mt-[30px]">
          ........................................................
        </p>
        <p className="text-right text-[14px] font-bold py-[20px]">View more</p>
        <div className="flex pb-[10px]">
          {Array.from("qwert").map((data, index) => (
            <svg
              className="mr-[3px]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              key={index+"sdfg"}
            >
              <path
                d="M18.4687 22.5C18.3109 22.5006 18.1568 22.4514 18.0286 22.3594L12 17.9888L5.97139 22.3594C5.84259 22.4528 5.68742 22.5028 5.52832 22.5023C5.36921 22.5017 5.21441 22.4505 5.08629 22.3562C4.95818 22.2618 4.86339 22.1292 4.81563 21.9774C4.76787 21.8256 4.76961 21.6626 4.82061 21.5119L7.17186 14.5477L1.07811 10.3688C0.946113 10.2783 0.846491 10.1481 0.793797 9.99702C0.741103 9.84596 0.7381 9.682 0.785225 9.5291C0.83235 9.37621 0.927135 9.24239 1.05573 9.1472C1.18432 9.05201 1.33999 9.00043 1.49998 9.00001H9.0178L11.2865 2.01798C11.3354 1.86724 11.4308 1.73586 11.559 1.64267C11.6871 1.54949 11.8415 1.4993 12 1.4993C12.1584 1.4993 12.3128 1.54949 12.441 1.64267C12.5692 1.73586 12.6645 1.86724 12.7134 2.01798L14.9822 9.00236H22.5C22.6602 9.00228 22.8162 9.05349 22.9452 9.1485C23.0741 9.24351 23.1693 9.37732 23.2167 9.53033C23.2642 9.68334 23.2613 9.84752 23.2087 9.99881C23.1561 10.1501 23.0564 10.2806 22.9242 10.3711L16.8281 14.5477L19.178 21.51C19.216 21.6227 19.2267 21.7429 19.2092 21.8606C19.1917 21.9783 19.1464 22.0901 19.0771 22.1868C19.0078 22.2835 18.9165 22.3624 18.8107 22.4168C18.7049 22.4713 18.5877 22.4998 18.4687 22.5Z"
                fill="#FFC107"
              />
            </svg>
          ))}
        </div>
        <p className="text-[14px]">Vipin</p>
        <p className="text-[12px] font-[600] opacity-[0.4]">FIGMA</p>
        <div className="flex items-center">
          <img src="/images/google.svg" alt="" />
          <p className="text-[12px] pl-[5px] font-[600] opacity-[0.4]">
            Google
          </p>
        </div>
        <img className="mt-[20px] w-full" src="/images/review.png" alt="" />
      </div>
    </div>
  );
};

export default Review;
