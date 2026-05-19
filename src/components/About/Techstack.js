// components/About/Techstack.js
import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiGit } from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiPrisma,
  SiMysql,
  SiExpo,
  SiVercel,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <TbBrandReactNative />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiExpo />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPrisma />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

    </Row>
  );
}

export default Techstack;