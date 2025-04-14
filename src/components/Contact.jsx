import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send Email");

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
  
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID; 
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        alert("Email sent!");
        setButtonText("Send Email");
        form.current.reset();
      },
      (err) => {
        alert(JSON.stringify(err));
        setButtonText("Send Email");
      }
    );
  };

  return (
    <form id="form" ref={form} onSubmit={sendEmail}>
    <div className="name-row">
      <div className="field">
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" required />
      </div>
      <div className="field">
        <label htmlFor="name">Last Name</label>
        <input type="text" name="name" id="name" required />
      </div>
    </div>
  
    <div className="field">
      <label htmlFor="time">Phone</label>
      <input type="text" name="time" id="time" />
    </div>
    <div className="field">
      <label htmlFor="message">Message</label>
      <input type="text" name="message" id="message" required />
    </div>
    <div className="field">
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" required />
    </div>
    <input type="submit" id="button" value={buttonText} />
  </form>
  
  );
};


