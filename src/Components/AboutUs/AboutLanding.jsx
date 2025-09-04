import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import "../../CSS/About/AboutLanding.css";
import aboutIllustration from "../../assets/main2.png"; 

export default function AboutUs() {
  return (
    <section className="about-section">
        <Grid container alignItems="center" columnSpacing={6} rowSpacing={8} className='abgg'>
          {/* Left: text */}
          <Grid item xs={12} md={6} className="ab2gg">
            <div className="about-eyebrow">
              ABOUT <span className="about-us-green">US</span>
              <span className="about-underline" />
            </div>

            <Typography className="about-subtitle">
              We live and breathe digital. The Internet is our home.
            </Typography>

            <Typography className="about-body">
              We are a buzzing digital agency delivering integrated solutions
              across marketing, design and web. Our team blends research, strategy
              and creative craft to generate rich digital experiences for your
              brand—so you can grow faster, smarter, and with clarity.
            </Typography>
          </Grid>

          {/* Right: visual panel */}
          <Grid item xs={12} md={6} className="ab3gg">
            <div className="about-visual">
              <div className="about-visual-heading">
                <span className="about-green">We live &amp;</span>{" "}
                <span className="about-yellow">breathe digital</span>
              </div>

              {/* Illustration anchored inside the panel */}
              <img
                src={aboutIllustration}
                alt="We live & breathe digital"
                className="about-illustration"
              />
            </div>
          </Grid>
        </Grid>
    </section>
  );
}
