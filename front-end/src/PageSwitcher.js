import React from 'react';
import classes from './PageSwitcher.module.css';
import HomeImage from '../src/rick-home.png';

const PageSwitcher = () => {
    return (
        <div className={classes.Img}>
            <img className={classes.HomeImage} src={HomeImage} alt="home-img" />
            <footer className={classes.Footer}>
                <h1>portfolio</h1>
                <p>Rick van der Zanden</p>
            </footer>
        </div>
    )
}

export default PageSwitcher;