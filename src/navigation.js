import React from 'react';
import { Link } from "react-router-dom";
import './css/global.css';
import Home from './assets/icons/home.svg';
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
                        <button onClick={() => window.location.reload()}>
                            <img src={Home} alt="A shiny golden home icon."/>
                        </button>
                    </Link>
                </li>
                <li key="lessons">
                    <Link to="/lessons">
                        <img src={Pencil} alt="A shiny golden pencil icon." />
                    </Link>

                </li>
            </ul>
        </nav>
    );
}