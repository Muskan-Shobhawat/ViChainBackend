import React from "react";
import { Card, CardContent } from "@mui/material";
import "../../CSS/Service/GradientShowcase.css";

export default function GradientShowcase() {
  return (
    <section className="vc-gradient">
      <div className="container">
        <div className="vc-gradient-panel">
          <h2 className="vc-gradient-title">We help creators & brands tell better stories</h2>
          <p className="vc-gradient-sub">Influencer campaigns, creative shoots and strategy to scale your brand</p>

          <div className="vc-cards-row">
            <Card className="vc-mini-card">
              <CardContent>
                <h5>Strategy</h5>
                <p>Campaign blueprints and audience playbooks.</p>
              </CardContent>
            </Card>

            <Card className="vc-mini-card">
              <CardContent>
                <h5>Creative Studio</h5>
                <p>Video shoots, editing, and motion graphics.</p>
              </CardContent>
            </Card>

            <Card className="vc-mini-card">
              <CardContent>
                <h5>Performance</h5>
                <p>Paid ads + conversion optimisation for scale.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
