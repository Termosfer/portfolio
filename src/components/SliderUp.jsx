import { Swiper, SwiperSlide } from "swiper/react";
import avatar from "../assets/avatar.png";
import avatar1 from "../assets/avatar1.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import "swiper/css";
import "swiper/css/pagination";

import "./sliderup.css";

import { Pagination } from "swiper/modules";
const SliderUp = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-primary w-50 ">
            <img src={avatar} alt="" />
            <div>
              <p>
                “In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstra”
              </p>
              <h6>JOHN DOE</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide className="bg-danger w-50 ">
            <img src={avatar1} alt="" />
            <div>
              <p>
                “In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstra”
              </p>
              <h6>JOHN DOE</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-info w-50 ">
            <img src={avatar3} alt="" />
            <div>
              <p>
                “In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstra”
              </p>
              <h6>JOHN DOE</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide className="bg-gray w-50 ">
            <img src={avatar4} alt="" />
            <div>
              <p>
                “In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstra”
              </p>
              <h6>JOHN DOE</h6>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderUp;
