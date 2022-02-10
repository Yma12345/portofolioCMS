import React from 'react';
import classes from './PageSwitcher.module.css';
import GetProjects from './GetProjects';


function CV() {
    return (
        <div className={classes.Projects}>
            <GetProjects />
            <footer className={classes.Footer}>
            </footer>
        </div>
    )
}

export default CV;