import React, { Component } from 'react';
import './css/global.css';
import './css/message.css';

let introduction = false;
let index = 0;

const texts = [`Hi!`, `I'm Lucky`, `I'm so excited to learn something cool.`, `Touch the pencil icon to learn with me!`]
const sounds = ['./sounds/hi.wav', './sounds/name.wav', './sounds/learn.wav', './sounds/pencil.wav']

let audio = (sound) => new Audio(sound).play()

export default class Message extends Component {
    isIntroduction () {
        if (!introduction && index === 0) {
                <div>
                    <p>{this.text}</p>
                    <p onClick={this.isClick()} className="next">➡</p>
                </div>
        }
    }

    state = {
        text: texts[index]
    }

    isClick = () => {
        if (index < texts.length - 1) {
            index = index + 1;
            this.setState({
                text: texts[index]
            })
        }
    }
    
    isSound = () => {
        audio(sounds[index]);
    }

    render() {
        return(
            <section id="message">
                <div className="box">
                    <p>{this.state.text}</p>
                    <p onClick={this.isClick} className="next">➡</p>
                    <p onClick={this.isSound} className="sound">▶</p>
                </div>
            </section>
        );
    }
}