import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export default class AboutMe extends Component {
    render() {
        return (
            <section className="about-me-section">
                <h1>About Me</h1>
                <Row className="about-me-row">
                    <Col md={4} className="about-col">
                        <img src="./Assets/profileImg.jpg"  className="profile-image" alt="profile" height="100%" width="90%"/>
                    </Col>
                    <Col md={4} className="about-col">
                        about me paragraph
                    </Col>
                    <Col md={4} className="about-col">
                        My interests
                    </Col>
                </Row>
            </section>
        )
    }
}