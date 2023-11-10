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
            View code <i className="ri-external-link-line"></i>
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
