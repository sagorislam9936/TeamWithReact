import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Learn.css";

const Learn = () => {
  return (
    <div>
      <Container className="  allCenter bg-danger py-3">
      <Container className="w-75 ">
       
        <div >
          <h2>What can you learn</h2>
          <Row className="margin">
            <Col md={6} className="">
              <div className="my-3 ">
                <Card className="gap-5  h-100 rounde  hvr">
                  <h5>
                    <img
                      src="/Screenshot 2023-07-14 234708.png"
                      alt=""
                      className="pic"
                    />
                  </h5>
                  <Card.Body>
                    <Card.Title>Buisness Development</Card.Title>
                    <Card.Text className="pb-5">
                      Lorem ipsum, dolor sit amet consectetur adipisicing
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col  sm={1} md={6}>
              <div className="my-3  ">
                <Card className="gap-5  h-100 rounde  hvr">
                  <h5>
                    <img
                      src="/Screenshot 2023-07-14 234708.png"
                      alt=""
                      className="pic"
                    />
                  </h5>
                  <Card.Body>
                    <Card.Title>Customer Relationship</Card.Title>
                    <Card.Text className="pb-5">
                      Lorem ipsum, dolor sit amet consectetur adipisicing
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col  sm={1} md={6}>
              <div className="my-3  ">
                <Card className="gap-5  h-100 rounde  hvr">
                  <h5>
                    <img
                      src="/Screenshot 2023-07-14 234708.png"
                      alt=""
                      className="pic"
                    />
                  </h5>
                  <Card.Body>
                    <Card.Title>Procces & Tools</Card.Title>
                    <Card.Text className="pb-5">
                      Lorem ipsum, dolor sit amet consectetur adipisicing
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col  sm={12} md={6}>
              <div className="my-3  ">
                <Card className="gap-5   rounde hvr">
                  <h5>
                    <img
                      src="/Screenshot 2023-07-14 234708.png"
                      alt=""
                      className="pic "
                    />
                  </h5>
                  <Card.Body>
                    <Card.Title>Communication</Card.Title>
                    <Card.Text className="pb-5">
                      Lorem ipsum, dolor sit amet consectetur adipisicing
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <button className=" btn my-2">View All Services</button>
        </div>
        </Container>
      </Container>
    </div>
  );
};

export default Learn;
