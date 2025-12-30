import React from "react";
import "../../CSS/Service/TrustedLogo.css";
import brand1 from "../../assets/nakshi.png";
import brand2 from "../../assets/monkey.jpeg";
import brand3 from "../../assets/gaya.jpeg";
import brand4 from "../../assets/foods.jpeg";
import brand5 from "../../assets/easy.jpeg";

const logos = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
];

export default function TrustedLogos() {
  return (
    <section className="vc-trusted">
      <div className="container">
        <p className="trusted-text">Trusted by 25,000+ world-class brands</p>
        <div className="logo-row">
          {logos.map((l,i) => (
            <img key={i} src={l} alt={`logo-${i}`} className="trusted-logo" />
          ))}
        </div>
      </div>
    </section>
  );
}
