import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return(
      <div className="header-wrap full">
        <a href="#work">WORK</a>
        <a href="#about">ABOUT</a>
        <a href="#blog">BLOG</a>
      </div>
    )
  }
}

export default NavBar;
