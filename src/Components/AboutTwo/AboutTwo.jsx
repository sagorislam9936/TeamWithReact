import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const AboutTwo = () => {
  return (
    <div className="py-5">
      <Container className="w-75">
        <Row>
          <Col md={6} >
            <div className="py-5">
              <h2>
                Your Have Needs <br /> These Habits To Grow <br /> The Business
                Faster
              </h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Quibusdam fugiat praesentium, in nisi error illum hic <br />{" "}
                deserunt facere commodi sed sapiente officia quia{" "}
              </p>

              <p className="py-3 ps-2">
                <button className="btn ">Read More</button>
              </p>
            </div>
          </Col>
          <Col >
            <img src="/3.png" alt="" className="sm-none" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutTwo;
