// components/Projects/Projects.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Recommended: take a full-page screenshot of each live site and save to src/Assets/Projects/
import shinyangaImg from "../../Assets/Projects/events.png";       // replace → shinyanga.png
import havanCutzImg from "../../Assets/Projects/cutz.jpg";   // replace → havancutz.png
import weddingImg from "../../Assets/Projects/wedding.png";      // replace → kejoat.png
import cognisiveImg from "../../Assets/Projects/cog.jpg";         // replace → cognisive.png
import rapidTowImg from "../../Assets/Projects/towing.jpg";        // good match ✓
import rsfImg from "../../Assets/Projects/res.jpg";             // replace → rsf.png
import hippoBuckImg from "../../Assets/Projects/hip.jpg";   // replace → hippobuck.png
import ubiruImg from "../../Assets/Projects/prof.jpg";             // replace → ubiru.png
import kejoatImg from "../../Assets/Projects/kej.jpg";      // replace → kejoat.png

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "#475569", marginBottom: "10px" }}>
          A selection of client projects and products I've designed and built.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shinyangaImg}
              isBlog={false}
              title="Shinyanga House"
              description="Premium event gardens and hospitality venue in Limuru, Kenya. Built with Next.js 14 and Tailwind CSS — covers weddings, corporate events, photo shoots, and accommodation bookings."
              ghLink="https://github.com/KabiruH/shinyanga-house"
              demoLink="https://shinyanga-house.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={havanCutzImg}
              isBlog={false}
              title="Havan Cutz"
              description="Full-featured barbershop booking platform built with Next.js and TypeScript. Clients can book, reschedule, and look up appointments; staff have a dedicated login and management dashboard."
              ghLink="https://github.com/KabiruH/barber-appointment"
              demoLink="https://barber-appointment-lovat.vercel.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weddingImg}
              isBlog={false}
              title="Wedding Planner"
              description="A personalised, invite-only wedding site built with Next.js and deployed on Vercel. Guests receive a unique link that opens a personalised invitation page with their name, event details, dress code, gift registry, a downloadable PDF card, and an RSVP form"
              ghLink="https://github.com/KabiruH/wedding"
              demoLink="https://wedding-eight-brown-95.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cognisiveImg}
              isBlog={false}
              title="Cognisive Ventures"
              description="Corporate website for a Nairobi-based IT solutions firm. Covers hardware upgrades, Windows installations, networking, and computer supply. Built with Next.js and TypeScript."
              ghLink="https://github.com/KabiruH/cognisive-ventures"
              demoLink="https://cognisive-ventures.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rapidTowImg}
              isBlog={false}
              title="Rapid Tow Recovery"
              description="24/7 emergency towing and roadside assistance service website covering multiple U.S. states. Features transparent pricing, service area maps, and instant call-to-action. Built with Next.js and Tailwind CSS."
              ghLink="https://github.com/KabiruH/rapid-tow"
              demoLink="https://rapid-tow-nu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rsfImg}
              isBlog={false}
              title="Resilient Scholars Foundation"
              description="NGO platform empowering underprivileged Kenyan high school students through scholarships and mentorship. Includes M-Pesa and PayPal donation flows, staff login, and scholarship management. Built with Next.js."
              ghLink="https://github.com/KabiruH/RSF"
              demoLink="https://rsf-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hippoBuckImg}
              isBlog={false}
              title="Hotel Hippo Buck"
              description="Hotel booking system for a lakeside property in Homa Bay Town, Kenya. Dual-currency pricing (KES/USD), M-Pesa integration, email notifications via Resend, and an admin dashboard. Built with Next.js and Prisma."
              ghLink="https://github.com/KabiruH/Hippo-Buck"
              demoLink="https://hippo-buck.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ubiruImg}
              isBlog={false}
              title="Ubiru Industries"
              description="Company profile website for Ubiru Industries, showcasing services across event planning, communications, software development, and hardware procurement. Built with React."
              ghLink="https://github.com/KabiruH/ubiru-industries"
              demoLink="https://ubiru-industries.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kejoatImg}
              isBlog={false}
              title="KEJOAT Limited"
              description="B2B website for Kenya's authorized distributor of Control Techniques variable speed drives. Covers AC drives, DC drives, and industrial automation solutions for manufacturing, HVAC, and water treatment. Built with Next.js."
              ghLink="https://github.com/KabiruH/kejoat-website"
              demoLink="https://kejoat-website.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;