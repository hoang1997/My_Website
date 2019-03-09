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
                        <h3>Overview</h3>
                        <p className="about-me-info">
                            Hello, my name is Joe Hoang, i am currently a final year undergraduate at the University of Lincoln.
                            <br/><br/>While developing several valuable skills within university, which includes learning different OOP languages, project management styles such as Agile and waterfall and problem solving skills. 
                            <br/><br/>
                            I have also developed skills outside university from internships and personal work which includes learning the latest web technologies such as React.js and Angular frameworks.

                            
                        </p>
                    </Col>
                    <Col md={4} className="about-col">
                        <h3>Interests</h3>
                        <p className="about-me-info">
                            When i'm not studying or doing working, i like to do social activities such as:
                        </p>
                        <ul>
                            <li>Dodgeball</li>
                            <li>Bouldering</li>
                            <li>Going to the gym</li>
                            <li>Social Football</li>
                        </ul>
                    </Col>
                </Row>
               
                <section className="cover">
                    
                </section>
               
            </section>
        )
    }
}