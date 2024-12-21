import React from "react";
import ReactRoundedImage from "react-rounded-image"
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/IMG_0832-2.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <b className="purple">I'm </b>a future engineer in Computer Methods Applied to Business Management (<b className="purple">MIAGE</b>) at the École Marocaine des Sciences de l'Ingénieur (<b className="purple">EMSI</b>) with a strong background in <b className="purple">programming</b>, <b className="purple">software development</b>, and <b className="purple">project management</b>.
              <br />
              <br />My expertise spans both front-end and back-end development, and I've worked on projects like a <b className="purple">vehicle geolocation system</b>, <b className="purple">parking management</b>, and <b className="purple">VAT calculation solutions</b>.
              <br />
              <br />
              I'm also skilled in tools like &nbsp;
              <i>
                <b className="purple">Git </b>,{" "}
                <b className="purple">Docker </b>,{" "}
                <b className="purple">Azure DevOps </b>, and {" "}
                <b className="purple">Scrum</b>.
              </i>
              <br />
              <br />
              Beyond my technical abilities, I actively participate in student organizations, taking on leadership roles and gaining team management experience.
              <br />
              <br />
              I am currently seeking an end-of-studies internship (PFE) to apply my skills in a real-world setting.
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* <img src={myImg} className="img-fluid" alt="avatar" /> */}
              <ReactRoundedImage
                image={myImg}
                roundedColor="#321124"
                imageWidth="300"
                imageHeight="300"
                roundedSize="15"
                borderRadius="300"
                hoverColor="purple"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ilyassoh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ilyess-hamdaoui-a637081a6/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ilyass639/profilecard/?igsh=MXVnN2ludXB4MGMyMQ%3D%3D"
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
