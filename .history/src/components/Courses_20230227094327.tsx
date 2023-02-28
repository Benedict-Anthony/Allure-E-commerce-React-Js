import React from 'react'
import { FC } from "react"

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


import "../css/blog.css"

// import required modules


import { useBlogContext } from '../contexts/BlogContext';
import Course from '../shared/Post';


const Courses: FC = () => {

  const { data: { posts } } = useBlogContext()
  return (
    <section className="container" id="courses">
      <main>
        <Swiper
          // slidesPerView={4}
          // spaceBetween={30}
          // slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          breakpoints={{
            // when window width is >= 320px
            468: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            568: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            // when window width is >= 640px
            978: {
              slidesPerView: 4,
              spaceBetween: 40
            }
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {posts.slice(0, 10).map((item) => (
            <SwiperSlide key={item.id}>
              <Course item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  )
}

export default Courses


