import React, { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "../../styles/Contact.css";

import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsSnapchat } from "react-icons/bs";

const Contact = () => {
  const Expire = (props) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(false);
      }, props.delay);
      return () => clearTimeout(timer);
    }, [props.delay]);

    return visible ? <div>{props.children}</div> : <div />;
  };

  const [status, setStatus] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dzdfnux",
        "template_gsaarmr",
        form.current,
        "QU2qkTa5H-7iwdqmn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Your message has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setStatus("Some thing went wrong. Please try again later.");
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className="contact_icons" />
            <h4>Email</h4>
            <h5>sachinpatel7038@gmail.com</h5>
            <a
              href={"mailto:sachinpatel7038@gmail.com"}
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <AiOutlineLinkedin className="contact_icons" />
            <h4>Linkedin</h4>
            <h5>pasachin</h5>
            <a href={"sachin.com"} target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsSnapchat className="contact_icons" />
            <h4>Snapchat</h4>
            <h5>sachin.snapchat</h5>
            <a
              href={"https://www.linkedin.com/in/pasachin/"}
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="?"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            👋 Say Hello
          </button>
          <div className="status">
            <Expire delay="5000">{status}</Expire>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
