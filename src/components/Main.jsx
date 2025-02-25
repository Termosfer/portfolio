import Skills from "./Skills";
import Menu from "./Menu";
import Services from "./Services";
import Project from "./Project";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Home from "./Home";
const Main = () => {
  return (
    <>
      <Menu />
      <Home/>
      <Skills />
      <Services />
     <Project/>
      <Testimonials/>
      <Contact/>
    </>
  );
};

export default Main;
