import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kelvin Huria </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br /> A dedicated programmer with a strong background in JavaScript, React, Node, and Ruby who strives to create innovative solutions that meet user needs.
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Outdoor Thrilling Activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that matter!"{" "}
          </p>
          <footer className="blockquote-footer">Huria</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
