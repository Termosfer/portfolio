import img1 from "../assets/download.png";
import img2 from "../assets/download1.png";
import img3 from "../assets/download2.png";
const Services = () => {
  const services = [
    {
      id: 1,
      img: img1,
      title: "Web Development",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    },
    {
      id: 2,
      img: img2,
      title: "ui / ux DESIGNING",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    },
    {
      id: 3,
      img: img3,
      title: "PhotoShop Editing",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    },
  ];
  return (
    <section id="services" className="third-section py-5">
      <div
        className="px-5 py-4"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
      >
        <h2>Services</h2>
        <h4>WHAT I OFFER</h4>
      </div>
      <div className="d-flex  gap-4 w-100 mx-auto services px-5">
        {services.map((service, index) => {
          return (
            <div
              key={service.id}
              className={`border d-flex flex-column  w-75  align-items-center rounded-3 gap-2 p-4 sub-services `}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-out"
              data-aos-delay={index * 400}
            >
              <img src={service.img} alt="" />
              <h6>{service.title}</h6>
              <p className="text-center">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
