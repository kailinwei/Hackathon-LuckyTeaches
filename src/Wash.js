import React from "react";
import './css/wash.css';
import { Component } from "react";
import { washStepData } from "./data";

var i = 0 ;
const sounds = ['./sounds/running.wav', './sounds/remember.wav', './sounds/lather.wav', './sounds/scrub.wav', './sounds/fingers.wav', './sounds/nails.wav', './sounds/wrists.wav', './sounds/seconds.wav', './sounds/rinse.wav', './sounds/dry.wav']
const audio = (sound) => new Audio(sound).play()
 
export class Wash extends Component {
  state = {
    instruction: washStepData[i].instruction,
    media: washStepData[i].media,
    video:washStepData[i].video,
  };
  
  nextStep = (n) => {
    const length = washStepData.length;
    if (i < length) {
      this.setState({
        instruction: washStepData[(i = i +1)].instruction,
        media: washStepData[(i)].media,
        video:washStepData[(i)].video,
      });
    } else {
      return
    }
  };

  isSound = () => {
    audio(sounds[i]);
  };
  render() {
    return (
        <div className="WashContainer">
          <p className="instructions">{this.state.instruction}</p>
          <img className="washImg" src={this.state.media} alt="Lots of bubbles being lathered on a pair of hands." />
          <iframe
            width="50vw"
            height="50vh"
            src={this.state.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
          <p onClick={() => this.nextStep()} className="next">➡</p>
          <p onClick={this.isSound} className="sound">▶</p>
        </div>
    );
  }
}
