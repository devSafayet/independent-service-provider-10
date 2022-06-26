import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import './About.css';
import drkaneez from '../../images/dr kaneez.jpg';

const About = () => {
    return (
        <div className="about-area">
            <Container>
                <Row className="d-flex align-items-center px-3">
                    <Col xs={12} md={6} lg={7}>
                        <div className="about-intro">

                            <h3>
                                This is Dr. Kaneez Fatema.
                            </h3>
                            <h6>
                                Hello, This is Dr. Kaneez Fatema. I am a medicine specialist.
                            </h6>
                            <p>
                                I am excited to provide care for children of all ages in the beautiful city of Chattogram, Bangladesh, and I look forward to delivering the best care for your family!
                            </p>

                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={5}>
                        <div className="about-img">
                            <img src={drkaneez} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;