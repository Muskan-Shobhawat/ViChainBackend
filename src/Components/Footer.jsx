import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",
        py: 6,
        px: { xs: 4, md: 12 },
      }}
    >
      <Grid container spacing={4}>
        {/* Services Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Our Services
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="/digital-marketing" color="inherit" underline="hover">
              Digital Marketing
            </Link>
            <Link href="/business-management" color="inherit" underline="hover">
              Business & Client Management
            </Link>
            <Link href="/lead-generation" color="inherit" underline="hover">
              Lead Generation
            </Link>
            <Link href="/web-development" color="inherit" underline="hover">
              Web Development
            </Link>
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">123 Business Street, Jodhpur</Typography>
          <Typography variant="body2">Phone: +91 98765 43210</Typography>
          <Typography variant="body2">Email: info@vichain.com</Typography>
        </Grid>

        {/* Socials */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              component="a"
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              sx={{ color: "white" }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              sx={{ color: "white" }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              component="a"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              sx={{ color: "white" }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Note */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} ViChain. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
