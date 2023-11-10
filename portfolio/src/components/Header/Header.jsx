import "./Header.css";
import { useState, useEffect } from "react";

function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 700);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDivClick = () => {
    setIsActive(!isActive);
  };
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Guillermo <span>de Andres</span>
        </a>
        <div
          className={
            "nav__more__icon" +
            (isSmallScreen ? "__small" : "") +
            (isActive ? " active" : "")
          }
          onClick={handleDivClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={"nav__menu" + (isSmallScreen ? "__small" : "") + (isActive ? " active" : "")}
          id="nav-menu"
        >
          <ul className={"nav__list" + (isSmallScreen ? "__small" : "")}>
            <li className={"nav__item"}>
              <a
                href="#home"
                className={"nav__link"}
              >
                Home
              </a>
            </li>
            <li className={"nav__item"}>
              <a
                href="#about"
                className={"nav__link"}
              >
                About
              </a>
            </li>
            <li className={"nav__item"}>
              <a
                href="#services"
                className={"nav__link"}
              >
                Services
              </a>
            </li>
            <li className={"nav__item"}>
              <a
                href="#projects"
                className={"nav__link"}
              >
                Projects
              </a>
            </li>
            <li className={"nav__item"}>
              <a
                href="#contact"
                className={"nav__link"}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className={"close" + (isActive ? " active" : "")} onClick={handleDivClick}>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
