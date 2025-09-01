import React from "react";
import { Button } from "@mui/material";
import { ReactTyped } from "react-typed";
import url from "../../assets/mainpp.png";

export default function HeroSection() {
  return (
    <section className="container-fluid py-5 herocontainer">
      <div className="row align-items-center fix">
        {/* Left Content */}
        <div className="col-lg-9 text-center text-lg-start txtfix">
          <h1 className="fw-bold display-5 ppfix1">
            We Provide{" "}
            <span className="text-primary ppfix">
              <ReactTyped
                strings={[
                  "Digital Marketing",
                  "Lead Generation",
                  "Web Development",
                  "Graphic Designing",
                  "Video Shoots",
                  "Video Editing",
                  "Ad Campaigns",
                  "Client Management",
                ]}
                typeSpeed={80}
                backSpeed={50}
                loop
              />
            </span>
          </h1>
          <p className="mt-3 text-muted ppfix2">
            Growth Made Simple — from marketing to design, development, and
            client management. <br />
            Vichain brings together marketing, creative design, smart
            development, and easy client management in one place. We make the
            process effortless, helping your business stay focused, move faster,
            and reach new heights with confidence.
          </p>
          <div className="mt-4">
            <Button variant="contained" className="btndtn" size="large">
              Get Started
            </Button>
            <Button
              variant="outlined"
              className="btnctn"
              size="large"
              sx={{ ml: 2 }}
            >
              Explore More
            </Button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="col-lg-6 text-center mt-5 mt-lg-0 imgfix">
          <img
            src={url}
            alt="Vichain Digital Solutions"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
}
