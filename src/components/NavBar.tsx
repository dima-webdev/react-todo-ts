import React from 'react';
import { NavLink } from "react-router-dom";

export const NavBar: React.FC = () => {
    return <>
        <nav>
            <div className="nav-wrapper teal darken-4 px1">
                <a href="/" className="brand-logo">TodoList React + TypeScript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/">Список дел</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Информация</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
}