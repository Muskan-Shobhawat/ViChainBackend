import React, { useState } from "react";
import "../../CSS/Home/Testimonials.css";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  IconButton,
  LinearProgress,
} from "@mui/material";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const BRAND = "#7b2cbf";
const ALT_BRAND = "rgba(244, 221, 190, 0.7)";

// Testimonials data
const testimonials = [
  // --- Slide 1 ---
  {
    quote:
      "Vichain transformed our social presence and doubled our inbound leads in 60 days.",
    name: "Miley Hegde",
    role: "Client",
    avatar: "https://i.pravatar.cc/100?img=32",
    color: "white", // 1st white
  },
  {
    quote: "Their strategy is sharp and execution is flawless. Highly recommended!",
    name: "James Sharma",
    role: "Client",
    avatar: "https://i.pravatar.cc/100?img=15",
    color: "purple", // 2nd purple
  },
  {
    quote: "From branding to ads, the team handled everything with speed and quality.",
    name: "John Iyer",
    role: "Client",
    avatar: "https://i.pravatar.cc/100?img=11",
    color: "purple", // 3rd purple
  },
  {
    quote:
      "Smooth process, clear communication, and measurable growth—exactly what we needed.",
    name: "Tina Kapoor",
    role: "Client",
    avatar: "https://i.pravatar.cc/100?img=5",
    color: "white", // 4th white
  },

  // --- Slide 2 ---
  {
    quote: "Their creativity gave our brand a fresh identity and better engagement.",
    name: "Rahul Sharma",
    role: "Client",
    avatar: "https://i.pravatar.cc/100?img=7",
    color: "white", // 1st white
  },
  {
    quote: "We saw 3x ROI on ads in just 90 days. Absolute professionals!",
    name: "Krishi Mehta",
    role: "Client",
    avatar: "https://i.pravatar.cc/100?img=10",
    color: "beige", // 2nd beige
  },
  {
    quote: "A complete one-stop solution for digital growth. They nailed it!",
    name: "Harish Patil",
    role: "Client",
    avatar: "https://i.pravatar.cc/100?img=21",
    color: "beige", // 3rd beige
  },
  {
    quote: "Fast, reliable, and always on point with execution.",
    name: "Aanya Kapoor",
    role: "Client",
    avatar: "https://i.pravatar.cc/100?img=28",
    color: "white", // 4th white
  },
];

// Card Component
const TestimonialCard = ({ quote, name, role, avatar, color }) => {
  let styles = {};
  if (color === "purple") {
    styles = { bgcolor: BRAND, color: "#fff" };
  } else if (color === "beige") {
    styles = { bgcolor: ALT_BRAND, color: "#000", boxShadow: "none" };
  } else {
    styles = { bgcolor: "background.paper", color: "text.primary" };
  }

  return (
    <Card
      elevation={color === "beige" ? 0 : 3}
      sx={{ height: "100%", borderRadius: 4, ...styles }}
    >
      <CardContent sx={{ p: 3, position: "relative" }}>
        <FormatQuoteRoundedIcon
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            fontSize: 36,
            color: color === "purple" ? "#fff" : BRAND,
          }}
        />
        <Typography
          variant="body2"
          sx={{ mt: 4, opacity: 0.9, lineHeight: 1.7 }}
        >
          {quote}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 3 }}>
          <Avatar src={avatar} alt={name} />
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              {name}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              {role}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

// Progress Component
const ProgressItem = ({ label, value }) => (
  <Box sx={{ mb: 3 }}>
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
      <Typography variant="subtitle2">{label}</Typography>
      <Typography variant="subtitle2">{value}%</Typography>
    </Box>
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        height: 10,
        borderRadius: 6,
        bgcolor: "grey.200",
        "& .MuiLinearProgress-bar": {
          backgroundColor: BRAND,
          borderRadius: 6,
        },
      }}
    />
  </Box>
);

// Main Component
export default function Testimonials() {
  const [page, setPage] = useState(0);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const handlePrev = () =>
    setPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  const handleNext = () =>
    setPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));

  const visibleCards = testimonials.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }} className="bb">
      <Grid container spacing={4} alignItems="stretch" className="gg">
        {/* Left: Cards */}
        <Grid item xs={12} md={8} className="fg">
          <Grid container spacing={3}>
            {visibleCards.map((t, i) => (
              <Grid item xs={12} sm={6} key={i} className="ttfix">
                <TestimonialCard {...t} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right: Text + Progress */}
        <Grid item xs={12} md={4} className="sg">
          <Box sx={{ pl: { md: 2 } }}>
            <Chip
              label="CLIENT'S REVIEW"
              variant="outlined"
              color="primary"
              sx={{
                mb: 2,
                fontWeight: 700,
                borderColor: BRAND,
                color: BRAND,
              }}
            />
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
              Amazing Response From Our Clients
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4 }}>
              We partner closely with brands to drive growth through strategy,
              design, and performance marketing.
            </Typography>

            <ProgressItem label="Project Success rate" value={85} />
            <ProgressItem label="Brand Marketing" value={96} />

            {/* Slider controls */}
            <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
              <IconButton
                onClick={handlePrev}
                sx={{ bgcolor: BRAND, color: "#fff" }}
              >
                <ArrowBackRoundedIcon />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{ bgcolor: BRAND, color: "#fff" }}
              >
                <ArrowForwardRoundedIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
