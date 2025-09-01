import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Chip,
} from "@mui/material";
import url from "../../assets/solution.png";
import url2 from "../../assets/business-graph.png";
import url3 from "../../assets/a-result.png";

export default function About() {
  const BRAND = "#7b2cbf";
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center" mb={6}>
        {/* Left Column - Heading */}
        <Grid item xs={12} md={6}>
          <Chip
            label="About Us"
            color="primary"
            variant="outlined"
            sx={{ mb: 2, fontWeight: "bold", borderColor: BRAND, color: BRAND }}
          />
          <Typography variant="h4" gutterBottom className="abhead">
            Introducing{" "}
            <Box component="span" sx={{ fontWeight: "bold", color: BRAND }}>
              ViChain Tech
            </Box>
          </Typography>
          <Typography color="text.secondary" className="abdesc">
            At Vichain Tech, we believe that digital transformation should be
            simple, impactful, and results-driven. Our mission is to help
            businesses grow by delivering innovative solutions that combine
            creativity with technology. Whether you are a startup looking to
            build your presence or an established brand aiming to scale further,
            we provide strategies tailored to your unique goals. We specialize
            in a wide range of services, including digital marketing, SEO, ad
            campaigns, web development, video editing, and graphic design. Each
            solution is carefully crafted to not only strengthen your brand
            identity but also to connect you with the right audience. By
            focusing on measurable outcomes, we ensure your investments
            translate into visible growth.
          </Typography>
        </Grid>

        {/* Right Column - Supporting Text */}
        <Grid item xs={12} md={6}>
          <Typography color="text.secondary" className="abdesc">
            What sets us apart is our holistic approach. Instead of offering
            one-size-fits-all solutions, we work closely with you to understand
            your vision, challenges, and opportunities. From creating visually
            striking designs to managing campaigns that deliver leads, our team
            is committed to making your digital journey seamless and effective.
            At Vichain Tech, growth is not just about numbers—it’s about
            building long-term success. With a focus on innovation, creativity,
            and client satisfaction, we aim to be more than just a service
            provider. We are your trusted partner in navigating the digital
            landscape and unlocking your brand’s full potential.
          </Typography>
        </Grid>
      </Grid>

      {/* Benefits Row */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "center",
        }}
      >
        {/* Benefit 1 */}
        <Card
          sx={{ maxWidth: 345, borderRadius: 3, textAlign: "center", p: 2 }}
        >
          <CardMedia
            component="img"
            alt="All-in-One"
            height="120"
            image={url} // replace with your image path
            style={{ objectFit: "contain", margin: "0 auto", width: "80px" }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom className="abhead">
              All-in-One Growth Partner
            </Typography>
            <Typography variant="body2" color="text.secondary" className="abdesc">
              Instead of juggling multiple vendors for SEO, ads, web
              development, and creative design, businesses get everything under
              one roof. Consistency in branding, smooth collaboration, and
              faster execution.
            </Typography>
          </CardContent>
        </Card>

        {/* Benefit 2 */}
        <Card
          sx={{ maxWidth: 345, borderRadius: 3, textAlign: "center", p: 2 }}
        >
          <CardMedia
            component="img"
            alt="Scalable"
            height="120"
            image={url2}
            style={{ objectFit: "contain", margin: "0 auto", width: "80px" }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom className="abhead">
              Scalable & Customized Solutions
            </Typography>
            <Typography variant="body2" color="text.secondary" className="abdesc">
              From startups to enterprises, we adapt strategies to match your
              goals — brand awareness, lead generation, or full-scale digital
              transformation.
            </Typography>
          </CardContent>
        </Card>

        {/* Benefit 3 */}
        <Card
          sx={{ maxWidth: 345, borderRadius: 3, textAlign: "center", p: 2 }}
        >
          <CardMedia
            component="img"
            alt="Transparent Results"
            height="120"
            image={url3}
            style={{ objectFit: "contain", margin: "0 auto", width: "80px" }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom className="abhead">
              Transparent Results
            </Typography>
            <Typography variant="body2" color="text.secondary" className="abdesc">
              No jargon, no guesswork. Detailed reports, insights, and real
              metrics ensure you know where every penny goes — and how it grows
              your business.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
