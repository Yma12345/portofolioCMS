import React from 'react';
import classes from './PageSwitcher.module.css';

import CVImage from '../src/rick-cv.png';


function CV() {
    return (
        /* checks which feature is clicked and returns the page for it*/
        <div className={classes.CVcontainer}>
            <div className={classes.CV}>
                <img className={classes.CVimg} src={CVImage} alt="cv-img"></img>
            </div>

            <footer className={classes.Footer}>
            </footer>
        </div>
    )
}

export default CV;