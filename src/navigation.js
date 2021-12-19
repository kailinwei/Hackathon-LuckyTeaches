import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import './css/global.css';
import Home from './home';
import Lessons from './lessons';
// import App from './App';
import House from './assets/icons/home.svg';
import Pencil from './assets/icons/lessons.svg';
import Wash from './App';
import Recycle from './recycle';

export default function Navigation() {
    return (
        <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
        >
            <ul id="navigation">
                    <Link to="/">
                        <li key="home">
                            <img className="icons" src={House} alt="A shiny golden home icon."/>
                        </li>
                    </Link>
                <Link to="/lessons/">
                    <li key="lessons">
                        <img className="icons" src={Pencil} alt="A shiny golden pencil icon." />
                    </li>
                </Link>
                <Routes>
                    <Route exact path="/" element={<Home />} /> 
                    <Route path="/lessons/" element={<Lessons />} /> 
                    <Route path="/wash_our_hands/:param" element={<Wash />} />
                    <Route path="/recycle_together" element={<Recycle />} />
                </Routes>
            </ul>
        </nav>
    );
}