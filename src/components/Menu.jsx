import { useEffect, useState } from "react";
import { FaHeartbeat } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdPermContactCalendar } from "react-icons/md";
import { RiHomeSmile2Fill, RiProjectorFill, RiUserLine } from "react-icons/ri";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState(1);
  const clickHandler = () => {
    setOpen((open) => !open);
  };
  const icons = [
    { id: 1, icon: <RiHomeSmile2Fill />, target: "#home" },
    { id: 2, icon: <RiUserLine />, target: "#skills" },
    { id: 3, icon: <FaHeartbeat />, target: "#services" },
    { id: 4, icon: <RiProjectorFill />, target: "#projects" },
    { id: 5, icon: <MdPermContactCalendar />, target: "#contact" },
  ];
  // Intersection Observer'ı başlatıyoruz
  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: "-50px",
      threshold: 0.5, // %50'si görünürse
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Eğer bölüm görünürse, aktif ikonu ayarla
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveIcon(icons.find((icon) => icon.target === `#${id}`).id);
        }
      });
    }, options);

    // Tüm bölümleri gözlemlemeye başla
    icons.forEach((icon) => {
      const section = document.querySelector(icon.target);
      if (section) {
        observer.observe(section);
      }
    });

    // Temizlik fonksiyonu
    return () => {
      icons.forEach((icon) => {
        const section = document.querySelector(icon.target);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [icons]);
  const handleIconClick = (id, target) => {
    setActiveIcon(id);
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <HiMenuAlt2 className="menu-icon" onClick={clickHandler} />
      {open ? (
        <div className={`w-25 py-3 popup`}>
          {icons.map((icon) => (
            <div
              key={icon.id}
              className={`icon ${activeIcon === icon.id ? "active" : ""}`}
              onClick={() => handleIconClick(icon.id, icon.target)}
            >
              {icon.icon}
            </div>
          ))}
        </div>
      ) : (
        <div className={` w-25 py-3  popdown`}>
          {icons.map((icon) => (
            <div
              key={icon.id}
              className={`icon ${activeIcon === icon.id ? "active" : ""}`}
              onClick={() => handleIconClick(icon.id, icon.target)}
            >
              {icon.icon}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Menu;
