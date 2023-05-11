import BlogCards from "../UI/BlogCard";
import blogimg1 from '../assets/blogimg1.png'
import blogimg2 from '../assets/blogimg2.png'
import blogimg3 from '../assets/blogimg3.png'

import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Blogs = () => {
  return (
    <div className=" px-5 md:px-24 md:py-20">
      <Swiper
        className=" w-full pb-14"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          0:{
            spaceBetween: 20,
            slidesPerView: 1
          },
          768: {
            spaceBetween: 50,
            slidesPerView: 3
          },
        }}
      >
        <SwiperSlide>
          <BlogCards
            img={blogimg1}
            title={"Networking In Business Security"}
            author={"ADMIN FEBRUARY 19, 2019"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, mole amet consectetur adipisicing elit..."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCards
            img={blogimg2}
            title={"The Uncharted Research In Marrketing Reasearch"}
            author={"ADMIN FEBRUARY 29, 2019"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, mole amet consectetur adipisicing elit..."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCards
            img={blogimg3}
            title={"IT Security And Its Shackles"}
            author={"ADMIN MARCH 19, 2019"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, mole amet consectetur adipisicing elit..."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCards
            img={blogimg2}
            title={"The Future Of Artificial Intelligence"}
            author={"ADMIN MARCH 24, 2019"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, mole amet consectetur adipisicing elit..."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCards
            img={blogimg3}
            title={`What's Next With Information Technology`}
            author={"ADMIN APRIL 10, 2019"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, mole amet consectetur adipisicing elit..."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCards
            img={blogimg1}
            title={"Data Structure And Algorithm"}
            author={"ADMIN APRIL 22, 2019"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, mole amet consectetur adipisicing elit..."
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Blogs;
