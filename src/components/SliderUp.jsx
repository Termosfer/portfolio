import { Swiper, SwiperSlide } from "swiper/react";
import avatar from "../assets/avatar.png";
import avatar1 from "../assets/avatar1.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import "swiper/css";
import "swiper/css/pagination";

import "./sliderup.css";

import { Mousewheel, Pagination } from "swiper/modules";
const SliderUp = () => {
  return (
    <>
      <Swiper
      direction={'vertical'}
      loop={true}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="mySwiper swiper-backface-hidden"
      >
        <SwiperSlide className="swiper-backface-hidden ">
            <img src={avatar} alt="" />
            <div>
              <p>
                “In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstra”
              </p>
              <h6>JOHN DOE</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
            <img src={avatar1} alt="" />
            <div>
              <p>
                “In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstra”
              </p>
              <h6>JOHN DOE</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide className="  ">
            <img src={avatar3} alt="" />
            <div>
              <p>
                “In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstra”
              </p>
              <h6>JOHN DOE</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide className="  ">
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
