import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { useRef } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m2hjrj8",
        "template_0avpvfr",
        form.current,
        "Ngfiuk1gHcW9k69FA"
      )
      .then(
        (result) => {
          result.text === "OK" ? alert("Message Sent") : alert("Try Again");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>ayushbatra128@gmail.com</h5>
            <a
              href="mailto:ayushbatra128@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+91-7735993409</h5>
            <a
              href="https://api.whatsapp.com/send?phone=917735993409"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* {end of contact options} */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
