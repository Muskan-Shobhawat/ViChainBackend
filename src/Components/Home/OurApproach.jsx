import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, CardContent, Typography } from "@mui/material";

// Generate a wavy line between two points
const wavePath = (x1, y1, x2, y2, amplitude = 20, frequency = 6) => {
  const points = [];
  const steps = 20; // more steps = smoother wave
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = x1 + (x2 - x1) * t;
    const y =
      y1 + (y2 - y1) * t + Math.sin(t * Math.PI * frequency) * amplitude;
    points.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
  }
  return points.join(" ");
};

const notesData = [
  {
    id: 1,
    title: "Discovery & Strategy",
    text: "We start with deep discussions to understand your goals, challenges, and vision. Together, we craft a clear roadmap for success.",
    color: "#FFE5E0",
  },
  {
    id: 2,
    title: "Creative & Design",
    text: "Our design team builds engaging visuals, UI/UX, and branding elements tailored for your business.",
    color: "#E0E7FF",
  },
  {
    id: 3,
    title: "Development & Execution",
    text: "From websites to ad campaigns, we bring ideas to life with cutting-edge technology and proven strategies.",
    color: "#F3E8FF",
  },
  {
    id: 4,
    title: "Optimization & Lead Generation",
    text: "We monitor results, optimize campaigns, and ensure your brand consistently attracts the right audience.",
    color: "#FFF7E0",
  },
  {
    id: 5,
    title: "Client Collaboration & Management",
    text: "We maintain transparent communication, provide regular updates, and adapt to your feedback throughout the journey.",
    color: "#E0F7F4",
  },
];

export default function OurApproach() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [positions, setPositions] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const updatePositions = () => {
    if (!sectionRef.current) return;

    const sectionRect = sectionRef.current.getBoundingClientRect();

    const newPositions = cardRefs.current.map((card) => {
      if (card) {
        const rect = card.getBoundingClientRect();
        return {
          x: rect.left - sectionRect.left + rect.width / 2,
          y: rect.top - sectionRect.top + rect.height / 2,
        };
      }
      return null;
    });
    setPositions(newPositions);
  };

  useEffect(() => {
    updatePositions();
    window.addEventListener("resize", updatePositions);
    window.addEventListener("scroll", updatePositions);
    return () => {
      window.removeEventListener("resize", updatePositions);
      window.removeEventListener("scroll", updatePositions);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#fafafa",
        padding: "4rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* SVG Connector */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {positions.map((pos, i) => {
          if (i < positions.length - 1 && pos && positions[i + 1]) {
            const next = positions[i + 1];
            return (
              <path
                key={i}
                d={wavePath(pos.x, pos.y, next.x, next.y)}
                stroke={
                  hoveredIndex === i || hoveredIndex === i + 1
                    ? "#000"
                    : "#d1d5db"
                }
                strokeWidth={
                  hoveredIndex === i || hoveredIndex === i + 1 ? 3 : 2
                }
                strokeDasharray="6,6"
                fill="transparent"
              />
            );
          }
          return null;
        })}
      </svg>

      <Container style={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ fontWeight: "bold", fontSize: "2.5rem" }}
        >
          Our Approach
        </Typography>
        <Typography
          variant="body1"
          align="center"
          paragraph
          style={{
            maxWidth: "45rem",
            margin: "0 auto 3rem",
            fontSize: "1.1rem",
          }}
        >
          From discovery to execution, here’s how we collaborate with you to
          deliver impactful results across digital marketing, web development,
          design, and client management.
        </Typography>

        {notesData.map((note, index) => (
          <Row
            key={note.id}
            className={`align-items-center mb-5 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <Col xs={12} md={6} className="d-flex justify-content-center">
              <Card
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: note.color,
                  borderRadius: "1.25rem",
                  boxShadow: "0 0.5rem 1.2rem rgba(0,0,0,0.1)",
                  position: "relative",
                  minHeight: "15rem",
                  paddingTop: "1rem",
                  width: "90%",
                  transform: index % 2 === 0 ? "rotate(-2deg)" : "rotate(2deg)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <CardContent>
                  <Typography
                    variant="subtitle2"
                    style={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    0{note.id}
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ fontSize: "1.25rem" }}
                  >
                    {note.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ fontSize: "1rem", lineHeight: 1.6 }}
                  >
                    {note.text}
                  </Typography>
                </CardContent>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}
