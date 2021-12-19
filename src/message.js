import React, { Component } from 'react';
import './css/global.css';
import './css/message.css';

let introduction = false;
let index = 0;

const texts = [`I'm Lucky`, `I'm so excited to learn something cool.`,]



export default class Message extends Component {
    isIntroduction () {
        if (!introduction) {
            return(
                <div>
                    <p>{this.text}</p>
                    <p onClick={this.isClick()} className="next">➡</p>
                </div>
            )
        }
        if (introduction) {
            return (
                <p>{texts[texts.length]}</p>
            )
        }
    }

    state = {
        text: 'Hi!'
    }

    isClick = () => {
        this.setState({
            text: texts[index]
        })
        if (index !== texts.length) {
            index = index + 1;
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