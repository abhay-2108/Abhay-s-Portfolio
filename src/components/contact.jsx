import React, { useState } from "react";
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

const RippleButton = ({ children, onClick, type = "button" }) => {
  return (
    <button className="ripple-button" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        alert("An error occurred: " + result.message);
      }
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    }
    setLoading(false);
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
                value={formData.name}
                onChange={handleChange}
                required
                error={errors.name}
              />
              <WaveField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                error={errors.email}
              />
            </div>
            <WaveField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              error={errors.subject}
            />
            <WaveField
              label="Message"
              name="message"
              multiline
              value={formData.message}
              onChange={handleChange}
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
