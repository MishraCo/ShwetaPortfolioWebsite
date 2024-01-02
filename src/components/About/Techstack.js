import React from "react";
import { Col, Row } from "react-bootstrap";
import { ReactComponent as PyTorchLogo} from 'E:/Documents/GitHub_Repositories/ShwetaMishraPortfolio/src/Assets/pytorch-icon.svg';
import { ReactComponent as TensorFlowLogo} from 'E:/Documents/GitHub_Repositories/ShwetaMishraPortfolio/src/Assets/tensorflow-icon.svg';
import { ReactComponent as DatabricksLogo} from 'E:/Documents/GitHub_Repositories/ShwetaMishraPortfolio/src/Assets/databricks-svgrepo.svg';
import { ReactComponent as SparkLogo} from 'E:/Documents/GitHub_Repositories/ShwetaMishraPortfolio/src/Assets/apache_spark-icon.svg';
import { ReactComponent as RLogo} from 'E:/Documents/GitHub_Repositories/ShwetaMishraPortfolio/src/Assets/R.svg';
//import PyTorchLogo from 'src\Assets\pytorch-icon.svg';
import {
  DiPython,
  //DiRProgramming,
  //DiTensorflow,
  //DiPytorch,
  DiMysql,
  //DiPySparkSQL,
  DiMongodb,
  //DiDatabricks,
  DiAws,
  DiGoogleCloudPlatform,
  DiDocker,
  DiJava,
  DiReact,
  DiNodejs,
} from "react-icons/di";

function Techstack() {
  const descriptionStyle = { fontSize: '12px', textAlign: 'center' }; // Adjust font size as needed

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={descriptionStyle}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p style={descriptionStyle}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RLogo />
        <p style={descriptionStyle}>R</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TensorFlowLogo />
        <p style={descriptionStyle}>TensorFlow</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <PyTorchLogo />
        <p style={descriptionStyle}>PyTorch</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SparkLogo />
        <p style={descriptionStyle}>Spark SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DatabricksLogo />
        <p style={descriptionStyle}>Databricks</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
        <p style={descriptionStyle}>AWS</p>
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <DiGoogleCloudPlatform />
        <p style={descriptionStyle}>GCP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <p style={descriptionStyle}>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={descriptionStyle}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={descriptionStyle}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={descriptionStyle}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={descriptionStyle}>Node.js</p>
      </Col>
    </Row>
  );
}

export default Techstack;
