import React from 'react';
import classes from './HomeImg.module.css';
import HomeImage from '../src/rick-home.png';
import CVImage from '../src/rick-cv.png';
import AboutImage from '../src/over-mij.jpg';
import ContactUs from './Mailer';
import GetProjects from './GetProjects';
import GetGraphics from './GetGraphics';
import CMS from './CMS';

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
        <GetGraphics />
        <footer className={classes.Footer}>
        </footer>
        </div>
        :
        props.currentSelectedFeature === 3 ?
        <div className={classes.Projects}>
        <GetProjects />
        <footer className={classes.Footer}>
        </footer>
        </div>
        :
        props.currentSelectedFeature === 4 ?
        <div className={classes.AboutMePage}>
            <div className={classes.AboutMeImg}>
                <img className={classes.AboutMeImage} src={AboutImage}></img>
            </div>
            <div className={classes.AboutMeText}>
                <h1>Wie ben ik?</h1>
                <p>Ik ben sociaal en behulpzaam en houd van creatief bezig zijn. Ik ben een echt gevoelsmens en heb een groot inlevingsvermogen. Daardoor snap ik andere goed en ben ik betrouwbaar en loyaal. Ik ben volhardend en werk doelgericht. </p>
            </div>
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
        :props.currentSelectedFeature === 6 ?
        <div className={classes.LoginPage}>
            <CMS />
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