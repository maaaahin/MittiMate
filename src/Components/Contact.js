import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-subheading">Optimize Your Farming—We're Here to Assist</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Tell us your issue.." />
        
      </div>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;