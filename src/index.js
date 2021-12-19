import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom"; 
import './css/global.css';
import './css/index.css';
import Navigation from './navigation.js';
import Message from './message.js';
import Lucky from './assets/images/lucky/reading.svg';

ReactDOM.render(
  <Router>
    <div className="center">
      <img id="lucky" src={Lucky} alt="Lucky the corgi reading a book." />
    </div>
    <Message />
    <Navigation />
  </Router>,
  document.getElementById('root')
);