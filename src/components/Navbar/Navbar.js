import React from 'react';
import {NavLink} from 'react-router-dom';
// import classes from '../Navbar/Navbar.module.css';
const Navbar=()=>{
    return(
        <div className="Navbar">
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="container-fluid">
                        <div class="navbar-header">
                            <p className="navbar-brand">Caring Made Easy</p>
                        </div>
                        <ul class="nav navbar-nav">
                        <li class="active"><NavLink to="/">Bulletin</NavLink></li>
                        <li><NavLink to="/categories">Categories</NavLink></li>
                        </ul>
                </div>
            </nav> 
        </div>
    );
}
export default Navbar;