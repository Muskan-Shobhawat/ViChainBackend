import React from "react";
// import Link  from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Chip, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import url from "../../assets/marketing.png";
import url2 from "../../assets/graphic.png";
import url3 from "../../assets/lead.png";
import url4 from "../../assets/videoo.png";
import url5 from "../../assets/client.png";
import "../../CSS/Home/ServiceSection.css";

const Services = () => {
  const BRAND = "#7b2cbf";
  return (
    <section className="py-5 ss">
      <div className="row g-4 justify-content-center  cardsectionss">
        {/* Card 1 - Our Services Heading */}
        <div className="col-md-4 at">
          <div className="card h-100 text-center border-0 shadow-sm cardservice">
            <div className="card-body d-flex flex-column justify-content-center">
              <Chip
                label="OUR SERVICES"
                variant="outlined"
                color="primary"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  borderColor: BRAND,
                  color: BRAND,
                  width: 130,
                }}
              />
              <p className="mb-0" id="servicetext">
                We design impossibilities with digital solutions tailored for
                your growth.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 - Digital Marketing with Gradient Background */}
        <div className="col-md-4  realcard">
          <div className="card h-100 text-center border-0 shadow-sm text-black">
            <div className="card-body d-flex flex-column justify-content-evenly align-items-center">
              <img src={url} alt="" className="imgset" />
              <h5 className="fw-bold cardheads">Digital Marketing</h5>
              <p className="mb-0 cardtxt">
                Grow your brand online with our Digital Marketing services! From
                social media and SEO to ads, content, and email campaigns – we
                help you reach the right audience, boost visibility, and turn
                clicks into loyal customers. Simple, smart, and result-driven
                strategies to take your business forward.
              </p>
              <div className="fixbtn2">
                <Button
                  variant="outlined"
                  className="service-btn-outline"
                  endIcon={<ArrowForwardIcon />}
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Graphic Designing */}
        <div className="col-md-4 realcard">
          <div
            className="card h-100 text-center border-0 shadow-sm"
            style={{
              background:
                "linear-gradient(10deg, rgba(184,154,214,0.94) 0%, rgba(234,205,161,0.92) 60%, rgba(245,245,245,0.9) 100%)",
            }}
          >
            <div className="card-body d-flex flex-column justify-content-evenly align-items-center">
              <img src={url3} alt="" className="imgset" />
              <h5 className="fw-bold cardheads">Lead Generation</h5>
              <p className="mb-0 cardtxt">
                Turn prospects into paying customers with our Lead Generation
                services. We use smart strategies like targeted ads, SEO, email
                campaigns, and social media outreach to connect you with the
                right audience. Our goal is simple—deliver high-quality leads
                that grow your business faster and more efficiently.
              </p>
              <div className="fixbtn2">
                <Button
                  variant="outlined"
                  className="service-btn-outline"
                  endIcon={<ArrowForwardIcon />}
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="row g-4 justify-content-center mt-4 cardsectionss">
        {/* Card 4 - Lifted Web Development */}
        <div className="col-md-4 realcard">
          <div className="card h-100 text-center border-0 shadow-sm lifted">
            <div className="card-body d-flex flex-column justify-content-evenly align-items-center">
              <img src={url4} alt="" className="imgset" />
              <h5 className="fw-bold cardheads">Video Shoot & Editing</h5>
              <p className="mb-0 cardtxt">
                Bring your ideas to life with our professional Video Shoot and
                Editing services. From corporate films and product shoots to
                social media reels and creative ads, we capture stunning visuals
                and craft engaging edits that tell your story, connect with your
                audience, and leave a lasting impact.
              </p>
              <div className="fixbtn2">
                <Button
                  variant="outlined"
                  className="service-btn-outline"
                  endIcon={<ArrowForwardIcon />}
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 - Video Shoot & Editing */}
        <div className="col-md-4 realcard">
          <div className="card h-100 text-center border-0 shadow-sm">
            <div className="card-body d-flex flex-column justify-content-evenly align-items-center">
              <img src={url2} alt="" className="imgset" />
              <h5 className="fw-bold cardheads">Web Dev & Graphic Designing</h5>
              <p className="mb-0 cardtxt">
                We bring creativity and technology together with our Web
                Development and Graphic Designing services. From building sleek,
                responsive websites to designing impactful visuals like logos,
                brochures, and social media content, we craft digital
                experiences that are both functional and visually
                stunning—helping your brand shine online and offline.
              </p>
              <div className="fixbtn2">
                <Button
                  variant="outlined"
                  className="service-btn-outline"
                  endIcon={<ArrowForwardIcon />}
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 6 - Business & Client Management */}
        <div className="col-md-4 realcard">
          <div className="card h-100 text-center border-0 shadow-sm">
            <div className="card-body d-flex flex-column justify-content-evenly align-items-center">
              <img src={url5} alt="" className="imgset" />
              <h5 className="fw-bold cardheads">
                Business & Client Management
              </h5>
              <p className="mb-0 cardtxt">
                Streamline your workflow and build stronger client relationships
                with our Business Operations and Client Management services. We
                help you organize processes, improve coordination, and deliver
                seamless support—ensuring efficiency, professionalism, and
                client satisfaction at every step.
              </p>
              <div className="fixbtn2">
                <Button
                  variant="outlined"
                  className="service-btn-outline"
                  endIcon={<ArrowForwardIcon />}
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .lifted {
          position: relative;
          top: -20px;
          z-index: 2;
        }
      `}</style>
    </section>
  );
};

export default Services;
