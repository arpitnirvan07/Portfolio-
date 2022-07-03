import React, { useContext } from 'react'
import './Portfolio.css';
import portfolio from "../../img/Portfolio.png";
import movie from "../../img/MovieReview.png";
import course from "../../img/CourseView.png";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { themeContext } from "../../Context";
import book1 from "../../img/g.jpg";
import book2 from "../../img/h.jpg";
import book3 from "../../img/i.jpg";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Projects">
      <span style={{ color: darkMode ? 'orange' : '' }} >Book Snap's</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      <Swiper
        spaceBetween={600}
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={book1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={book2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={book3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio