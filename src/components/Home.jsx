import React from "react";
import "./Home.css";  // Or home.css if lowercase

export default function Home() {
  return (
    <div className="page-container">  {/* NEW: This wrapper fixes the layout */}
      
      {/* Main Hero Section */}
      <main className="home-section">  {/* Changed to <main> for semantics */}
        <div className="home-container">
          <div className="home-grid">
            
            {/* Left Text Card */}
            <div className="glass-card">
              <h2 className="hi-text">Hi, I am</h2>
              <h1 className="name">Cloyd Inoc</h1>
              <h3 className="title">
                Web Designer &<br />Developer
              </h3>
              <p className="description">
                I craft visually captivating and user-friendly digital experiences by combining creativity, sleek UI design, and seamless interactions that engage and inspire.
              </p>
            </div>

            {/* Right Photo */}
            <div className="photo-wrapper">
              <div className="glow-effect"></div>  {/* Assuming you have this for glow */}
              <img src="/3.jpg" alt="Cloyd Inoc" className="profile-photo" />
            </div>
            
          </div>
        </div>
      </main>

      {/* Footer – Now sticks to bottom */}
      <footer className="site-footer">
        <div className="social-icons">
          <a
            href="https://facebook.com/cloydinoc"  // Your real FB link
            target="_blank"
            rel="noopener noreferrer"
            className="icon facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://github.com/cloydinoc-123"  // Your real GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="icon github"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p className="copyright">© 2025 Cloyd Inoc. All rights reserved.</p>
      </footer>
      
    </div>
  );
}