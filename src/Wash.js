import React from "react";
import './css/wash.css';
import { Component } from "react";
import { washStepData } from "./data";

var i=0 ;

 
export class Wash extends Component {
  state = {
    instruction: washStepData[i].instruction,
    media: washStepData[i].media,
    video:washStepData[i].video,
  };
  
  nextStep = (n) => {
    const length = washStepData.length;
    if (i <= length) {
      console.log(washStepData[i]);
      this.setState({
        instruction: washStepData[(i = i +1)].instruction,
        media: washStepData[(i)].media,
        video:washStepData[(i)].video,
      });
    } else {
      return
    }
  };
  render() {
    return (
      <>
        <div className="WashContainer">
          <p>{this.state.instruction}</p>
          <img className="washImg" src={this.state.media} alt="Lots of bubbles being lathered on a pair of hands."></img>
  
          <iframe
            width="50vw"
            height="50vh"
            src={this.state.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <img className="fingerImg" alt="A hand with the pointer finger sticking out" src="/images/finger.svg" onClick={() => this.nextStep()}></img>
        </div>
      </>
    );
  }
}
