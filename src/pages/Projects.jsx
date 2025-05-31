import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
// import news from "../assets/projects/news.png";
import driwake from "../assets/projects/driwake.png";
import sprinthacks from "../assets/projects/image.png";
import chat from "../assets/projects/chat.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={driwake}
              isBlog={false}
              title="Driwake"
              description="IOT Based Driver Drowsiness Alert System"
              ghLink="https://github.com/aryanrajpoot27/Driwake-Team-Bit-Busters-45.git"
            />
          </Col>
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={sprinthacks} 
    isBlog={false}
    title="Sprinthacks 2.0 Website"
    description="Official Website for the Sprinthacks 2.0 Hackathon, featuring event details, registration, and team management."
    ghLink="https://github.com/aryanrajpoot27/sprinthacks_web_2.0.git" 
  />
</Col>
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={chat} 
    isBlog={false}
    title="CampusConnect - Real-Time Chat Application"
    description="Developed a full-stack real-time chat application using ReactJS, NodeJS, and Socket.IO. The app supports multi-user chat rooms, instant messaging, and persistent WebSocket connections with efficient message broadcasting and user authentication."
    ghLink="https://github.com/aryanrajpoot27/CampusConnect.git" 
  />
</Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects