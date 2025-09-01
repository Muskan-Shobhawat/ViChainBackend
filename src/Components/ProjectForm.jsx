import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Grid,
} from "@mui/material";
import projectImg from "../assets/form.png"; // 👉 replace with your image path


export default function ProjectForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Integrate backend or email API here
  };

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#7b2cbf" }}
        >
          Have any project in mind?
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          gutterBottom
          sx={{ mb: 6, color: "text.secondary" }}
        >
          Let’s discuss your idea and make it real.
        </Typography>

        <Grid container spacing={5} alignItems="center">
          {/* Left Side Image */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center" }}>
              <img
                src={projectImg}
                alt="Project discussion"
                style={{
                  maxWidth: "20%",
                  height: "auto",
                  borderRadius: "12px",
                }}
              />
            </Box>
          </Grid>

          {/* Right Side Form */}
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* Name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                {/* Email */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    variant="outlined"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                {/* Phone */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    inputProps={{ pattern: "[0-9]{10}", maxLength: 10 }}
                    helperText="Enter 10-digit number"
                    required
                  />
                </Grid>

                {/* Message */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Message"
                    variant="outlined"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    required
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: "#7b2cbf",
                      "&:hover": { backgroundColor: "#5a189a" },
                      px: 5,
                      py: 1.5,
                      borderRadius: "30px",
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
