import React, { Component } from 'react';
import './css/global.css';
import './css/message.css';

let introduction = false;
let index = 0;

const texts = [`Hi!`, `I'm Lucky`, `I'm so excited to learn something cool.`,]



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
        } else (
            this.setState({
                text: `Touch the pencil icon to learn with me!`
            })
        )
    }
    render() {
        return(
            <section id="message">
                <div className="box">
                    <p>{this.state.text}</p>
                    <p onClick={this.isClick} className="next">➡</p>
                </div>
            </section>
        );
    }
}