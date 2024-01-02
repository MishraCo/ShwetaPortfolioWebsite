import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Solar from "../../Assets/Projects/SolarForecast.png";
import News from "../../Assets/Projects/NewsSummarization.png";
import FPotus from "../../Assets/Projects/FPotusTweets.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="pink">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Solar}
              isBlog={false}
              title="Forecasting Solar-Irradiance"
              description="Forecasting Solar-Irradiance Using Machine Learning / Deep Learning Models."
              ghLink="https://github.com/MishraCo/Forecasting-of-Solar-Irradiance"
              demoLink="https://github.com/MishraCo/Forecasting-of-Solar-Irradiance"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={News}
              isBlog={false}
              title="Text Summarizer"
              description="Revolutionized News Text Summarization using extractive and abstractive methods."
              ghLink="https://github.com/MishraCo/TextSummarizer_NLP"
              demoLink="https://github.com/MishraCo/TextSummarizer_NLP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FPotus}
              isBlog={false}
              title="FPOTUS-Tweets-Analysis"
              description="Studied FPOTUS tweets for period 2015 - 2020 using glmnet package to fit sparse regression models to predict number of retweets a tweet gets."
              ghLink="https://github.com/MishraCo/FPOTUS-Tweets-Analysis"
              demoLink="https://github.com/MishraCo/FPOTUS-Tweets-Analysis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
