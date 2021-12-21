import React from 'react';
import classes from './MenuItems.module.css';

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
        //makes the classes into an array and adds a class when a specefic pos is clicked
    })

    return(
        <nav className={classes.Topbar}>
            <ul>
              {featureList}
            </ul>
          </nav>
    )
}

export default MenuItems;