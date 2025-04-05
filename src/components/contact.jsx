import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import SocialMedia from "./SocialMedia";

const WaveField = ({ label, name, type = "text", value, onChange, required = false, multiline = false, error }) => {
  return (
    <div className="wave-container">
      {multiline ? (
        <textarea
          className={`wave-input ${error ? 'error' : ''}`}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className={`wave-input ${error ? 'error' : ''}`}
          type={type}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
      <span className="wave" />
      <label className="wave-label">{label}</label>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

const RippleButton = ({ children, onClick, type = "button", disabled = false }) => {
  return (
    <button className="ripple-button" type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Abhay Tiwari",
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Your message has been sent successfully! I'll get back to you as soon as possible.");
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="contact-section" id="contact">
      <div className="title">
        <h2 className="about">Contact Me</h2>
      </div>
      <div className="contact-details">
        <div className="left-contact">
          <p>Feel free to connect with me and share your thoughts, ideas, or suggestions through the available communication channels listed below.</p>
          <SocialMedia />
        </div>
        <div className="right-content">
          <section className="msg">Message Me</section>
          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <WaveField
                label="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                error={errors.name}
              />
              <WaveField
                label="Email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                error={errors.email}
              />
            </div>
            
            <WaveField
              label="Message"
              name="message"
              multiline
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              error={errors.message}
            />
            <RippleButton type="submit" disabled={loading}>{loading ? "Sending..." : "Send"}</RippleButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
