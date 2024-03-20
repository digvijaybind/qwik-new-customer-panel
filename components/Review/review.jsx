import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Review.module.css';

const reviews = [
  {
    id: 1,
    text: 'Amazing  job done by qwiklif team. We had to air lift one of our colleague from Rashid Hospital Dubai to Delhi India, team Qwiklif was able to complete all the process from bed of the hospital till india in just few Hours, patient was transferred smoothly with complete medical care , the process was well explained and their team was updating all the steps in a common group specially made for the swift communication for this noble cause .Qwiklif Air Ambulance dealt this case with confidence and their help to the family was remarkable, they helped them in all the steps.',
    author: '- Archana',
  },
  {
    id: 2,
    text: 'We are very happy to receive our relative back to Iran from Dubai UAE ,he was very sick and admitted at Rashid hospital Dubaii, Qwiklif Air Ambulance Service has arranged this safe repatriation from UAE to Iran ,they arranged every thing in hours from airline approvals to ground ambulance at both the locations, Qwiklif’s medical team was very professional and they took care of the patient with ICU setup during all the travel time, we wish Qwiklif Air Ambulance best success in their work and also recommend this company to all who needs any kind of medical assistance to transfer their patients from any country to any where in the world.',
    author: '- Thammem',
  },
  {
    id: 3,
    text: 'Qwiklif Air ambulance is doing a wonderful job. I recently used their service and I could not be any happier.',
    author: '- Memon',
  },
  {
    id: 4,
    text: "Recently experienced Air Ambulance service to transfer my relative from London to Delhi , and I can't thank them enough. From the first call, their professionalism and prompt response were outstanding. The medical team onboard was not only highly skilled but also caring. They used advanced medical equipment and doctors were providing reassurance throughout the journey. QwikLif's worldwide coverage and seamless coordination make them my go-to for emergency medical transportation. Highly recommend!",
    author: '- Anshul',
  },
  // Add more reviews as needed
];

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
};

const Review = () => {
  return (
    <Slider {...settings} className="flex justify-center items-center">
      {reviews.map((review) => (
        <div className="flex justify-center items-center text-center">
          <div
            key={review.id}
            className="review-item text-[#fff]  h-[200px] px-[100px] py-[40px] "
          >
            <p className="text-[16px] font-italic font-medium  mb-2">
              {review.text}
            </p>
            <p className="font-semibold text-[24px]">{review.author}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Review;
