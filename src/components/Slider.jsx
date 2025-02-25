import { Swiper, SwiperSlide } from "swiper/react";
import img5 from "../assets/img1.ac0453a3.png";
import img6 from "../assets/img2.bccacc9d.png";
import img7 from "../assets/img3.84e5e7a8.png";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper small-swiper"
      >
        <SwiperSlide>
          <div className="div-img">
            <img src={img5} alt="" />
            <h5 className=" ps-4  my-0">Gym Website</h5>
            <p className=" pe-4  my-0">READ MORE</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="div-img ">
            <img src={img6} alt="" />
            <h5 className=" ps-4  my-0">Social Media web</h5>
            <p className=" pe-4  my-0">READ MORE</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="div-img ">
            <img src={img7} alt="" />
            <h5 className="ps-4  my-0">Creative Website</h5>
            <p className="pe-4  my-0">READ MORE</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
