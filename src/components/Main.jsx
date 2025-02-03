import { useState } from "react";
import img from "../assets/person.7931d41d.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiHomeSmile2Fill, RiUserLine, RiProjectorFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";

const Main = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <HiMenuAlt2 className="menu-icon" onClick={clickHandler} />
      {open ? (
        <div className= {`w-25 py-3 popup`}>
         <RiHomeSmile2Fill className="icon"/>
         <RiUserLine className="icon"/>
         <FaHeartbeat className="icon"/>
         <RiProjectorFill className="icon"/>
         <MdPermContactCalendar className="icon"/>
        </div>
      ) : (
        <div className= {` w-25 py-3  popdown`}>
        <RiHomeSmile2Fill />
        <RiUserLine />
        <FaHeartbeat />
        <RiProjectorFill />
        <MdPermContactCalendar />
      </div>
      )}
      <div
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
      </div>
    </>
  );
};

export default Main;
