// components/Home/Home2.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Kelvin — a full-stack software engineer based in{" "}
              <i>
                <b className="purple">Nairobi, Kenya</b>
              </i>
              , passionate about building products that solve real problems.
              <br />
              <br />
              My core stack is{" "}
              <i>
                <b className="purple">
                  Next.js, TypeScript, React, and React Native (Expo)
                </b>
              </i>{" "}
              — from responsive web apps to cross-platform mobile solutions.
              <br />
              <br />
              On the backend I work with{" "}
              <i>
                <b className="purple">Node.js, Prisma ORM, and MySQL</b>
              </i>
              , deploying production systems on{" "}
              <b className="purple">Vercel</b>. I've integrated payment gateways
              including{" "}
              <i>
                <b className="purple">M-Pesa and PayPal</b>
              </i>{" "}
              into client platforms across Kenya and the US.
              <br />
              <br />
              I also run{" "}
              <i>
                <b className="purple">Ubiru Systems</b>
              </i>
              , where I take on freelance work — building everything from hotel
              booking systems and NGO platforms to industrial B2B websites.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              Feel free to{" "}
              <span className="purple">connect </span>
              with me
            </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KabiruH"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/kabiruhuria"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kelvin-huria-79ab626a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/kabiruhuria?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;