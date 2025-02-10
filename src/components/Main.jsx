import { useState } from "react";
import img from "../assets/person.7931d41d.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiHomeSmile2Fill, RiUserLine, RiProjectorFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import figma from "../assets/figma.png";
import node from "../assets/node.png";
import sketch from "../assets/sketch.png";
import react from "../assets/react.png";
import phyton from "../assets/phyton.png";
import photos from "../assets/photos.png";
const Main = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <HiMenuAlt2 className="menu-icon" onClick={clickHandler} />
      {open ? (
        <div className={`w-25 py-3 popup`}>
          <RiHomeSmile2Fill className="icon" />
          <RiUserLine className="icon" />
          <FaHeartbeat className="icon" />
          <RiProjectorFill className="icon" />
          <MdPermContactCalendar className="icon" />
        </div>
      ) : (
        <div className={` w-25 py-3  popdown`}>
          <RiHomeSmile2Fill />
          <RiUserLine />
          <FaHeartbeat />
          <RiProjectorFill />
          <MdPermContactCalendar />
        </div>
      )}
      <section
        style={{ height: "100vh", overflow: "hidden" }}
        className="d-flex align-items-end  justify-content-center position-relative"
      >
        <div className="d-flex flex-column gap-4  my-5 main-div">
          <h1 id="h1" className="animation">
            Web Developer
          </h1>
          <div
            id="h1"
            className="d-flex align-items-center justify-content-end animation"
          >
            <span className="main-span ">Hire Me</span>
          </div>
          <div id="h2" className="d-flex align-items-center gap-4 animation">
            <h2>8+</h2>
            <div className="d-flex flex-column align-items-left ">
              <span>Years of Experinse in Web</span>
              <span>development</span>
            </div>
          </div>
          <div
            id="div-h2"
            className="d-flex align-items-center justify-content-end gap-4 animation"
          >
            <div className="d-flex flex-column align-items-end">
              <span>Projects Worked in my</span>
              <span>career</span>
            </div>
            <h2>20+</h2>
          </div>
        </div>
        <div className="side-animation ">
          <h1 className="h1">
            TOGHRUL <span> AGHAYEV </span>
          </h1>
        </div>
        <img src={img} alt="" className="img" />
      </section>
      <section className="second-section py-5">
        <div
          className="px-5 py-4"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        >
          <h2>Skills</h2>
          <h4>MY TOP SKILLS</h4>
        </div>
        <div className="d-flex flex-wrap gap-4  w-75 mx-auto program">
          <div
            className="d-flex align-items-center gap-3 border bg-white p-4  program-sub"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-delay="0"
          >
            <img src={figma} alt="" />
            <div className="d-flex flex-column ">
              <h6 className="my-0">Figma</h6>
              <p className="my-0">Lorem ipsum text dummy</p>
            </div>
            <FaArrowRight className="right-arrow"/>
          </div>
          <div
            className="d-flex align-items-center gap-3 border  p-4 program-sub"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-delay="400"
          >
            <img src={node} alt="" />
            <div className="d-flex flex-column ">
              <h6 className="my-0">Node js</h6>
              <p className="my-0">Lorem ipsum text dummy</p>
            </div>
            <FaArrowRight className="right-arrow"/>
          </div>
          <div
            className="d-flex align-items-center gap-3 border  p-4 program-sub"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-delay="800"
          >
            <img src={photos} alt="" />
            <div className="d-flex flex-column ">
              <h6 className="my-0">Adobe Photoshop</h6>
              <p className="my-0">Lorem ipsum text dummy</p>
            </div>
             <FaArrowRight className="right-arrow"/>
          </div>
          <div
            className="d-flex align-items-center gap-3 border  p-4 program-sub"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-delay="1200"
          >
            <img src={react} alt="" />
            <div className="d-flex flex-column ">
              <h6 className="my-0">React js</h6>
              <p className="my-0">Lorem ipsum text dummy</p>
            </div>
             <FaArrowRight className="right-arrow"/>
          </div>
          <div
            className="d-flex align-items-center gap-3 border  p-4 program-sub"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-delay="1600"
          >
            <img src={sketch} alt="" />
            <div className="d-flex flex-column">
              <h6 className="my-0">Sketch</h6>
              <p className="my-0">Lorem ipsum text dummy</p>
            </div>
            <FaArrowRight className="right-arrow"/>
          </div>
          <div
            className="d-flex align-items-center gap-3 border  p-4 program-sub"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-delay="2000"
          >
            <img src={phyton} alt="" />
            <div className="d-flex flex-column ">
              <h6 className="my-0">Python</h6>
              <p className="my-0">Lorem ipsum text dummy</p>
            </div>
             <FaArrowRight className="right-arrow"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
