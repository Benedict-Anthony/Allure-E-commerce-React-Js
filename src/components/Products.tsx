import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import "../css/products.css";



import { useContext } from "react";
import ProductContext from "../contexts/ProductContext"
import Product from '../shared/Product';
import { FecthLoadingSpiner } from '../shared/Spinner';


const Products = () => {

  const { data: { products } } = useContext(ProductContext)
  return (
    <>

      <h1 className="heading">Latest Products</h1>
      <section className="container products" id="products">

        <Swiper
          // slidesPerView={4}
          // spaceBetween={30}
          // slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          // pagination={{
          //   clickable: true,
          // }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
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
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >

          {products.length > 0 ? products.slice(0, 10).map((item) => (

            <SwiperSlide key={item.id}>
              <Product item={item} />
            </SwiperSlide>
          )) : <FecthLoadingSpiner />}

        </Swiper>
      </section>
    </>
  )
}

export default Products