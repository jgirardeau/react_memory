import React, { Component } from "react";
const styles = {
  navbarStyle: {
    background: "green",
    height: "100px",
    fontSize: "25px",
    fontWeight: "bold",
    color:"White",
    margin:"20px"
  }
};

class Header extends Component {
 

  render() {
    return (
      <nav  style={styles.navbarStyle} className="navbar">
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
