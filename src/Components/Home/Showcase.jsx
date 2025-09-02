import React from "react";
import "../../CSS/Home/Showcase.css";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import url from "../../assets/video.mp4";

export default function Showcase() {
  return (
    <Container
      sx={{ py: 8, position: "relative", textAlign: "center" }}
      className="sscontainer"
    >
      {/* Background Text */}
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "-2%",
          left: "0",
          fontSize: { xs: "3rem", md: "8rem" },
          fontWeight: "bold",
          color: "rgba(0,0,0,0.05)",
          zIndex: 0,
        }}
        className="text1"
      >
        transforming
      </Typography>
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "-2%",
          fontSize: { xs: "3rem", md: "8rem" },
          fontWeight: "bold",
          color: "rgba(0,0,0,0.05)",
          zIndex: 0,
          transform: "rotate(90deg)",
        }}
        className="text2"
      >
        brands
      </Typography>

      {/* Central Video/Image */}
      <Box
        component="div"
        sx={{
          position: "relative",
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: 4,
          zIndex: 1,
          maxWidth: "800px",
          mx: "auto",
        }} className="videovv"
      >
        <video
          src={url}
          controls
          autoPlay
          muted
          loop
          style={{ width: "100%", display: "block" }}
        />
        {/* Play Button Overlay */}
        {/* <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "primary.main",
            borderRadius: "50%",
            width: 60,
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Typography variant="h6" color="white">
            ▶
          </Typography>
        </Box> */}
      </Box>

      {/* Stats / Projects Completed */}
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 6 }}>
        {[
          { label: "Projects Completed", value: "250+" },
          { label: "Happy Clients", value: "180+" },
          { label: "Awards Won", value: "15" },
        ].map((stat, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card elevation={2} sx={{ borderRadius: 3 }} className="ggcard">
              <CardContent>
                <Typography variant="h4" fontWeight="bold" color="#7b2cbf" className="numbertext">
                  {stat.value}
                </Typography>
                <Typography variant="body1" color="black" className="numbertext2">
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
