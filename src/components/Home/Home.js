import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import homeLogo from "../../Assets/avatar_man.svg";
import Particle from "../Particle";
import Type from "./Type";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/HI-resume_compressed-8.pdf";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import AboutCard from "../About/AboutCard";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import ProjectCard from "../Projects/ProjectCards";
import chatify from "../../Assets/Projects/chatify.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ReactRoundedImage from "react-rounded-image";
import myImg from "../../Assets/IMG_0832-2.jpg";
import Tilt from "react-parallax-tilt";
import restaurant from "../../Assets/Projects/restaurant.png";
import ChatBot from "../ChatBot/ChatBot";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Home() {
  const [showResume, setShowResume] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleHireMe = () => {
    window.location.href = "mailto:hamdooilyass@gmail.com?subject=Job Opportunity&body=Hi Ilyess,";
  };

  const ResumeModal = () => (
    <Modal
      show={showResume}
      onHide={() => setShowResume(false)}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>My Resume</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        <Document
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
          className="d-flex justify-content-center"
        >
          <Page 
            pageNumber={pageNumber} 
            scale={width > 786 ? 1.7 : 0.6}
            renderTextLayer={false}
          />
        </Document>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowResume(false)}>
          Close
        </Button>
        <Button 
          variant="primary" 
          href={pdf} 
          target="_blank"
          rel="noopener noreferrer"
        >
          Download PDF
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <section>
      {/* Hero Section */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ILYESS HAMDAOUI</strong>
              </h1>

              <div  style={{ padding: 50, textAlign: "left" }}>
                 <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="avatar-container">
                <div className="avatar-gradient"></div>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid avatar-image"
                  style={{ maxHeight: "450px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Buttons Section */}
      <Container fluid className="button-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col xs={12} md="auto" className="text-center">
              <Button
                as={Link}
                to="/resume"
                variant="primary"
                className="primary-btn"
                style={{ marginRight: "10px" }}
              >
                <i className="fas fa-file-pdf"></i> Resume
              </Button>
            </Col>
            <Col xs={12} md="auto" className="text-center">
              <Button
                variant="primary"
                onClick={handleHireMe}
                className="primary-btn"
              >
                <FaPaperPlane /> Hire Me
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>

      <ResumeModal />

      {/* Home2 Section - Introduction */}
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple">INTRODUCE</span> MYSELF
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
                <ReactRoundedImage
                  image={myImg}
                  roundedColor="rgba(7, 3, 68, 0.95)"
                  imageWidth="300"
                  imageHeight="300"
                  roundedSize="15"
                  borderRadius="300"
                  hoverColor="#0f03b9"
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Work Experience Section */}
      <Container fluid className="experience-section">
        <Container>
          <h1 className="section-heading">
            <span className="white-text">My</span> <strong className="purple">Work Experience</strong>
          </h1>
          
          <div className="timeline">
            {/* Experience Item 1 */}
            <div className="timeline-item">
              <div className="timeline-info">
                <span className="white-text">PFA Internship - Nodma TVA</span>
                <span className="timeline-date">March - September 2024 (6 months)</span>
              </div>
              <div className="timeline-marker purple"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">NODMA Horizon, Casablanca</h3>
                <p>
                Implementation of a software solution for VAT calculation and company management.
                  <br />
                  Technologies: .NET, Angular, PostgreSQL, Figma, Docker, Azure DevOps, and Scrum.
                </p>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="timeline-item">
              <div className="timeline-info">
                <span className="white-text">PFE Internship - Center Analysis Platform</span>
                <span className="timeline-date">April - June 2023 (3 months)</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Faculty of Science Semlalia, Marrakech</h3>
                <p>
                A platform for digitizing all tasks of the Center for Characterization Analysis (CAC), developed as a team of three.
                  <br />
                  Technologies: Laravel, HTML, CSS, JavaScript, Bootstrap, and MySQL.
                </p>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="timeline-item">
              <div className="timeline-info">
                <span className="white-text">PFA Internship - Fight Detection via Surveillance Cameras</span>
                <span className="timeline-date">July - August 2022 (2 months)</span>
              </div>
              <div className="timeline-marker purple"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Faculty of Science and Technology, Marrakech</h3>
                <p>
                A model based on VGG16 for detecting fights from surveillance cameras.
                  <br />
                  Technologies: Jupyter, VGG16.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Container>


      {/* Projects Section */}
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="CarLease - Plateforme de Location de Voitures"
                description="I am developing a car rental platform based on Spring Boot and Angular with a microservices architecture. I have integrated CI/CD pipelines to automate deployment and ensure continuous delivery."
                ghLink="https://github.com/yourusername/carlease"
                demoLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={editor}
                isBlog={false}
                title="Système de géolocalisation des véhicules"
                description="Development of a mobile application for real-time vehicle location tracking, with a dashboard accessible through a website. Technologies: Spring Boot, React.js, Docker, Android Studio, WebSocket, and Leaflet."
                ghLink="https://github.com/yourusername/geolocation"
                demoLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bitsOfCode}
                isBlog={false}
                title="Easy Parking"
                description="A web application for parking management, enabling real-time reservation and tracking of parking spots. It handles authentication and authorization using JWT. Technologies: Spring Boot, React.js, Android Studio, React Native, and Figma."
                ghLink="https://github.com/ilyassoh/Front-end-Parking-V2"
                demoLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={restaurant}
                isBlog={false}
                title="Restaurant Management System"
                description="A comprehensive desktop application built in C# for efficient restaurant operations management. Features include menu management, order processing, reservation handling, and inventory tracking through an intuitive user interface. The system streamlines daily restaurant operations and enhances customer service."
                ghLink="https://github.com/yourusername/Restaurant-Management"
                demoLink=""
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Social Links Section */}
      <Container fluid className="home-about-section">
        <Container>
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
                    className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/ilyess-hamdaoui-a637081a6/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
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
      <ChatBot />
    </section>
  );
}

export default Home;
