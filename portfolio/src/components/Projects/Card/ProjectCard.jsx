import PropTypes from 'prop-types';
import './projectCard.css';
import { useState, useEffect } from "react";

const ProjectCard = ({ imgSrc, altText, subtitle, title, codeLink, pageLink, apiLink }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 700);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };
  
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <article className="projects__card">
      <figure>
        <img
          src={imgSrc}
          alt={altText}
          className="projects__img"
        />
      </figure>
      <div className={"projects__modal" + (isSmallScreen ? " small" : "")}>
        <span className="projects__subtitle">{subtitle}</span>
        <h2 className="projects__title">{title}</h2>
        {codeLink && (
          <a href={codeLink} className="projects__button">
            <svg className='link__logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z"></path></svg>View code
          </a>
        )}
        {pageLink && (
          <a href={pageLink} className="projects__button">
            View page <i className="ri-global-line"></i>
          </a>
        )}
        {apiLink && (
          <a href={apiLink} className="projects__button">
            View API <i className="ri-settings-3-fill"></i>
          </a>
        )}
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    codeLink: PropTypes.string,
    pageLink: PropTypes.string,
    apiLink: PropTypes.string
  };

export default ProjectCard;
