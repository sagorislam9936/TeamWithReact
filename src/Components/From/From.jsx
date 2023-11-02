import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./From.css";
const From = () => {
  return (
    <div>
      <Container className="bg2 ">
        <Row>
          <Col className="text-center py-5">
            <h2 className="text-bold2 text-light">Lets Something Great!</h2>

            <div className="py-2">
              <input className="roundeed" type="" />
              <button className="roundeed btnBg">Submit</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default From;
