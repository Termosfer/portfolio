import Skills from "./Skills";
import Menu from "./Menu";
import Services from "./Services";
import Project from "./Project";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Home from "./Home";
import Hire from "./Hire";
const Main = () => {
  return (
    <>
      <Menu />
      <Home/>
      <Skills />
      <Services />
     <Project/>
      <Testimonials/>
      <Hire/>
      <Contact/>
    </>
  );
};

export default Main;
