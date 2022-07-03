import React from 'react'
import './Book.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
function Book() {
  const clients = [
    {
      img: profilePic1,
      review:
        "A book with lots of knowledge to get in.Strategic and information to new generation"
    },
    {
      img: profilePic2,
      review:
        "Worth purchasing Book. Helps to know Digital Cybercrime and awareness",
    },
    {
      img: profilePic3,
      review:"Provides insight into cybersecurity ethics. Cybersecurity is of utmost importance in our day to day life, in view of digital transactions"
    },
    {
      img: profilePic4,
      review: "Great book so far. The only reason why I give it 4 stars instead of 5 is about the font size. Personally, I think it small to compare with other books."
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Readers always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Book