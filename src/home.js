import React from 'react';
import './css/global.css';
import './css/home.css';
import Message from './message.js';
import Lucky from './assets/images/lucky/reading.svg'

export default function Home() {
return(
    <div id='index'>
        <div className='center'>
            <img id="lucky" src={Lucky} alt="Lucky the corgi reading a book." />
        </div>
        <Message />
    </div>
    )
}