import React, { Component } from 'react';
import {Link , Outlet} from "react-router-dom"

class AboutUs extends Component {
    render() {
        return (
            <div>
                <h1>this is about us </h1>
                <ul>
                    <li><Link to="programer">our site porgrammer</Link></li>
                    <li><Link to="productManager">our site productManager</Link></li>
                </ul>
                <Outlet></Outlet>
            </div>
        );
    }
}

export default AboutUs;