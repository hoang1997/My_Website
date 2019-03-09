import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './HomePage.css';

import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="panel-container">
                        <Image className="homeCoverImg" alt="hello" src="../Assets/homePageCover.jpg" fluid styles={{backgroundPosition: "fixed"}}/>
                        <div className="title">Joseph Hoang - Software Engineer</div>
                    </div>
                </section>
                <AboutMe />
                <Skills/>
            </div>
        )
    }
}