import React, { Component } from 'react';
import Navigation from '../Components/Navigation';
import './App.css';
import HomePage from '../pages/HomePage/HomePage';

class App extends Component {
  render() {
    return (
        <div>
          <Navigation />
          <HomePage />
        </div>
        
        
    )
  }
}

export default App;
