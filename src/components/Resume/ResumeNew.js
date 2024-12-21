import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/HI-resume_compressed-7-1.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { FaPaperPlane } from "react-icons/fa";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const handleHireMe = () => {
    window.location.href = "mailto:hamdooilyass@gmail.com?subject=Job Opportunity&body=Hi Ilyess,";
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col xs={12} md="auto" className="text-center">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px", marginRight: "10px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
            <Button
              variant="primary"
              onClick={handleHireMe}
              style={{ maxWidth: "250px" }}
            >
              <FaPaperPlane />
              &nbsp;Hire Me
            </Button>
          </Col>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            onLoadSuccess={onDocumentLoadSuccess}
            loading="Loading PDF..."
            error="Failed to load PDF file."
            noData="No PDF file specified."
            onLoadError={(error) => {
              console.log('PDF load error:', error);
            }}
          >
            <Page
              pageNumber={pageNumber}
              scale={width > 786 ? 1.7 : 0.6}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading="Loading page..."
            />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
