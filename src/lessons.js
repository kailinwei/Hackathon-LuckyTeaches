import React from 'react';
import { Link } from "react-router-dom";
import './css/global.css';
import './css/lessons.css';
import Message from './lessonMessage';

let completedLessons = [false, true, true];

function isComplete(index, key, title, link) {
    if (completedLessons[index] === true) {
        return (
            <li key={key} className='complete'>
                {title}
            </li>
            )
    } else {
        return (
        <Link to={`${link}/${completedLessons}`}>
            <li key={key}>
                {title}
            </li>
        </Link>
        )

    }
}

export default function Lessons() {
return(
    <section id='lessons'>
        <div className='links'>
            <ul>
                {isComplete(0, 'washourhands', 'Wash Our Hands', '/wash_our_hands')}
                {isComplete(1, 'recycletogether', 'Recycle Together', '/recycle_together')}
                {isComplete(2, 'makefriends', 'Make Friends Around the World', '/make_friends_around_the_world')}
            </ul>
        </div>
        <Message />
    </section>
    )
}