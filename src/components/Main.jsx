import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiHomeSmile2Fill, RiUserLine, RiProjectorFill } from "react-icons/ri";
import { FaHeartbeat, FaPhoneAlt } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import img5 from "../assets/person.a03fc27a.png";
import img from "../assets/person.7931d41d.png";
import img4 from "../assets/person.3319b995.png";
import figma from "../assets/figma.png";
import node from "../assets/node.png";
import sketch from "../assets/sketch.png";
import react from "../assets/react.png";
import phyton from "../assets/phyton.png";
import photos from "../assets/photos.png";
import img1 from "../assets/download.png";
import img2 from "../assets/download1.png";
import img3 from "../assets/download2.png";
import Slider from "./Slider";
import SliderUp from "./SliderUp";
import { IoMdMail } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import Popup from "./Popup";
const Main = () => {
  const [open, setOpen] = useState(false);
const [popUp, setPopUp] = useState(false)
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
        className="d-flex align-items-end  justify-content-center position-relative first-section"
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
        {
          popUp && <Popup/>
        }
        <div className="d-flex flex-wrap gap-4  w-75 mx-auto program">
          <div
            className="d-flex align-items-center gap-3 border bg-white p-4  program-sub"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-delay="0"
            onClick={()=>setPopUp(!popUp)}
          >
            <img src={figma} alt="" />
            <div className="d-flex flex-column ">
              <h6 className="my-0">Figma</h6>
              <p className="my-0">Lorem ipsum text dummy</p>
            </div>
            <FaArrowRight className="right-arrow" />
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
            <FaArrowRight className="right-arrow" />
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
            <FaArrowRight className="right-arrow" />
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
            <FaArrowRight className="right-arrow" />
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
            <FaArrowRight className="right-arrow" />
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
            <FaArrowRight className="right-arrow" />
          </div>
        </div>
      </section>
      <section className="third-section py-5">
        <div
          className="px-5 py-4"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        >
          <h2>Services</h2>
          <h4>WHAT I OFFER</h4>
        </div>
        <div className="d-flex  gap-4 w-100 mx-auto services px-5">
          <div
            className={`border d-flex flex-column  w-75  align-items-center rounded-3 gap-2 p-4 sub-services `}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-delay="0"
          >
            <img src={img1} alt="" />
            <h6>Web Development</h6>
            <p className="text-center">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
              elying on mean
            </p>
          </div>
          <div
            className={`border d-flex flex-column  w-75  align-items-center rounded-3 gap-2 p-4 sub-services `}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-delay="800"
          >
            <img src={img2} alt="" />
            <h6>ui / ux DESIGNING</h6>
            <p className="text-center">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
              elying on mean
            </p>
          </div>
          <div
            className={`border d-flex flex-column  w-75  align-items-center rounded-3 gap-2 p-4 sub-services`}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-delay="1200"
          >
            <img src={img3} alt="" />
            <h6>PhotoShop Editing</h6>
            <p className="text-center">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
              elying on mean
            </p>
          </div>
        </div>
      </section>
      <section
        className="fourth-section projects position-relative"
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <div
          className="px-5 py-4"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        >
          <h2>Projects</h2>
          <h4>MY CREATION</h4>
        </div>
        <div
          className="slider"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        >
          {/* <Slider /> */}
        </div>
        <img
          src={img4}
          alt=""
          className="img4"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        />
      </section>
      <section className="fifth-section py-5">
        <div
          className="px-5 py-4"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        >
          <h2>Testimonials</h2>
          <h4>MY CLIENT REVIEWS</h4>
        </div>
        <SliderUp />
      </section>
      <section className="sixth-section py-5 position-relative">
        <div
          className="px-5 py-4"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        >
          <h2>Hire Me</h2>
          <h4>FOR YOUR PROJECTS</h4>
        </div>
        <div className=" hire px-5">
          <img
            src={img5}
            alt=""
            className="img5"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          />
          <div
            className="me p-4"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          >
            <p className="">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
              elying on mean
            </p>
            <span className="main-span bg">Hire Me</span>
          </div>
        </div>
      </section>
      <section className="seventh-section py-5">
        <div
          className="px-5 py-4"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        >
          <h2 className="text-white">Contact Me</h2>
          <h4>GET IN TOUCH</h4>
        </div>
        <div className="d-flex align-items-start gap-5 px-5">
          <form className="d-flex flex-column w-50 gap-3" data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out">
            <input type="text" placeholder="Name" required className=""/>
            <input type="text" placeholder="Email Id" className="" required/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Message" className=""></textarea>
            <button type="submit" className="main-span ">Hire Me</button>
          </form>
          <div className="text-white" data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-out">
            <p className="d-flex align-items-center gap-2 fs-5"><IoMdMail className="fs-2"/>
            codeaprogram@gmail.com</p>
            <p className="d-flex align-items-center gap-2 fs-5"><FaPhoneAlt className="fs-2"/>
            +91 1234 56778</p>
            <p className="d-flex align-items-center gap-2 fs-5"><GrInstagram className="fs-2"/>
            codeaprogram</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
