import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
        maxWidth: "50rem", // responsive instead of 800px
        margin: "0 auto",
        padding: "5vh 2rem", // vh + rem combo
      }}
    >
      <Typography
        variant="h4"
        align="center"
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
          className="acc"
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
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
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
  );
};

export default FAQSection;
