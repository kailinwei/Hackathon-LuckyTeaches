import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import './css/global.css';
import Home from './home';
// import Lessons from './lessons';
import App from './App';
import House from './assets/icons/home.svg';
import Pencil from './assets/icons/lessons.svg';

export default function Navigation() {
    return (
        <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
        >
            <ul id="navigation">
                <li key="home">
                    <Link to="/">
                        <li key="home">
                            <img src={House} alt="A shiny golden home icon."/>
                        </li>
                    </Link>
                </li>
                <Link to="/lessons">
                    <li key="lessons">
                        <img src={Pencil} alt="A shiny golden pencil icon." />
                    </li>
                </Link>
                <Routes>
                <Route path="/" element={<Home />} /> 
                    <Route path="/lessons" element={<App />} /> 
                </Routes>
            </ul>
        </nav>
    );
}