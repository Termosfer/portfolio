import SliderUp from "./SliderUp";

const Testimonials = () => {
  return (
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
  );
};

export default Testimonials;
