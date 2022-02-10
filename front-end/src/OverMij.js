import React from 'react';
import classes from './PageSwitcher.module.css';
import AboutImage from '../src/over-mij.jpg';


function OverMij() {
    return (
        <div className={classes.AboutMePage}>
            <div className={classes.AboutMeImg}>
                <img className={classes.AboutMeImage} src={AboutImage} alt="about-img"></img>
            </div>
            <div className={classes.AboutMeText}>
                <h1>Wie ben ik?</h1>
                <p>Ik ben sociaal en behulpzaam en houd van creatief bezig zijn. Ik ben een echt gevoelsmens en heb een groot inlevingsvermogen. Daardoor snap ik andere goed en ben ik betrouwbaar en loyaal. Ik ben volhardend en werk doelgericht. </p>
            </div>
            <footer className={classes.Footer}>
            </footer>
        </div>
    )
}

export default OverMij;