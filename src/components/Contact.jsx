import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="page-container">
      <div className="contact-container">
        <div className="contact-grid">

          {/* LEFT: Text + Button */}
          <div className="contact-left">
            <div className="contact-card">
              <h1 className="collaborate-title">Let's Collaborate</h1>
              <p className="collaborate-text">
                I'm open for freelance work, collaborations, or anything creative.
              </p>

              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                className="contact-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                cloydinoc2020@gmail.com
              </a>
            </div>
          </div>

          {/* RIGHT: Your Photo – Same as Home */}
          <div className="contact-right">
            <div className="photo-container">
              <img 
                src="/3.jpg" 
                alt="Cloyd Inoc" 
                className="contact-photo" 
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}