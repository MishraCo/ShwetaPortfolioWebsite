import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPycharm,
  SiMicrosoftexcel,
  SiPowerbi,
  SiTableau,
  SiOpenai,
  SiVisualstudiocode,
  SiSlack,
  SiRstudio,
  SiAzuredataexplorer,
  SiWindows,
  SiJira,
  SiBitbucket,
  SiGithub,
  SiGit,
  SiGitlab,
  SiJenkins
} from "react-icons/si";

function Toolstack() {
  const descriptionStyle = { fontSize: '12px', textAlign: 'center' }; // Adjust font size as needed

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Each icon with its description, apply the style to the description */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <p style={descriptionStyle}>Power BI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
        <p style={descriptionStyle}>Tableau</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <p style={descriptionStyle}>Pycharm</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRstudio />
        <p style={descriptionStyle}>R Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredataexplorer />
        <p style={descriptionStyle}>Azure Data Explorer</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
        <p style={descriptionStyle}>Advanced MS Excel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
        <p style={descriptionStyle}>GPT 3 - OpenAI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={descriptionStyle}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <p style={descriptionStyle}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={descriptionStyle}>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p style={descriptionStyle}>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <p style={descriptionStyle}>Jira</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <p style={descriptionStyle}>Jenkins</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
