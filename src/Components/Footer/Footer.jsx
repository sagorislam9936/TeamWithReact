import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css"
const Footer = () => {
  return (
    <div className="py-2 pb-5">
      <Container className="roundd ">
        <Container className="w-50 py-5 ">
          <Row className="text-center">
            <Col>
              <h3>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                amet odit at quasi molestiae reprehenderit sequi voluptates
                laboriosam temporibus rerum.
              </h3>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Footer;
