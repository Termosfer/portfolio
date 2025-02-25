import img5 from "../assets/person.a03fc27a.png";

const Hire = () => {
  return (
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
  )
}

export default Hire