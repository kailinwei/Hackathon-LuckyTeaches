import React from "react";
import "./App.css";
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
          <h1>{this.state.instruction}</h1>
          <img src={this.state.media}></img>
          <iframe
            width="560"
            height="315"
            src={this.state.video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <img src="/images/finger.svg" onClick={() => this.nextStep()}></img>
        </div>
      </>
    );
  }
}
