import { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import HeroSection from "./Components/Home/HeroSection.jsx";
import WhatWeDo from "./Components/Home/WhatWeDo.jsx";
import "./App.css";
import ServiceSection from "./Components/Home/ServiceSection.jsx";
import AboutSection from "./Components/Home/AboutSection.jsx";
import Showcase from "./Components/Home/Showcase.jsx";
import OurApproach from "./Components/Home/OurApproach.jsx";
import FAQSection from "./Components/Home/FAQSection.jsx";
import ProjectForm from "./Components/ProjectForm.jsx";
import Footer from "./Components/Footer.jsx";
import Testimonials from "./Components/Home/Testimonials.jsx";
import FloatingWhatsApp from "./Components/FloatingWhatsApp.jsx";
import AboutLanding from "./Components/AboutUs/AboutLanding.jsx";
import WhatWeDoAbout from "./Components/AboutUs/WhatWeDoAbout.jsx";
import Goals from "./Components/AboutUs/Goals.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoreFeatures from "./Components/AboutUs/CoreFeatures.jsx";
import HeroSectionService from "./Components/Service/HeroSectionService.jsx";
import TrustedLogo from "./Components/Service/TrustedLogo.jsx";
import GradientShowcase from "./Components/Service/GradientShowcase.jsx";
import ServicePageCards from "./Components/Service/ServicePageCards.jsx";
import ServiceDetailPage from "./Components/ServiceDetailPage.jsx";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <ServiceSection />
      <AboutSection />
      <OurApproach />
      <Showcase />
      <Testimonials />
      <FAQSection />
      <ProjectForm />
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutLanding />
      <WhatWeDoAbout />
      <Goals />
      <CoreFeatures />
      <ProjectForm />
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

function Service() {
  return (
    <>
      <Navbar />
      <HeroSectionService />
      <TrustedLogo />
      <GradientShowcase />
      <ServicePageCards />
      <ProjectForm />
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

function ServiceDetailPageWrapper() {
  return (
    <>
      <Navbar />
      <ServiceDetailPage />
      <ProjectForm />
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/About",
      element: <AboutUs />,
    },
    {
      path: "/Service",
      element: <Service />,
    },
    {
      path: "/Service/:serviceKey",
      element: <ServiceDetailPageWrapper />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
