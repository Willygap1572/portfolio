import './Contact.css';

function Contact() {
    return (
        <section className="contact section" id="contact">
        <h3 className="section__subtitle">Get In <span>Touch</span></h3>
        <h2 className="section__title">Contact Me</h2>

        <div className="contact__container container grid">
          <form action="" className="contact__form" id="contact-form">
            <div className="contact__group">
              <input
                type="text"
                id="contact-name"
                name="user_name"
                required
                placeholder="Enter your name"
                className="contact__input"
              />
              <input
                type="email"
                id="contact-email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="contact__input"
              />
            </div>
            <textarea
              name="user_project"
              id="contact-project"
              className="contact__input"
              required
              placeholder="Enter your message"
            ></textarea>

            <p className="contact__message" id="contact-message"></p>

            <button
              className="button contact__button"
              id="contact-button"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    )
}

export default Contact;