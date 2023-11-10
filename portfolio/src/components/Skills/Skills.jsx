import "./Skills.css";

function Skills() {
  return (
    <section className="skills section">
      <div className="skills__container container grid">
        <div className="skills__data">
          <h3 className="section__subtitle">
            Favourite <span> Skills</span>
          </h3>
          <h2 className="section__title">My Skills</h2>

          <p className="skills__description">
            These are some of the skills I have gained over the past 4 years,
            during my university studies and my stay at 42Madrid.
          </p>

          <a href="#projects" className="button">
            See projects
          </a>
        </div>

        <div className="skills__content">
          <ol className="skils__group">
            <li className="skills__item">HTML & CSS</li>
            <li className="skills__item">DJANGO</li>
            <li className="skills__item">Python</li>
            <li className="skills__item">Java</li>
          </ol>
          <ol className="skils__group" start="5">
            <li className="skills__item">C</li>
            <li className="skills__item">SQL</li>
            <li className="skills__item">Git & Github</li>
            <li className="skills__item">Ubuntu</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Skills;
