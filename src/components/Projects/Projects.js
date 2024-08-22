import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/events.png";
import bitsOfCode from "../../Assets/Projects/movies.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Events"
              description="Mimik Events is a mock web application that assists individuals in eﬀortlessly discovering events. It aims at gathering information on forthcoming events and present them in a user-friendly manner."
              ghLink="https://github.com/KabiruH/Events-manager"
              demoLink="https://events-manager-rose.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Movies Project"
              description="This is a movie webApp that shows a list of movies to logged in users."
              ghLink="https://github.com/KabiruH/Movies_project"
              demoLink="https://movies-project-omega.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Article App"
              description="Moringa School Daily.dev is a mini web application for the Moringa Community that enables users to get authentic and verified articles/blogs about the tech space created by the Moringa school community."
              ghLink="https://github.com/KabiruH/Article-App"
              demoLink="https://article-app-plum.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Project Management App"
              description="This app is meant to help create Award centers, track participants, projects tied to the said participants, and track finances among much more."
              ghLink="https://github.com/KabiruH/Project-Management-Frontend"
              demoLink="https://project-management-frontend-nine.vercel.app/"              
            />
          </Col>

          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
