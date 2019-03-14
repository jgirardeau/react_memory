import React, { Component } from "react";

class Header extends Component {


  render() {
    return (
      <nav className="navbar">
        <div className="row">
          <div className="col-2">CLICKY GAME</div>
          <div className="col-5">Click an Image to begin!</div>
          <div className="col-2">Score: {this.props.score} </div>
          <div className="col-3" >Top Score: {this.props.topScore}</div>
        </div>
      </nav>)
  }
}


export default Header;
