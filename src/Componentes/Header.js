import React, { Component } from 'react';
import styles from "../Componentes/header.module.css"
import logo from "../images/logo.jpg"
import {Link} from "react-router-dom"
class Header extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div>
                    <ul>
                        <li><Link to="/">home page</Link></li>
                        <li><Link to="/products">products</Link></li>
                        <li><Link to="aboutUs">about us</Link></li>
                    </ul>
                
                </div>
                <img src={logo} alt="logo"></img>
                
            </div>
        );
    }
}

export default Header;