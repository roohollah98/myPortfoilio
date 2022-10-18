import React, { useRef, useState } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SendIcon from "@mui/icons-material/Send";
import CallMadeIcon from "@mui/icons-material/CallMade";
import EmailIcon from "@mui/icons-material/Email";
import './contact.css'
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const contactMessage = document.getElementById("contact-message");
  const sendEmail = (e) => {
   
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      contactMessage.classList.add("color__red");
      contactMessage.textContent = "Write all the input fields 📩";
    } else {
      emailjs
        .sendForm(
          "service_l1o84oh",
          "template_hmsev8m",
          "#contact-form",
          "623mG70gvY-rVcWyl"
        )
        .then(
          (result) => {
            console.log(result.text);
            contactMessage.classList.remove("color__red");
            contactMessage.classList.add("color__blue");

            contactMessage.textContent = "message sent successfully ✔";
          },
          (error) => {
            console.log(error.text);
            contactMessage.classList.remove("color__blue");
            contactMessage.classList.add("color__red");
            contactMessage.textContent = "message not send! 📩";
          }
        );
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid section__border">
        <div className="contact__content">
          <h3 className="contact__title">
            <ChatBubbleIcon /> Talk to me
          </h3>
          <div className="contact__info">
            <div className="contact__data">
              <span className="contact__data-title">Email</span>
              <span className="contact__data-info">roohollaheftekhari1998</span>
            </div>
            <div className="contact__data">
              <span className="contact__data-title">whats app</span>
              <span className="contact__data-info">+98 9025567392</span>
              <a href="#" target="_blank" className="contact__button">
                Write me <ArrowRightAltIcon />
              </a>
            </div>

            <div className="contact__data">
              <span className="contact__data-title">messenger</span>
              <span className="contact__data-info">@roohollah98</span>
              <a href="#" target="_blank" className="contact__button">
                Write me <ArrowRightAltIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">
            <EmailIcon /> Write me your message
          </h3>
          <form
            ref={formRef}
            onSubmit={() => sendEmail()}
            className="contact__form"
            id="contact-form"
          >
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                className="contact__form-input"
                name="user_name"
                required
                placeholder="Write your name"
                id="contact-name"
              ></input>
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="contact__form-input"
                name="user_email"
                required
                placeholder="write your email"
                id="contact-email"
              ></input>
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                name="user_message"
                placeholder="write your message"
                className="contact__form-input"
                id="contact-project"
              ></textarea>
            </div>
            <p className="contact__message" id="contact-message">
              Message
            </p>
            <button
              onClick={(e) => {
                sendEmail(e);
              }}
              type="submit"
              className="contact__button"
            >
              Send <CallMadeIcon />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
