import React from 'react';
import classes from './PageSwitcher.module.css';

import ContactImage from '../src/contact.jpg';
import ContactUs from './Mailer';


function Contact() {
    return (
        /* checks which feature is clicked and returns the page for it*/
        <div className={classes.ContactPage}>
            <div className={classes.ContactImg}>
                <img className={classes.ContactImage} src={ContactImage} alt="contact-img"></img>
            </div>
            <ContactUs />
            <footer className={classes.Footer}>
            </footer>
        </div>
    )
}

export default Contact;