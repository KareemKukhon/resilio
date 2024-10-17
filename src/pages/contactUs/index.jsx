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
        <Header myPage="contact" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', margin: '20px' }}>
          <div style={{  padding: '20px', textAlign: 'left' }}>
            <h1 style={{ fontSize: '60px' }}>Let's Work Together</h1>
            <p style={{ fontSize: '18px', color: '#595A73' }}>
              Have questions or need assistance with our IT services? We're here to help! Reach out to our team through the form below, or use the provided contact details. Whether it's technical support, project inquiries, or general information, we're dedicated to providing prompt and effective solutions. Let's connect and take your technology to the next level.
            </p>
          </div>
          <img
          className='responsive-image'
            src={`${process.env.PUBLIC_URL}/contact-us.png`}
            alt="Resilio contact us page logo"
            style={{ width: '45%', height: '490px' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '50px', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* First div */}
            <ContactInfo title="info@resilio.com" Icon={MailIcon} />
            <ContactInfo title="123 Main St" Icon={HomeIcon} />
            <ContactInfo title="123-456-7890" Icon={PhoneIcon} />
          </div>

          <div style={{ width: '50%' }}>
            {/* Second div */}
            <form ref={this.form} onSubmit={this.sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <TextField
                label="Name"
                name="user_name"
                className="text-field"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Email"
                name="user_email"
                className="text-field"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MailIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Type Your Message"
                name="message"
                className="text-field"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MessageIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <ElevatedButton children={"Send Message"} reduis={"15px"} width={"100%"} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
