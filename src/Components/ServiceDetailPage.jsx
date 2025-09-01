import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Chip,
  Button,
  Card,
  CardContent,
  Avatar,
  Stack,
  Divider,
} from "@mui/material";
import "../CSS/ServiceDetailsPage.css";

/* ---------- Content config (swap per service) ---------- */
const CONTENT = {
  "digital-marketing": {
    badge: "Service • Digital Marketing",
    title: "Work with trusted marketing pros who know how to win",
    blurb:
      "Full-funnel growth across SEO, social, and paid media. We plan, launch, and optimize so you scale without adding headcount.",
    cta: "Book a strategy call",
    avatars: [
      { name: "Aiger", role: "SEO Lead", src: "https://i.pravatar.cc/120?img=12" },
      { name: "Samuel", role: "Paid Ads", src: "https://i.pravatar.cc/120?img=15" },
      { name: "Rose", role: "SMM", src: "https://i.pravatar.cc/120?img=32" },
    ],
    chips: ["SEO", "SMM", "Paid Ads", "Analytics & Reporting"],
    features: [
      { title: "Search Engine Optimization (SEO)", text: "SEO helps your business rank higher on Google so potential customers can find you easily. It involves optimizing your website structure, improving site speed, researching and targeting the right keywords, and creating high-quality content that matches user intent. With strong SEO, you can generate organic traffic, build long-term visibility, and reduce reliance on paid ads.", tone: "g1" },
      { title: "Social Media Marketing (SMM)", text: "Social media marketing focuses on growing your brand presence and engaging directly with your audience on platforms like Instagram, Facebook, LinkedIn, and Twitter/X. It includes creating engaging content, running ad campaigns, building community, and responding to customers. Done right, it builds trust, boosts visibility, and creates loyal brand advocates.", tone: "g2", illustration: true },
      { title: "Email Marketing", text: "Email marketing is one of the most cost-effective ways to stay connected with your audience. From welcome sequences and newsletters to promotional campaigns and personalized recommendations, it helps nurture leads and retain customers. With segmentation and automation, you can deliver the right message to the right people at the right time, driving consistent engagement and sales.", tone: "g3" },
      { title: "Influencer Marketing", text: "Influencer marketing leverages trusted creators and social media personalities who already have a strong connection with your target audience. By collaborating with influencers, you can expand reach, build credibility, and create authentic content that resonates with potential customers. This strategy works especially well for lifestyle, fashion, tech, and consumer brands.", tone: "g4" },
    ],
    logos: ["versure","layerise","gamepay","ikea","neurons","clarity"],
  },

  "web-development": {
    badge: "Service • Web Development, Graphic Designing and Video Shoots",
    title: "Websites, visuals, and videos that turn attention into revenue.",
    blurb:
      "From landing pages to e-commerce and custom integrations. Lightning-fast, SEO-ready, and built to scale.",
    cta: "Start a web project",
    avatars: [
      { name: "Alex", role: "Frontend Dev", src: "https://i.pravatar.cc/120?img=20" },
      { name: "Nina", role: "UI/UX", src: "https://i.pravatar.cc/120?img=58" },
      { name: "Ken", role: "Backend", src: "https://i.pravatar.cc/120?img=5" },
    ],
    chips: [
      "Branding",
      "Logos",
      "E-commerce",
      "Portfolio & Startups",
      "Institutes",
    ],
    features: [
      { title: "Web Development", text: "We design and build high-performing websites tailored to your brand and business goals. From sleek landing pages to scalable e-commerce platforms, our websites are fast, responsive, and optimized for conversions. Every project focuses on user experience and functionality, ensuring your online presence not only looks great but also drives measurable results.", tone: "g1" },
      { title: "Graphic Design", text: "Our graphic design services bring your brand’s story to life with visuals that capture attention and communicate clearly. From logos and branding kits to marketing materials and digital creatives, we craft designs that are both aesthetic and strategic—helping your brand stand out and connect with your audience on every platform.", tone: "g2", illustration: true },
      { title: "Video Shoot & Editing", text: "Video is one of the most powerful ways to engage your audience, and we handle the entire process—from planning and shooting to editing and post-production. Whether it’s a product showcase, brand story, or social media reel, our videos are crafted to be visually stunning, emotionally engaging, and optimized for maximum reach.", tone: "g3" },
      { title: "Social Media Management", text: "We help brands build a strong presence across platforms like Instagram, Facebook, LinkedIn, and more through end-to-end social media management. From content planning and creative design to posting schedules, engagement, and analytics, we ensure your brand stays consistent, relevant, and connected with the right audience.", tone: "g4" },
    ],
    logos: ["versure","layerise","gamepay","ikea","neurons","clarity"],
  },

  "business-ops": {
    badge: "Service • Business & Client Management",
    title: "Clarity in process, consistency in results, confidence in revenue",
    blurb:
      "We implement processes for lead generation, operations, and client handling so your team focuses on impact—not admin.",
    cta: "Optimize my operations",
    avatars: [
      { name: "Mira", role: "Ops Lead", src: "https://i.pravatar.cc/120?img=48" },
      { name: "Tom", role: "CRM", src: "https://i.pravatar.cc/120?img=7" },
      { name: "Ria", role: "PM", src: "https://i.pravatar.cc/120?img=30" },
    ],
    chips: ["Lead Generation", "Ops Management", "Client Handling", "Playbooks", "Automation"],
    features: [
      { title: "Business Operations Management", text: "Our operations management services streamline the way your business runs, improving efficiency and reducing bottlenecks. We help you set up systems, processes, and tools that ensure smooth workflows, better resource allocation, and clarity across all departments—so you can focus on growth, not firefighting.", tone: "g1" },
      { title: "Lead Generation", text: "We help you attract and capture the right audience through targeted strategies that convert interest into qualified leads. From optimized landing pages and ad campaigns to automation and nurturing workflows, our approach ensures a steady pipeline of potential clients ready to engage with your business.", tone: "g2", illustration: true },
      { title: "Client Management", text: "Strong client relationships are the foundation of sustainable business growth. We provide tools and strategies to help you onboard, communicate, and manage clients effectively. By creating a seamless client experience, we not only increase satisfaction but also build loyalty and long-term partnerships.", tone: "g3" },
      { title: "Order & Analytics Management", text: "We bring structure to your order tracking and provide in-depth analytics to keep your business performance transparent and measurable. From managing sales orders and fulfillment to tracking KPIs and generating reports, we ensure you have the insights needed to make informed decisions and grow with confidence.", tone: "g4" },
    ],
    logos: ["versure","layerise","gamepay","ikea","neurons","clarity"],
  },
};

/* Simple logo placeholders */
const Logo = ({ name }) => (
  <div className="svc-logo">{name}</div>
);

export default function ServiceDetailPage({ serviceKey: propKey }) {
  const params = useParams();
  const key = propKey || params.serviceKey || "digital-marketing";
  const data = CONTENT[key] || CONTENT["digital-marketing"];

  return (
    <main className="svc-page">
      {/* === HERO === */}
      <section className="container svc-hero">
        <div className="row align-items-center">
          {/* Text */}
          <div className="col-lg-6">
            <Chip label={data.badge} size="small" className="svc-badge" />
            <h1 className="svc-title">{data.title}</h1>
            <p className="svc-blurb">{data.blurb}</p>

            <div className="svc-chiprow">
              {data.chips.map((c) => (
                <Chip key={c} label={c} className="svc-chip" />
              ))}
            </div>

            <div className="svc-cta">
              <Button variant="contained" className="svc-btn">
                {data.cta}
              </Button>
            </div>
          </div>

          {/* Avatars / floating cards */}
          <div className="col-lg-6">
            <div className="svc-avatars">
              {data.avatars.map((a, i) => (
                <Card key={i} className={`svc-avatar-card pos-${i + 1}`}>
                  <CardContent className="svc-avatar-content">
                    <Avatar src={a.src} alt={a.name} sx={{ width: 56, height: 56 }} />
                    <div>
                      <div className="svc-avatar-name">{a.name}</div>
                      <div className="svc-avatar-role">{a.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <div className="svc-hero-blob blob-1" />
              <div className="svc-hero-blob blob-2" />
            </div>
          </div>
        </div>
      </section>

      {/* === TRUST STRIP === */}
      <section className="svc-trust">
        <div className="container">
          <div className="svc-trust-inner">
            {data.logos.map((l) => (
              <Logo key={l} name={l} />
            ))}
          </div>
        </div>
      </section>

      {/* === FEATURE GRID (colored cards) === */}
      <section className="container svc-features">
        <div className="svc-features-head">
          <h2>Recruit better, smarter, faster.</h2>
          <Stack direction="row" spacing={1} divider={<Divider orientation="vertical" flexItem />}>
            <Chip size="small" label="Company" />
            <Chip size="small" label="Member" />
          </Stack>
        </div>

        <div className="svc-feature-grid">
          {data.features.map((f, idx) => (
            <Card key={idx} className={`svc-feature-card ${f.tone} item-${idx + 1}`}>
              <CardContent>
                <h5>{f.title}</h5>
                <p>{f.text}</p>
                {f.illustration && <div className="svc-illustration" aria-hidden="true" />}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* === Bottom CTA === */}
      <section className="svc-bottom-cta">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <h3>Ready to get started with {data.badge.replace("Service • ", "")}?</h3>
          <div className="d-flex gap-2">
            <Button component={Link} to="/contact" variant="contained" className="svc-btn">
              Talk to us
            </Button>
            <Button component={Link} to="/portfolio" variant="outlined" className="svc-btn-outline">
              See our work
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
