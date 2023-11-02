import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div>
        <div>
          <Container >
            <Row className="text-center">
              <Col>
                <h2 className="py-2 res">
                  We Turn Your <br /> Ideas, Or Story <br /> Into A Bestselling{" "}
                  <br /> Business Book
                </h2>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cumque quia quos commodi modi est impedit recusandae, quasi
                  odio voluptate facilis dolores accusamus voluptas in natus
                  consequuntur error veritatis? Illo, culpa.{" "}
                </p>
              </Col>

              <Col className="sm-none">
                <img className="w-50" src="/1.png" alt="First Image" />
              </Col>
            </Row>
          </Container>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
