import React from "react";
import "../../CSS/About/CoreFeatures.css";

/**
 * Core features section for Vichain
 * - All styles live in CoreFeatures.css
 * - Uses rem / vh units (no px)
 * - Accessible roles for list and items
 */

const CoreFeatures = () => {
  return (
    <section className="core-section" aria-label="Vichain core features">
      <div className="core-inner">
        <header className="core-header">
          <div className="core-label">Why Choose Us?</div>

          <h2 className="core-title">
            Core Features That Set Us Apart From The Competition
          </h2>

          <p className="core-sub">
            We’re your all-in-one growth partner — from idea to delivery. Scalable,
            customized solutions with clear, measurable outcomes that you can track.
          </p>
        </header>

        <div className="core-cards" role="list">
          {/* Card 1 */}
          <article className="card card-left" role="listitem" tabIndex="0">
            <div className="card-icon" aria-hidden="true">
              {/* simple SVG icon */}
              <svg viewBox="0 0 24 24" className="svg-icon">
                <path d="M12 2a4 4 0 00-4 4v7a4 4 0 108 0V6a4 4 0 00-4-4zM6 20a6 6 0 0112 0H6z" />
              </svg>
            </div>
            <h3 className="card-title">All-in-One Growth Partner</h3>
            <p className="card-desc">
              Strategy, product, marketing and support — we combine expertise to
              move your business forward with end-to-end execution.
            </p>
          </article>

          {/* Card 2 (featured) */}
          <article className="card card-center featured" role="listitem" tabIndex="0">
            <div className="card-icon featured-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="svg-icon">
                <path d="M3 13h2v-2H3v2zm4 0h2v-2H7v2zm4 0h6v-2h-6v2zM3 17h6v-2H3v2zM3 9h6V7H3v2zm10 8h8v-2h-8v2z" />
              </svg>
            </div>
            <h3 className="card-title">Scalable &amp; Customized Solutions</h3>
            <p className="card-desc">
              Modular systems and tailored workflows that grow with your business —
              flexible tech and processes built to scale.
            </p>
          </article>

          {/* Card 3 */}
          <article className="card card-right" role="listitem" tabIndex="0">
            <div className="card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="svg-icon">
                <path d="M3 12l2-2 4 4 8-8 2 2-10 10L3 12z" />
              </svg>
            </div>
            <h3 className="card-title">Transparent Results</h3>
            <p className="card-desc">
              Clear reporting, shared roadmaps and measurable KPIs — you always
              know what’s being delivered and why it matters.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
