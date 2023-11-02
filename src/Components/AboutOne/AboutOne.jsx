import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AboutOne.css"
const AboutOne = () => {
  return (
    <div className="py-5">
      <Container className="w-75">
        <Row>
          <Col md={6} sm={12}>
            < img src="/2.png" alt="" className="sm-none"/>
          </Col>
          <Col md={6} sm={12}>
            <div className="txt"> 
              <h2>
                Your Have Needs <br /> These Habits To Grow <br /> The Business
                Faster
              </h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Quibusdam fugiat praesentium, in nisi error illum hic <br />{" "}
                deserunt facere commodi sed sapiente officia quia{" "}
              </p>
<ul>
<li> Turn Your Ideas And story into a book</li>
<li> Become a #1 bestseller or we pay $100k</li>
<li> Boost your credibility and authority</li>
<li> Attract more clients and grow your business</li>


</ul>
<p className="py-1 ps-2">

<button className="btn ">Read More</button>
</p>



            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutOne;
