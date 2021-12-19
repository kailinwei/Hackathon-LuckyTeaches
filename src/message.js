import React, { Component } from 'react';
import './css/global.css';
import './css/message.css';

let introduction = false;
let index = 0;

const texts = [`I'm Lucky`, `Touch the pencil icon to learn with me!`,]



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
        
        index = index + 1;
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