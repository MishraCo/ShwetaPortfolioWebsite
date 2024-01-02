import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="pink">Shweta Mishra </span>
            from <span className="pink"> Boston, MA. </span>
            <br /> I recently graduated with a Master of Science in Data Science from Northeastern University.
            <br />
            Additionally, I have around 5 Years of Work experience. 
            <br />
            <br />
            Apart from playing with Data, other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Various Delicious Cusines & experiences
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Non - Fiction Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(255, 20, 147)" }}>
            "Strive to Use Data in the right manner that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shweta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
