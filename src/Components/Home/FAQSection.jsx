import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import faqImage from "../../assets/faq.png"; // 👉 add your image path here

const faqData = [
  {
    question: "What is the typical project timeline?",
    answer:
      "Our project timelines vary depending on scope and requirements. Generally, projects can take anywhere from 2 weeks to 3 months.",
  },
  {
    question: "Do you provide customized project services?",
    answer:
      "Yes! We tailor our services to meet your unique business requirements, ensuring flexibility and scalability.",
  },
  {
    question: "Can I request modifications after the project is delivered?",
    answer:
      "Absolutely. We provide support and allow modifications post-delivery to ensure your project meets expectations.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work across multiple industries including IT, finance, e-commerce, healthcare, and creative sectors.",
  },
  {
    question: "How do you ensure quality in projects?",
    answer:
      "We follow strict quality assurance processes, regular testing, and feedback cycles to deliver top-notch results.",
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "3rem",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "5vh 2rem",
        flexWrap: "wrap", // responsive for smaller screens
      }}
    >
      {/* Accordion Section */}
      <div style={{ flex: "1 1 500px", minWidth: "320px" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333", marginBottom: "3vh" }}
        >
          Frequently Asked Questions
        </Typography>

        {faqData.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{ marginBottom: "1.5rem" }}
          >
            <AccordionSummary
              expandIcon={
                expanded === index ? (
                  <RemoveIcon sx={{ color: "#7b2cbf", fontSize: "1.5rem" }} />
                ) : (
                  <AddIcon sx={{ color: "#7b2cbf", fontSize: "1.5rem" }} />
                )
              }
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  color: expanded === index ? "#7b2cbf" : "#333",
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#555", fontSize: "1rem" }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

      {/* Image Section */}
      <div style={{ flex: "1 1 400px", textAlign: "center" }}>
        <img
          src={faqImage}
          alt="FAQ Illustration"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "12px",
          }}
        />
      </div>
    </div>
  );
};

export default FAQSection;
