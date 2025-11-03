import React, { Component } from 'react';
import MailIcon from '../../icons/mail-icon';
import ContactInfo from '../../components/contactInfo';
import HomeIcon from '../../icons/home-icon';
import PhoneIcon from '../../icons/phone-icon';
import { InputAdornment, TextField } from '@mui/material';
import theme from '../../config/themes/websiteTheme';
import './style.css';
import PersonIcon from '../../icons/person-icon';
import MessageIcon from '../../icons/message-icon';
import Header from '../../components/header';
import ElevatedButton from '../../components/elevatedButton';
import EmailJS from '@emailjs/browser';
import Introduction from '../../sections/introduction';

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef(); // Create a reference for the form
    this.state = {
      userEmail: '',
      subject: '',
      message: '',
      success: false,
      error: null,
    };
  }

  sendEmail = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const { userEmail, subject, message } = this.state;
    
    // Prepare the data to be sent
    const data = {
      user_email: userEmail,
      subject: subject,
      message: message,
    };
    console.log(`userEmail: ${e}, Subject: ${subject}, Message: ${message}`);


    try {
      // Send the email by calling the API
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json(); // Parse the JSON response

      if (result.success) {
        this.setState({ success: true, error: null }); // Set success state
      } else {
        this.setState({ error: result.error }); // Set error state
      }
    } catch (error) {
      console.error('Error sending email:', error);
      this.setState({ error: 'Failed to send email.' }); // Handle fetch error
    }
    console.log('SUCCESS!', this.form.current); 
  };

render() {
  return (
    <div>
      {/* <Header myPage="contact" /> */}
      <Introduction />

      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-heading">
            SBF.com &amp; SBF.com.sa — Contact / Offer
          </h1>

          <p className="contact-text">
            Interested in acquiring <strong>SBF.com</strong> and <strong>SBF.com.sa</strong>? Send your offer
            or inquiry using the form below, or reach out via the contact details provided.
            This premium 3-letter domain pair is short, memorable, and ideal for Saudi government and
            digital transformation initiatives. <strong>Serious offers only. Escrow supported.</strong>
          </p>

          <div className="contact-info-row">
            <ContactInfo title="office@sbf.com" Icon={MailIcon} />
            <ContactInfo title="Riyadh, Saudi Arabia" Icon={HomeIcon} />
            <ContactInfo title="+966 55 543 4043" Icon={PhoneIcon} />
          </div>
        </div>

        <img
          className="contact-image responsive-image"
          src={`${process.env.PUBLIC_URL}/contact-us.png`}
          alt="SBF.com & SBF.com.sa contact page"
        />
      </div>
    </div>
  );
}

}
