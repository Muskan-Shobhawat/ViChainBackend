import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import "../CSS/Footer.css";

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
      <Grid container-fluid spacing={4} className="footergg">
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
        <Grid item xs={12} md={4} className="footerpp">
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" className="txtfooterpp">201, 2nd Floor, City Plaza, Near HP World & LCD, Opposite Medical Collage Road, Jaljog Circle, Jodhpur, Rajasthan (342001)</Typography>
          <Typography variant="body2" className="txtfooterpp">Phone: +91 9257591748</Typography>
          <Typography variant="body2" className="txtfooterpp">Email: info@vichain.com</Typography>
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
