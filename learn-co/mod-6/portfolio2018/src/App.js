import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import IntroContainer from './containers/IntroContainer';
import ProjectContainer from './containers/ProjectContainer';
import AboutContainer from './containers/AboutContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <IntroContainer />
        <ProjectContainer />
        <AboutContainer />
      </div>
    );
  }
}

export default App;
