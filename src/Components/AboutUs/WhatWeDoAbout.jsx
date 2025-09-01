import React from "react";
import "../../CSS/About/WhatWeDoAbout.css";
import aboutIllustration from "../../assets/main2.png";

// Import your stat images
import stat1 from "../../assets/project.png";
import stat2 from "../../assets/clientconf.png";
import stat3 from "../../assets/expert.png";

export default function WhatWeDo() {
  return (
    <section className="wedo-section2">
      <div className="wedo-container2">
        {/* Left Column - Stats */}
        <div className="wedo-stats">
          <div className="stat-box">
            <div className="stat-icon">
              <img src={stat1} alt="Projects Icon" />
            </div>
            <h3>98%</h3>
            <p>Successful Projects</p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">
              <img src={stat2} alt="Clients Icon" />
            </div>
            <h3>1M+</h3>
            <p>Clients Worldwide</p>
          </div>

          <div className="stat-box highlight">
            <div className="stat-icon">
              <img src={stat3} alt="Growth Icon" />
            </div>
            <h3>$50M</h3>
            <p>Media Investment Managed</p>
          </div>
        </div>

        {/* Middle Column - Image */}
        <div className="wedo-image">
          <img src={aboutIllustration} alt="Vichain Team" />
        </div>

        {/* Right Column - Text */}
        <div className="wedo-text">
          <span className="wedo-tag">What We Do</span>
          <h2>
            Helping Brands Grow With{" "}
            <span className="accent">Digital Innovation</span>
          </h2>
          <p>
            At Vichain, we combine creativity, technology, and strategy to
            deliver measurable growth. From digital campaigns and brand
            management to software solutions, we help businesses scale.
          </p>

          <div className="wedo-points">
            <span>✔ Digital Marketing</span>
            <span>✔ Creative Solutions</span>
            <span>✔ Business Automation</span>
            <span>✔ Client Success Stories</span>
          </div>

          <button className="wedo-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
}
