import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Solar from "../../Assets/Projects/SolarForecast.png";
import News from "../../Assets/Projects/NewsSummarization.png";
import FPotus from "../../Assets/Projects/FPotusTweets.png";
import PdfRAG from "../../Assets/Projects/PdfRAG.png";
import Looker from "../../Assets/Projects/Looker1.png";



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
              imgPath={PdfRAG}
              isBlog={false}
              title="PDF Query using RAG"
              description="A PDF chatter implementing RAG pipeline, leveraging Langchain framework, Hugging Face embeddings, FAISS vector-store and LLMs(OpenAI)."
              ghLink="https://github.com/MishraCo/LocalPDFChat"
              demoLink="https://pdfragchat-shweta.streamlit.app/"
            />
          </Col>

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
              imgPath={Looker}
              isBlog={false}
              title="Goose-Creek Candle's Sales Analytics"
              description="Looker Studio Dashboard to analyze Customer Reviews and the best selling products of Goose Creek Candles."
              ghLink="https://github.com/MishraCo/GooseCandle_Review_Dashboard"
              demoLink="https://lookerstudio.google.com/reporting/6d17c6cd-a64e-4861-a444-d129113dc0bb/page/tEnnC"
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
              demoLink="https://github.com/MishraCo/FPOTUS-Tweets-Analysis/blob/main/FPOTUS_Tweets_Analysis.pdf"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
