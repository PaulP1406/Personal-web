import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import title1 from "./contact_me_text.png";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4vno8qq",
        "template_6asda2i",
        form.current,
        "569R7Sx0rWvFWH7MC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setFormData({
            user_name: '',
            user_email: '',
            message: ''
          });
          
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="contact" id="contact">
      <img src={title1} alt="title image" />
      <p>Feel free to shoot a message!</p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="user_name">Name</label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          className="input-field"
          value={formData.user_name}
          onChange={handleChange}
          required
        />

        <label htmlFor="user_email">Email</label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          className="input-field"
          value={formData.user_email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="input-field"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <input type="submit" value="Send" className="submit-button" />
      </form>
    </div>
  );
};

export default Contact;
