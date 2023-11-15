import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div>
          <h1 className="footer__title">
            Guillermo <span> de Andrés</span>
          </h1>

          <h2 className="footer__education">Computer Science</h2>
        </div>
        <div className="footer__social">
          <a
            href="https://github.com/Willygap1572"
            target="_blank"
            className="footer__social-link"
            rel="noreferrer"
          >
            <img src="src/assets/github.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/gdeandre/"
            target="_blank"
            className="footer__social-link"
            rel="noreferrer"
          >
            <img src="src/assets/linkedin.svg" />
          </a>
        </div>

        <span className="footer__copy">
          &#169; Copytight Willygap1572. All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
