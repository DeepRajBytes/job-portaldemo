import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
    <Container className="p-4">
      <Row>
        <Col lg="6" md="12" className="mb-4 mb-md-0">
          <h5 className="text-uppercase">Job Portal</h5>
          <p>
            Find your dream job with our extensive job listings and advanced search features. Connect with top employers and kickstart your career today!
          </p>
        </Col>
        <Col lg="3" md="6" className="mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#about" className="text-dark">About Us</a>
            </li>
            <li>
              <a href="#services" className="text-dark">Services</a>
            </li>
            <li>
              <a href="#contact" className="text-dark">Contact</a>
            </li>
          </ul>
        </Col>
        <Col lg="3" md="6" className="mb-4 mb-md-0">
          <h5 className="text-uppercase">Follow Us</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#facebook" className="text-dark">Facebook</a>
            </li>
            <li>
              <a href="#twitter" className="text-dark">Twitter</a>
            </li>
            <li>
              <a href="#linkedin" className="text-dark">LinkedIn</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        Copyright © 2024 Icedata S.r.l. - Tutti i diritti riservati - P.IVA 00665041208 - 
        <a style={{ color: "#006337" }} href="https://www.iubenda.com/privacy-policy/51986058" target="_blank" rel="noopener noreferrer">
          Privacy
        </a>
        &nbsp;&amp;&nbsp;
        <a style={{ color: "#006337" }} href="https://www.iubenda.com/privacy-policy/51986058/cookie-policy" target="_blank" rel="noopener noreferrer">
          Cookie
        </a>
      </div>
  </footer>
  );
}

export default Footer