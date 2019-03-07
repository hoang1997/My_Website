import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './HomePage.css'

export default class HomePage extends Component {
    render() {
        return (
            <section >
                <div class="panel-container">
                    <Image className="homeCoverImg" alt="hello" src="../Assets/homePageCover.jpg" fluid />
                    <h3 class="title">Joseph Hoang - Software Engineer</h3>
                </div>
                
              
            </section>
        )
    }
}