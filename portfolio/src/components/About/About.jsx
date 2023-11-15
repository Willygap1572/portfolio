import "./About.css";
import Blob from "./Blob";

function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h3 className="section__subtitle">
            My <span>Intro</span>
          </h3>
          <h2 className="section__title">About Me</h2>
          <div className="about__content">
            <Blob />
            <p className="about__description">
              I am a student of computer engineering at the Universidad Autónoma
              de Madrid, and the programming school 42Madrid. I am currently
              looking for software development internships to get into the world
              of programming and product development, but mostly to improve my
              skills. Among my hobbies are playing video games, scuba diving,
              and watching series or movies.
            </p>
          </div>

          <a href="#contact" className="button">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
