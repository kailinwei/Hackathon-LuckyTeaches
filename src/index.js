import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom"; 
import './css/global.css';
import './css/wash.css';
import Navigation from './navigation.js';


ReactDOM.render(
  <Router>
    <Navigation />
  </Router>,
  document.getElementById('root')
);