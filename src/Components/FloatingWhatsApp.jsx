// FloatingWhatsApp.jsx
// import React from "react";
import { Box, Fab, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function FloatingWhatsApp({
  phone = "+919257591748", 
  message = "Hi! I need help with a project.",
}) {
  // create wa.me link (only numbers, no + or dashes in the phone for wa.me)
  const plainNumber = phone.replace(/[^\d]/g, "");
  const url = `https://wa.me/${plainNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Box
      sx={{
        position: "fixed",
        right: { xs: 16, md: 32 },
        bottom: { xs: 16, md: 32 },
        zIndex: 1400, // above most elements
        display: "flex",
        alignItems: "center",
        gap: 1,
        flexDirection: { xs: "row-reverse", md: "row-reverse" }, // icon on right
      }}
    >
      {/* Text bubble */}
      <Box
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textDecoration: "none",
          display: { xs: "none", md: "flex" }, // show bubble only on md+ (optional)
          alignItems: "center",
          bgcolor: "white",
          px: 2,
          py: 1,
          borderRadius: "999px",
          boxShadow: 3,
          minWidth: 100,
          "&:hover": { boxShadow: 6, transform: "translateY(-2px)" },
        }}
        aria-label="Chat on WhatsApp - Need Help"
      >
        {/* <WhatsAppIcon sx={{ color: "#25D366", mr: 1 }} /> */}
        <Box className="ww">
          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#111" }}>
            Need Help?
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Chat with us
          </Typography>
        </Box>
      </Box>

      {/* Floating round icon (always visible) */}
      <Fab
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        color="success"
        aria-label="Open WhatsApp chat"
        sx={{
          bgcolor: "#25D366",
          "&:hover": { bgcolor: "#1ebe5a" },
          width: 56,
          height: 56,
          boxShadow: 6,
        }}
      >
        <WhatsAppIcon sx={{ color: "white" }} />
      </Fab>
    </Box>
  );
}
