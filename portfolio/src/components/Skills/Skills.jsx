import "./Skills.css";

function Skills() {
  return (
    <section className="skills section">
      <div className="skills__container container grid">
        <div className="skills__data">
          <h3 className="section__subtitle">
          Programming <span>Proficiencies</span>
          </h3>
          <h2 className="section__title">My Select Stack</h2>
          <div className="skills__content__data">
            <p className="skills__description">
              These are some of the skills I have gained over the past 4 years,
              during my university studies and my stay at 42Madrid.
            </p>
            <div className="skills__content">
              <ol className="skils__group">
                <li className="skills__item">Docker</li>
                <li className="skills__item">Java</li>
                <li className="skills__item">AWS</li>
                <li className="skills__item">Python</li>
                <li className="skills__item">Git</li>
              </ol>
              <ol className="skils__group" start="6">
              <li className="skills__item">VUE.js</li>
                <li className="skills__item">React.js</li>
                <li className="skills__item">Three.js</li>
                <li className="skills__item">C</li>
                <li className="skills__item">SQL</li>
              </ol>
            </div>
          </div>
          <a href="#projects" className="button">
            See projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
