import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import "../css/products.css";
import { useServicesContext } from '../contexts/ServicesContext';
import ServiceCategory from './ServiceCategory';

const ServiceSlice = () => {
    const { services } = useServicesContext()

    return (
        <>
            <h1 className="heading">Our Services</h1>
            <main className="services container" id="services">
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
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    {services.length > 0 && services.slice(0, 3).map((item) => (

                        <SwiperSlide key={item.id}>
                            <ServiceCategory {...item} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </main>
        </>
    )
}

export default ServiceSlice