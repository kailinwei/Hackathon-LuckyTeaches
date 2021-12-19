import React from "react";
import './css/wash.css';
import { Component } from "react";
import { flagData  } from "./data";

var i=0 ;

 
export class Country extends Component {
  state = {
    name: flagData[i].name,
    media: flagData[i].media,
  
  };
  
  nextStep = (n) => {
    const length = flagData.length;
    if (i <= length) {
      console.log(flagData[i]);
      this.setState({
        name: flagData[(i = i +1)].name,
        media: flagData[(i)].media,
    
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
