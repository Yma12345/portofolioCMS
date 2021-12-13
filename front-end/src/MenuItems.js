import React, { useState } from 'react';
import classes from './MenuItems.module.css';
import Data from './Data';

const MenuItems = (props) => {
    const featureList = props.data.featureList.map((item, pos) => {
        const classArr = [classes.ListItem];
        if(pos === props.currentSelectedFeature)
        {
            classArr.push(classes.SelectedMenuItem);
        }
        return(
            <a onClick={() => props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</a>
        )
    })
    const [hamburgerOpen, setHamburger] = useState(false);

    const toggleHamburger = () => {
        setHamburger(!hamburgerOpen)
    }

    return(
        <nav className={classes.Topbar}>
            <ul>
              {featureList}
            </ul>
            <div className={classes.hamburger} onClick={toggleHamburger}>
                <div className={classes.burger}></div>
                <div className={classes.burger}></div>
                <div className={classes.burger}></div>
            </div>
            <style jsx>{`

            `}

            </style>
          </nav>
    )
}

export default MenuItems;