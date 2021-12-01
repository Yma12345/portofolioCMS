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
        <footer className={classes.Footer}>
        </footer>
        </div>
        : 
        props.currentSelectedFeature === 2 ?
        <div className={classes.Illustrator}>
        <p>Illustrator</p>
        <footer className={classes.Footer}>
        </footer>
        </div>
        :
        props.currentSelectedFeature === 3 ?
        <div className={classes.Projects}>
        <p>Projects</p>
        <footer className={classes.Footer}>
        </footer>
        </div>
        :
        props.currentSelectedFeature === 4 ?
        <div className={classes.AboutMePage}>
            <div className={classes.AboutMeImg}></div>
        <footer className={classes.Footer}>
        </footer>
        </div>
        :
        props.currentSelectedFeature === 5 ?
        <div className={classes.ContactPage}>
            <div className={classes.ContactImg}>

            </div>
        <ContactUs />
        <footer className={classes.Footer}>
        </footer>
        </div>
        :
        <div className={classes.Img}>
        <img className={classes.HomeImage} src={HomeImage}/>
        <footer className={classes.Footer}>
          <h1>portfolio</h1>
          <p>Rick van der Zanden</p>
        </footer>
        </div>
    )
}

export default HomeImg;