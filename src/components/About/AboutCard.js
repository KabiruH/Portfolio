// components/About/AboutCard.js
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Kelvin Kabiru</span> from{" "}
            <span className="purple">Nairobi, Kenya</span> — a full-stack
            software engineer with a background in economics and statistics.
            <br />
            <br />
            I build and deploy production web and mobile applications, primarily
            with{" "}
            <span className="purple">
              Next.js, TypeScript, React Native, Prisma ORM, and MySQL
            </span>
            . My projects range from attendance management systems for Kenyan
            technical colleges to hotel booking platforms, NGO donation portals,
            and B2B industrial websites.
            <br />
            <br />
            Beyond coding, a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Outdoor thrilling activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and exploring new places
            </li>
            <li className="about-activity">
              <ImPointRight /> Strategy games and problem-solving
            </li>
          </ul>
          <p style={{ color: "#2563eb", marginTop: "12px" }}>
            "Build things that matter — and make them work beautifully."
          </p>
          <footer className="blockquote-footer">Kelvin Huria</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;