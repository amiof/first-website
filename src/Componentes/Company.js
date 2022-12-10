import style from "./company.module.css"
import React from 'react';
import logo from "../images/logo.jpg"

const company = () => {
    return (
        <div className={style.container}>
            <div ><p>how supports us?</p></div>
            <div className={style.images}>
                <img src={logo} alt="pic"/>
                <img src={logo} alt="pic"/>
                <img src={logo} alt="pic"/>
            </div>
            
        </div>
    );
};

export default company;