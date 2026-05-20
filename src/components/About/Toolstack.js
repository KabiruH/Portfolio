// components/About/Toolstack.js
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiMysql,
} from "react-icons/si";

function ToolItem({ icon, name }) {
  return (
    <Col xs={4} md={2} className="tech-icons">
      <div className="tech-icon-wrapper">
        {icon}
        <span className="tech-icon-label">{name}</span>
      </div>
    </Col>
  );
}

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <ToolItem icon={<SiVisualstudiocode />} name="VS Code" />
      <ToolItem icon={<SiGithub />}           name="GitHub" />
      <ToolItem icon={<SiPostman />}          name="Postman" />
      <ToolItem icon={<SiVercel />}           name="Vercel" />
      <ToolItem icon={<SiMysql />}            name="MySQL" />
    </Row>
  );
}

export default Toolstack;