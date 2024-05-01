import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
// import news from "../assets/projects/news.png";
import driwake from "../assets/projects/driwake.png";
// import weather from "../assets/projects/weather.png";

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
              description="Driver Drowsiness Alert System: Using an IR sensor, relay module, GSM SIM900-A, Arduino Uno, gear motor, step-down converter, and glasses with IR sensor, this project detects driver eye closure. When the driver's eyelids close, a 2-second timer starts, and an alarm alerts the driver. The wheel's speed is reduced via the relay module, and after 3 beeps, the vehicle stops using the brakes. Alerts are sent to the driver's contacts , enhancing road safety."
              ghLink="https://github.com/aryanrajpoot27/Driwake-Team-Bit-Busters-45.git"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News Website"
              description="A modern news website using news API"
              ghLink="https://github.com/aryanrajpoot27/Weather-Website.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Applica"
              description="A modern weather website which uses weather API and image API for changing the background image of the website."
              ghLink="https://github.com/aryanrajpoot27/Weather-Website.git"

            />
          </Col> */}
 

        </Row>
      </Container>
    </Container>
  )
}

export default Projects