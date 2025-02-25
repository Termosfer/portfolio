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
  const slide = [
    {
      id: 1,
      img: avatar,
      title: "JOHN DOE",
      description:
        "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
    },
    {
      id: 2,
      img: avatar1,
      title: "TOM ALEX",
      description:
        "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
    },
    {
      id: 3,
      img: avatar3,
      title: "JOHNNY",
      description:
        "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
    },
    {
      id: 4,
      img: avatar4,
      title: "ROBBIN",
      description:
        "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
    },
  ];
  return (
    <>
      <Swiper
        direction={"vertical"}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        
        modules={[Mousewheel, Pagination]}
        className="mySwiper swiper-backface-hidden big-swiper"
      >
        {
        slide.map((s, index) => {
          return (
            <SwiperSlide key={s.id} className=" swip">
              <img src={s.img} alt="" />
              <div>
                <p>{s.description}</p>
                <h6>{s.title}</h6>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SliderUp;
