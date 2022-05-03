import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import './About.css';

const About = () => {
    return (
        <div className="about-area">
            <Container>
                <Row className="d-flex align-items-center px-3">
                    <Col xs={12} md={6} lg={7}>
                        <div className="about-intro">
                            <h5>Assalamu Alaikum..!</h5>
                            <h3>
                                I'm Md. SafayeTul Islam Sayem.
                            </h3>
                            <h6>
                                I'm Junior Web Developing.
                            </h6>
                            <p>
                                I’m currently learning Web Developer. I am working front end design and development with HTML, CSS,
                                JavaScript, React, Firebase. I can make dynamic and responsive website for
                                mobile.
                                <br />
                                <br />
                                My Goal Full Stack Web developer. I Will Try In sha allah.
                            </p>
                            <div className="social-link">
                                <a href="https://www.facebook.com/safayet003.admin/" target="_blank">
                                    <i class="fab fa-facebook-square"></i>

                                </a>
                                <a
                                    href="https://www.linkedin.com/in/https://www.linkedin.com/in/safayet003-admin/"
                                    target="_blank"
                                >
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a
                                    href="https://github.com/safayet003-admin"
                                    target="_blank"
                                >
                                    <i class="fab fa-github-square"></i>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={5}>
                        <div className="about-img">
                            <img src='https://i.ibb.co/SdkychQ/1651241195273.jpg' alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;