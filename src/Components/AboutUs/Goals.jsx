import React, { useState } from "react";
import "../../CSS/About/Goals.css";
import url from "../../assets/3d.png";

const AboutSection = () => {
  const [tab, setTab] = useState("mission");

  const tabs = [
    { id: "mission", label: "Our Mission" },
    { id: "vision", label: "Our Vision" },
    { id: "goal", label: "Our Goal" },
  ];

  const content = {
    mission:
      "To deliver secure, scalable web and blockchain solutions that empower businesses to build trust, streamline operations, and grow confidently.",
    vision:
      "To be the trusted technology partner for forward-thinking organizations — connecting innovation with lasting business value.",
    goal:
      "Create measurable impact through reliable products, transparent processes, and long-term client partnerships.",
  };

  return (
    <section className="about-section2" aria-label="About Vichain">
      <div className="about-grid">
        <div className="about-image-wrap" aria-hidden="false">
          <img
            src={url}
            alt="Vichain team collaborating"
            className="about-image"
          />
        </div>

        <div className="about-text">
          <div className="label">ABOUT MISSION</div>

          <h2 className="headline">
            Our Main Goal to Satisfied{" "}
            <span className="emphasize">local &amp; Global Clients</span>
          </h2>

          <div
            className="pills"
            role="tablist"
            aria-label="About tabs"
          >
            {tabs.map((t) => {
              const active = t.id === tab;
              return (
                <button
                  key={t.id}
                  className={`pill ${active ? "active" : ""}`}
                  onClick={() => setTab(t.id)}
                  role="tab"
                  aria-selected={active}
                  aria-controls={`panel-${t.id}`}
                  id={`tab-${t.id}`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* 🔹 This will now update dynamically */}
          <h3 className="subheading">
            {tabs.find((t) => t.id === tab)?.label}
          </h3>

          <div
            className="about-content"
            id={`panel-${tab}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab}`}
          >
            {Object.keys(content).map((key) => {
              const isActive = key === tab;
              return (
                <p
                  key={key}
                  className={`content-item ${isActive ? "active" : ""}`}
                  aria-hidden={!isActive}
                >
                  {content[key]}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
