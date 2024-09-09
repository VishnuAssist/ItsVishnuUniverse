import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactStyles.module.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const notify = () => toast("Wow so easy!");

  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_602gq2x', 'template_oaiwm38', form.current, 'g01Q3L_8uBOPvSZnr')
      .then(
        (result) => {
          console.log('SUCCESS!');
          console.log("message sent to Vishnupriyan")
          // Optionally, you can clear the form or provide user feedback here.
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
        
      );
      
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="from_name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="from_email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input onClick={()=>notify} className="hover btn" type="submit" value="Submit"  />
        {/* <button onClick={()=>notify} type="submit" value={"submit"}>Submit</button> */}

      </form>
    </section>
  );
}

export default Contact;
