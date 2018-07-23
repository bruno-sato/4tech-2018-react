import React from 'react';
import './Header.css';
import logo from '../../../assets/images/logo-h-vjobs.png';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand">
            <img className="logo" src={logo} alt=""></img>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link text-white">Vagas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white">Sobre</a>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header;