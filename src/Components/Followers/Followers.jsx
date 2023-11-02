import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Followers.css";
const Followers = () => {
  return (
    <div>
      <Container className="bg-danger">
        <Container className="w-75">
          <Row>
            <Col className="text-light  py-4 text-center " md={4} sm={12}>
              <div>
                <h1 className="text-bold ps-3 py-3">11K</h1>
                <h5 className="pb-5">Happy Clints</h5>
              </div>
            </Col>
            <Col className="py-4 text-light text-center" md={4} sm={12}>
              <div>
                <h1 className="text-bold ps-3 py-3">300+</h1>
                <h5 className="pb-5">Team Members</h5>
              </div>
            </Col>
            <Col className="py-4 text-light  text-center" md={4} sm={12}>
              <div>
                <h1 className=" ps-3 py-3 text-bold">60+</h1>
                <h5 className="pb-5">Countries</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Followers;
