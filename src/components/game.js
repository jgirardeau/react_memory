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
    // console.log(Data)
  }
  handleClick(index){
    // console.log("CLICK",event)
    console.log(index);
    // UPDATE COUNTER
    let newData=this.state.data;
    let gameOver=false;
    if(newData[index].clicked){
      gameOver=true;
      console.log("*****Double clicked");
    }
    newData[index].clicked=true;
 
    // console.log(this.state.data)
    if(gameOver){
      //clear clicks
      for(var i=0;i<newData.length;i++){
        newData[index].clicked=false;
      }
    }
    this.setState({ data:newData.sort(()=>  0.5 - Math.random()) });
    this.props.updateScore(gameOver);
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
