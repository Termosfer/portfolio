import { FaPhoneAlt } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"
import { IoMdMail } from "react-icons/io"

const Contact = () => {
  return (
    <section id="contact" className="seventh-section py-5">
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
          <form
            className="d-flex flex-column w-50 gap-3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          >
            <input type="text" placeholder="Name" required className="" />
            <input type="text" placeholder="Email Id" className="" required />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              className=""
            ></textarea>
            <button type="submit" className="main-span ">
              Hire Me
            </button>
          </form>
          <div
            className="text-white"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          >
            <p className="d-flex align-items-center gap-2 fs-5">
              <IoMdMail className="fs-2" />
              codeaprogram@gmail.com
            </p>
            <p className="d-flex align-items-center gap-2 fs-5">
              <FaPhoneAlt className="fs-2" />
              +91 1234 56778
            </p>
            <p className="d-flex align-items-center gap-2 fs-5">
              <GrInstagram className="fs-2" />
              codeaprogram
            </p>
          </div>
        </div>
      </section>
  )
}

export default Contact