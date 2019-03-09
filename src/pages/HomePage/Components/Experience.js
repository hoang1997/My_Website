import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export default class Experience extends Component {
    render() {
        return (
            <section className="experience-section">
                <h1>Experience</h1>
                <Row>
                    <Col>
                        <strong><h3>Part Time Software Engineer</h3></strong>
                        <Row>
                            <p className="code-item" style={{ fontWeight: "100" }}>
                                React.js - Gatsby.js - JavaScript - TypeScript - GraphQl
                            </p>
                            <br/><br/>
                        </Row>
                        <p style={{textAlign: "center", margin: "20px 20px"}}>
                            Using latest JavaScript technologies to help develop their existing products,
                            this includes React.js, Gatsby.js and Graphql.
                            Main languages used were JavaScript and Typescript, one of the first tasks that i had to
                            was to make their blog system by using Gatsby.js to generate static sites by using templates,
                            and integrating contentful (a CMS service to hold data) to grab the blogs and its subsequent information.
                        </p>
                        <p style={{ textAlign: "center", margin: "20px 20px", color: "#87cefa" }}>
                            Duration: January 2019 - Present <br/> Company: TapKit Limited <hr/>
                        </p>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Cyber Security Intern</h3>
                        <Row>
                            <p className="code-item" style={{fontWeight: "100"}}>Qt - C++</p>
                            <br/>
                        </Row>
                        <p style={{ textAlign: "center", margin: "20px 20px" }}>
                            During the summer of 2018, i joined InzpireTasked with creating a prototype for an attack simulation in physical security
                            Worked with the cyber security and IT expert at the company to break down and define what the
                            foundations would be for the program
                            At the end of the internship I created a attack simulation program using the Qt framework.
                        </p>
                        <p style={{ textAlign: "center", margin: "20px 20px", color: "#87cefa" }}>
                            Duration: June - August 2018 <br /> Company: Inzpire Ltd <hr/>
                        </p>
                    </Col>
                </Row>
            </section>
        )
    }
}