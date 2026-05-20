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
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

function TechItem({ icon, name }) {
  return (
    <Col xs={4} md={2} className="tech-icons">
      <div className="tech-icon-wrapper">
        {icon}
        <span className="tech-icon-label">{name}</span>
      </div>
    </Col>
  );
}

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <TechItem icon={<DiJavascript1 />}     name="JavaScript" />
      <TechItem icon={<SiTypescript />}       name="TypeScript" />
      <TechItem icon={<DiReact />}            name="React" />
      <TechItem icon={<SiNextdotjs />}        name="Next.js" />
      <TechItem icon={<TbBrandReactNative />} name="React Native" />
      <TechItem icon={<SiExpo />}             name="Expo" />
      <TechItem icon={<DiNodejs />}           name="Node.js" />
      <TechItem icon={<SiPrisma />}           name="Prisma" />
      <TechItem icon={<SiMysql />}            name="MySQL" />
      <TechItem icon={<SiPostgresql />}       name="PostgreSQL" />
      <TechItem icon={<SiTailwindcss />}      name="Tailwind CSS" />
      <TechItem icon={<DiGit />}              name="Git" />
    </Row>
  );
}

export default Techstack;