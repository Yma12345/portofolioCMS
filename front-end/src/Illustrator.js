import React from 'react';
import classes from './PageSwitcher.module.css';
import GetGraphics from './GetGraphics';


function Illustrator() {
    return (
        <div className={classes.Illustrator}>
            <GetGraphics />
            <footer className={classes.Footer}>
            </footer>
        </div>
    )
}

export default Illustrator;