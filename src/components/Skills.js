import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reactlogo from "../assets/react-logo.png";
import jslogo from "../assets/js-logo1.svg";
import htmllogo from "../assets/html-logo.jpeg";
import sasslogo from "../assets/sass-logo.png";
import gitlogo from "../assets/git-logo.png";
import githublogo from "../assets/github-logo.png";
import csslogo from "../assets/css-logo.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p></p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={reactlogo} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={jslogo} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={csslogo} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={htmllogo} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={sasslogo} alt="Image" />
                  <h5>SASS</h5>
                </div>
                <div className="item">
                  <img src={gitlogo} alt="Image" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={githublogo} alt="Image" />
                  <h5>GitHub</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
