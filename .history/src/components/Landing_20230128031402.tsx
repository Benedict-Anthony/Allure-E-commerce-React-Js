import React from 'react'
import { FC } from "react";
import Card from '../shared/Card';


import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";


import { landing } from '../scripts/landing';
import { Courses } from '../scripts/topNavItems';

import "../css/landing.css";


const Landing: FC = () => {

    return (
        <section className="landing" id="home">
            <main className="hero">
                <Swiper
                    // loop={true}
                    // loopFillGroupWithBlank={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    spaceBetween={30}
                    effect={"fade"}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="mySwiper">
                    {landing.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-center landing__page ">
                                <div className="landing__info">
                                    <p>{item.text}</p>

                                    <a href={item.link} className="button">Read More</a>
                                </div>
                                <div className="landing__image">
                                    <img src={item.image} alt="" />
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </main>


            <div className="landing__courses">
                <Card>
                    <div className="landing__courses-count flex">
                        {Courses.map((item) => (
                            <div className="count" key={item.id}>
                                <h2>{item.count}+</h2>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

        </section>
    )
}




export default Landing