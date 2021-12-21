import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import classes from './Mailer.module.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gs5qp9s', 'template_wer1cdx', form.current, 'user_jZASAgMEV2JHqiXILp4b0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
      //sends the given data in the form into the emailjs service with the given template and user
  }

  return (
    <form className={classes.ContactForm} ref={form} onSubmit={sendEmail}>
      <h2>Stuur mij gerust een mail.</h2>
      <table>
          <tr>
              <td><input type="text" name="user_name" className={classes.FeedbackInput} placeholder="Naam"/></td>
          </tr>
          <tr>
             <td><input type="email" name="user_email" className={classes.FeedbackInput} placeholder="Email"/></td>
          </tr>
          <tr>
              <td><textarea name="message" className={classes.FeedbackInput} placeholder="Bericht"/></td>
          </tr>
      </table>
      <input type="submit" value="Verzend mail" />
    </form>
  )
}

export default ContactUs;