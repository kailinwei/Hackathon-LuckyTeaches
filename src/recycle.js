import React from "react";
import './css/wash.css';
import { Component } from "react";
import { recycleData  } from "./data";

var i=0 ;

 
export class Recycle extends Component {
  state = {
    name: recycleData[i].name,
    media: recycleData[i].media,
  
  };
  
  nextStep = (n) => {
    const length = recycleData.length;
    if (i <= length) {
      console.log(recycleData[i]);
      this.setState({
        name: recycleData[(i = i +1)].name,
        media: recycleData[(i)].media,
    
      });
    } else {
      return
    }
  };
  render() {
    return (
      <>
        <div className="WashContainer">
          <p>{this.state.name}</p>
          <img className="washImg" src={this.state.media}></img>
  
          <img className="fingerImg" src="/images/finger.svg" onClick={() => this.nextStep()}></img>
        </div>
      </>
    );
  }
}
