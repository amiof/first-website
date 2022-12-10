import React from 'react';
import styles from "./Banner.module.css"
import banner from "../images/banner.jpg"

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="logo" />
            <div className={styles.header}>
                <h2>JavaScript</h2>
                <p>this a first project of <span>react.js</span></p>
            </div>
            
        </div>
    );
};

export default Banner;