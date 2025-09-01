import React from "react";
import { Card, CardContent, Button } from "@mui/material";
import "../../CSS/Service/ServicePageCards.css";

const services = [
  {
    title: "Digital Marketing",
    text: "Paid ads, SEO, social growth — measurable ROI.",
    icon: "💡",
    link: "/Service/digital-marketing",
  },
  {
    title: "Web Development & Graphic Designing",
    text: "Landing pages, e-commerce, and custom integrations.",
    icon: "⚙️",
    link: "/Service/web-development",
  },
  {
    title: "Business & Client Management",
    text: "Branding, social creatives, motion and edits.",
    icon: "🎬",
    link: "/Service/business-ops",
  },
];

export default function ServicesCards() {
  return (
    <section className="vc-services">
      <div className="container">
        <div className="row">
          {services.map((s, i) => (
            <div className="col-md-4" key={i}>
              <Card className="vc-service-card">
                <CardContent>
                  <div className="vc-service-icon">{s.icon}</div>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                  {/* Read More Link */}
                  <Button
                    href={s.link}
                    size="small"
                    variant="text"
                    className="vc-read-more"
                  >
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
