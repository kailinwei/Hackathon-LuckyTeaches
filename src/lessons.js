import React from 'react';
import { Link } from "react-router-dom";
import './css/global.css';
import './css/lessons.css';
import Message from './lessonMessage';

export default function Lessons() {
return(
    <section id='lessons'>
        <div className='center'>
            <ul>
                <Link to="/wash_our_hands">
                    <li key="lessons">
                        Wash Our Hands
                    </li>
                </Link>
            </ul>
        </div>
        <Message />
    </section>
    )
}