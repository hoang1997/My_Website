import React, { Component } from 'react';
import { Row, Card, ListGroup,} from 'react-bootstrap';

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
                        <strong style={{ textAlign: "center", margin: "10px auto" }}>Framework Experience</strong>
                            <ListGroup variant="flush">
                                <ListGroup.Item><li>React.js</li></ListGroup.Item>
                                <ListGroup.Item><li>Gatsby.js</li></ListGroup.Item>
                                <ListGroup.Item><li>jQuery Mobile</li></ListGroup.Item>
                                <ListGroup.Item><li>Qt Framework</li></ListGroup.Item>
                                <ListGroup.Item><li>OpenCL</li></ListGroup.Item>
                            </ListGroup>
                        </Card>
                  
                    <Card className="tech-card" style={{ width: "30rem" }}>
                        <strong style={{ textAlign: "center", margin: "10px auto" }}>Software Tools Experince</strong>
                            <ListGroup variant="flush">
                                <ListGroup.Item><li>Visual Studio</li></ListGroup.Item>
                                <ListGroup.Item><li>Visual Studio Code</li></ListGroup.Item>
                                <ListGroup.Item><li>Qt Creator</li></ListGroup.Item>
                                <ListGroup.Item><li>Matlab</li></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    
                </Row>
            </section>
        )
    }
}