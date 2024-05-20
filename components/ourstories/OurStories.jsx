import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BlogCard from './BlogCard';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const OurStories = ({ blogs }) => {
  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      infinite={true}
      autoPlaySpeed={3000} // 3 seconds
      keyBoardControl={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      itemClass="carousel-item-padding-40-px"
    >
      {blogs.map((blog, index) => (
        <div key={index}>
          <BlogCard
            image={blog.image}
            title={blog.title}
            description={blog.description}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default OurStories;
