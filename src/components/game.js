import React, { Component } from "react";
import Data from "../data.json";


// const styles = {
//   sectionStyles: {
//     background: "white"
//   }
// };

class Game extends Component {

  state = {
    data: Data,
    score: 0,
    topScore: 0,
  }
  componentDidMount() {
    this.setState({ data:Data });
    console.log(Data)
  }

  render() {  
    return (
      // <div>section</div>
      <div>
        {
          this.state.data.map((item, index) =>
            <img src={item.image} key={index} className="cats" alt="cat" height="120" width="120"/>)
        }
      </div>
    )
  }
}

export default Game;
