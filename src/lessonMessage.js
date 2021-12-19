import React, { Component } from 'react';
import './css/global.css';
import './css/message.css';
import sound from './assets/sounds/what.wav';

let introduction = false;
let index = 0;

const texts = [`What should we learn to do today?`,]

const audio = (sound) => new Audio(sound).play()

export default class Message extends Component {
    isIntroduction () {
        if (!introduction && index === 0) {
                <div>
                    <p>{this.text}</p>
                </div>
        }
    }

    state = {
        text: texts[index]
    }

    isSound = () => {
        audio(sound);
    }

    render() {
        return(
            <section id="message">
                <div className="box">
                    <p>{this.state.text}</p>
                    {/* <p onClick={this.isClick} className="next">➡</p> */}
                    <p onClick={this.isSound} className="sound">▶</p>
                </div>
            </section>
        );
    }
}