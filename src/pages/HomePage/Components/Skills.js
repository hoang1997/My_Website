import React, { Component } from 'react';
import { Col, Row, Card, ListGroup, Container} from 'react-bootstrap';

export default class Skills extends Component {
    render() {
        return (
            <section className="skills-section">
                <h1>Technical Skills</h1>
                <Row className="about-me-row">
                    <p style={{ textAlign: "center", margin: "50px" }}>
                        Throughout my time in and out of University i have developed several different skills. 
                        This includes a variety of programming languages, problem solving and eagerness to learn new technology. 
                        Currently working on my web technology skills by utilising javascript and its different libraries and frameworks.
                        In addition, during cyber security module and networking module, i have an understanding of cyber security using linux systems by using tools such as wireshark. 
                    </p>
                    
                </Row>
                <Row className="about-me-row">
                    <p className="code-item">C++</p>
                    <p className="code-item">C#</p>
                    <p className="code-item">Javascript</p>
                    <p className="code-item">HTML</p>
                    <p className="code-item">CSS</p>
                </Row>
                <Row className="about-me-row">
                  
                    <Card className="tech-card" style={{ width: "30rem" }}>
                        <strong style={{ textAlign: "center" }}>Frameworks</strong>
                            <ListGroup variant="flush">
                                <ListGroup.Item>React.js</ListGroup.Item>
                                <ListGroup.Item>Gatsby.js</ListGroup.Item>
                                <ListGroup.Item>jQuery Mobile</ListGroup.Item>
                                <ListGroup.Item>Qt Framework</ListGroup.Item>
                                <ListGroup.Item>OpenCL</ListGroup.Item>
                            </ListGroup>
                        </Card>
                  
                    <Card className="tech-card" style={{ width: "30rem" }}>
                        <strong style={{textAlign: "center"}}>Software</strong>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Visual Studio</ListGroup.Item>
                                <ListGroup.Item>Visual Studio Code</ListGroup.Item>
                                <ListGroup.Item>Qt Creator</ListGroup.Item>
                                <ListGroup.Item>Matlab</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    
                </Row>
            </section>
        )
    }
}