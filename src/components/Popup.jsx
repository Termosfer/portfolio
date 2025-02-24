import figma from "../assets/figma.png";
const Popup = () => {
  return (
    <div className="d-flex align-items-center justify-content-center position-fixed top-50 start-50 translate-middle ">
      <div className="d-flex flex-column align-items-center gap-3 justify-content-between  h-auto bg-white py-4 px-2 border pop">
        <div className="d-flex align-items-center px-3 gap-3 w-100">
          <img src={figma} alt="" />
          <h6>Figma</h6>
        </div>
        <ol className="d-flex  flex-column lh-lg gap-2">
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
          <li>Lorem ipsum dolor sit, ame.</li>
          <li>Lorem ipsum dolor sit, amet consectetur</li>
          <li>
            Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.
          </li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ad est beatae quos rem.</li>
          
        </ol>
        <div className="justify-content-end d-flex align-items-left ms-auto px-3">
          <span className="main-span fw-bold">
            Close
          </span>
        </div>
      </div>
    </div>
  );
};

export default Popup;
