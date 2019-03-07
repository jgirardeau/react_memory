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
  handleClick(index){
    // console.log("CLICK",event)
    console.log(index);
    // UPDATE COUNTER
    let newData=this.state.data;
    if(newData[index].clicked){
      // END GAME!!!!
      console.log("*****Double clicked");
    }
    newData[index].clicked=true;
    this.setState({ data:newData.sort(()=>  0.5 - Math.random()) });
    console.log(this.state.data)
  }

  render() {  
    return (
      // <div>section</div>
      <div>
        {
          this.state.data.map((item, index) =>
            <img src={item.image} key={index} className="cats" alt="cat" height="120" width="120" onClick={() => this.handleClick(index) } />)
        }
      </div>
    )
  }
}

export default Game;
