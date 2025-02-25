import img4 from "../assets/person.3319b995.png";
import Slider from "./Slider";
const Project = () => {
  return (
    <section
    id="projects"
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
      <Slider />
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
  )
}

export default Project