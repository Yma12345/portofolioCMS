import React from 'react';
import classes from './HomeImg.module.css';
import HomeImage from '../src/rick-home.png';
import CVImage from '../src/rick-cv.png';
import ContactUs from './Mailer';

const HomeImg = (props) => {
    return(
        props.currentSelectedFeature === 1 ?
        <div className={classes.CVcontainer}>
            <div className={classes.CV}>
            <img className={classes.CVimg} src={CVImage}></img>
            </div>
        </div>
        : 
        props.currentSelectedFeature === 2 ?
        <p>Illustrator</p>
        :
        props.currentSelectedFeature === 3 ?
        <p>Projects</p>
        :
        props.currentSelectedFeature === 4 ?
        <p>About Me</p>
        :
        props.currentSelectedFeature === 5 ?
        <ContactUs />
        // <p>Contact</p>
        :
        <div className={classes.Img}>
        <img className={classes.HomeImage} src={HomeImage}/>
        </div>
    )
}

export default HomeImg;