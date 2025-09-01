import React from "react";
import { Button } from "@mui/material";
import "../../CSS/Service/HeroSectionService.css";
import img1 from "../../assets/laptop.jpg";
import img2 from "../../assets/idea.jpg";
import img3 from "../../assets/heart.jpg";
import img4 from "../../assets/pencil.jpg";

const people = [
img1,
img2,
img3,
img4,
];

export default function HeroSectionService() {
  return (
    <section className="vc-hero">
      <div className="container">
        <div className="row align-items-center vc-hero-row">
          {/* Left Text */}
          <div className="col-lg-7">
            <div className="vc-hero-content">
              <span className="vc-eyebrow">Powering your brand with</span>
              <h1 className="vc-hero-title">
                Strategy. Creativity. and{" "}
                <span className="vc-accent">Technology</span>
              </h1>
              <p className="vc-hero-sub">
                From strategy and design to marketing and management, we handle
                it all. Our team builds websites that convert, creates visuals
                that inspire, and sets up systems that help your business grow
                without chaos.
              </p>

              <div className="vc-hero-features">
                <div className="feature">
                  <strong>SEO & Paid Ads</strong>
                  <span>Data-driven campaigns</span>
                </div>
                <div className="feature">
                  <strong>Creative Studio</strong>
                  <span>Design & video production</span>
                </div>
                <div className="feature">
                  <strong>Web & Integrations</strong>
                  <span>Custom websites & tech setups </span>
                </div>
              </div>

              <div className="vc-hero-ctas">
                <Button className="vc-btn-primary" variant="contained">
                  Get Started
                </Button>
              </div>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="col-lg-5">
            <div className="vc-image-grid">
              {people.map((src, i) => (
                <div key={i} className={`vc-shape vc-shape-${i + 1}`}>
                  <img src={src} alt={`person-${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
