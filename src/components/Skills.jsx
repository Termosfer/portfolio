import { FaArrowRight } from "react-icons/fa";
import figma from "../assets/figma.png";
import node from "../assets/node.png";
import sketch from "../assets/sketch.png";
import react from "../assets/react.png";
import phyton from "../assets/phyton.png";
import photos from "../assets/photos.png";
import Popup from "./Popup";
import { useState } from "react";
const Skills = () => {
  const [popUp, setPopUp] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const clickPopup = (skill) => {
    setPopUp(true);
    setSelectedSkill(skill)
  };
  const skills = [
    {
      id: 1,
      img: figma,
      title: "Figma",
      description: "Lorem ipsum text dummy",
    },
    {
      id: 2,
      img: node,
      title: "Node JS",
      description: "Lorem ipsum text dummy",
    },
    {
      id: 3,
      img: photos,
      title: "Adobe Photoshop",
      description: "Lorem ipsum text dummy",
    },
    {
      id: 4,
      img: react,
      title: "React js",
      description: "Lorem ipsum text dummy",
    },
    {
      id: 5,
      img: sketch,
      title: "Figma",
      description: "Lorem ipsum text dummy",
    },
    {
      id: 6,
      img: phyton,
      title: "Phyton",
      description: "Lorem ipsum text dummy",
    },
  ];


  return (
    <section id="skills" className="second-section py-5">
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
        {skills.map((skill, index) => {
          return (
            <div
              key={skill.id}
              className="d-flex align-items-center gap-3 border bg-white p-4  program-sub"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-out"
              data-aos-delay={index * 400}
            >
              <img src={skill.img} alt="" />
              <div className="d-flex flex-column ">
                <h6 className="my-0">{skill.title}</h6>
                <p className="my-0">{skill.description}</p>
              </div>
              <FaArrowRight className="right-arrow" onClick={()=>clickPopup(skill)} />
            </div>
          );
        })}
      </div>
      {popUp ? <Popup setPopUp={setPopUp} skill={selectedSkill}/> : ""}
    </section>
  );
};

export default Skills;
