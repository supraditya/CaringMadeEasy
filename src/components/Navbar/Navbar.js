import React from 'react';
import {NavLink} from 'react-router-dom';
// import classes from '../Navbar/Navbar.module.css';
const Navbar=()=>{
    return(
        <div className="Navbar">
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                        <div className="navbar-header">
                            <p className="navbar-brand">Caring Made Easy</p>
                        </div>
                        <ul className="nav navbar-nav">
                        <li><NavLink to="/">Must Read</NavLink></li>
                        <li><NavLink to="/categories">Categories</NavLink></li>
                        </ul>
                </div>
            </nav> 
        </div>
    );
}
export default Navbar;