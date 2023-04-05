import Header from "../components/Header";
import MainDisplay from "../components/MainDisplay";
import "../styles/Contact.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact () {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_annz57k', 'template_qguk1x9', form.current, 'IO6vKSDtSLpBxHqQW')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return (
        <>
            <Header />
            <MainDisplay title={"CONTACT US"} className="contactSection">
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <input type="text" placeholder="Full Name" name="user_name" required />
                    <input type="email" placeholder="Your Email" name="user_email" required />
                    <input type="text" placeholder="Subject" name="subject" required />
                    <textarea placeholder="Type your message here" name="message" cols="90" rows="10"></textarea>
                    <button type="submit" className="btn-submit">Send Message</button>
                </form>
            </MainDisplay>
        </>
    )
}

export default Contact;