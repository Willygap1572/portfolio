import { useState } from 'react'
import "./Contact.css";
import emailjs from '@emailjs/browser';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_xpc1n36";
    const templateId = "template_nl7zkd8";
    const publicKey = "Y2j8UWuhEfDZ-3eqC";

    // Create a new object that contains dynamic template params
    const templateParams = {
      user_name: name,
      user_email: email,
      reply_to: email,
      user_project: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);

        setName("");
        setEmail("");
        setMessage("");
        setConfirmationMessage("Your message has been sent successfully!✅");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setConfirmationMessage("There was an error sending your message. Please try again.❌");
      });
  };

  return (
    <section className="contact section" id="contact">
      <h3 className="section__subtitle">
        Get In <span>Touch</span>
      </h3>
      <h2 className="section__title">Contact Me!</h2>

      <div className="contact__container container grid">
        <form
          action=""
          className="contact__form"
          id="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="contact__group">
            <input
              type="text"
              id="contact-name"
              name="user_name"
              required
              placeholder="Enter your name"
              className="contact__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              id="contact-email"
              name="user_email"
              required
              placeholder="Enter your email"
              className="contact__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            name="user_project"
            id="contact-project"
            className="contact__input"
            required
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <p className="contact__message" id="contact-message">{confirmationMessage}</p>

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
  );
}

export default Contact;
