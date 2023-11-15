import "./Home.css";
import GLBModel from "../Three/GLBModel";

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content">
          <div className="home__data">
            <h3 className="home__subtitle">
              Hello, <span> I&apos;m</span>
            </h3>
            <h1 className="home__title">Guillermo de Andrés</h1>
            <h3 className="home__education">Computer Science</h3>
            <div className="home__main">
              <div className="home__main__description">
                <p className="home__description">
                  Welcome to my Portfolio! I&apos;m Guillermo de Andrés, a
                  student of Computer Engineering with a strong passion for
                  coding and problem-solving. This portfolio showcases my
                  diverse projects and skills. With a solid foundation in
                  languages like Python, Java, and C. I excel in collaborative
                  environments, delivering efficient and innovative software
                  solutions.
                </p>
                <a href="#contact" className="button">
                  Contact me!
                </a>
                <div className="home__social">
                  <a
                    href="https://github.com/Willygap1572"
                    target="_blank"
                    rel="noreferrer"
                    className="home__social-link"
                  >
                    <img src="src/assets/github.svg" alt="" className="icon" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gdeandre/"
                    target="_blank"
                    rel="noreferrer"
                    className="home__social-link"
                  >
                    <img
                      src="/src/assets/linkedin.svg"
                      alt=""
                      className="icon"
                    />
                  </a>
                </div>
              </div>
              <div className="home__model__border">
                <div className="home__model">
                  <GLBModel url="src/assets/3D/me.glb" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home__image"></div>
      </div>
    </section>
  );
}

export default Home;
