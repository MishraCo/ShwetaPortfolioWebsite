import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="pink"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with Data Science and I have learnt a lot since then!! 🤷‍♀️
              <br />
              <br />I am passionate about addressing Data related issues of
              <i>
                <b className="pink"> ANY SCALE. </b>
              </i>
              <br />
              <br />
              My field of interests are Data Vizulaization & Data Science,&nbsp;
              <i>
                <b className="pink">Machine Learning & Artificial intelligence </b> and
                I Code in{" "}
                <b className="pink">
                  Python and R.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for 
                <b className="pink"> Learning New Inovation in the field & Technologies </b> and
              <i>
                <b className="pink">
                  {" "}
                  Create New Data Science/ML Project
                </b>
              </i>
              &nbsp; To Achieve
              <i>
                <b className="pink"> Proper Use of Available Datasets. </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h4>FIND ME </h4>
            <p>
              Please feel free to <span className="pink">connect </span> here
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MishraCo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/freesoul_9d"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shwm/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_ca11iope"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
