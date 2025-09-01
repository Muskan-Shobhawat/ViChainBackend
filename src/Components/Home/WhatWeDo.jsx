import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import "../../CSS/Home/WhatWeDo.css";
import marketingImg from "../../assets/instagram-marketing.png"; 
import businessImg from "../../assets/business-idea.png"; 

export default function WhatWeDo() {
  return (
    <section className="wedo-section">
      <Container>
        {/* Heading */}
        <Typography variant="h3" align="center" className="wedo-heading">
          What We <span className="accent">Do</span>
        </Typography>

        {/* Row 1 */}
        <Grid container spacing={6} alignItems="center" className="wedo-row">
          <Grid item xs={12} md={6}>
            <div className="wedo-text">
              <Typography variant="h4" className="wedo-title">
                Digital Marketing, Graphics & Web Development
              </Typography>
              <Typography className="wedo-description">
                We build your digital presence with creative campaigns, stunning 
                visuals, and functional websites. From branding to ad campaigns, 
                we provide complete marketing and design solutions to help your 
                business stand out online.
              </Typography>
              <Button variant="contained" className="wedo-btn">
                Learn More
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="wedo-image-container ">
            <img src={marketingImg} alt="Digital Marketing Illustration" className="wedo-image" />
          </Grid>
        </Grid>

        {/* Row 2 */}
        <Grid container spacing={6} alignItems="center" className="wedo-row reverse-row">
          <Grid item xs={12} md={6} className="wedo-image-container">
            <img src={businessImg} alt="Business Management Illustration" className="wedo-image" />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="wedo-text">
              <Typography variant="h4" className="wedo-title">
                Business Operations & Client Management
              </Typography>
              <Typography className="wedo-description">
                Streamline your business with smart client management, 
                efficient lead tracking, and smooth operations. 
                We ensure your processes are optimized so you can focus on growth.
              </Typography>
              <Button variant="outlined" className="wedo-btn-outline">
                Discover More
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
