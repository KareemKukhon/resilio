// Import the necessary modules
const nodemailer = require('nodemailer');

// This is the main function that handles sending the email
module.exports = async (req, res) => {
  // Check if the request method is POST
  if (req.method === 'POST') {
    const { user_email, subject, message } = req.body; // Destructure email, subject, and message from the request body

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Set up email data
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: "kareemkukhon1@gmail.com",                // Recipient address
      subject: subject,              // Subject line
      text: message,                 // Plain text body
    };

    try {
      // Send mail with defined transport object
      const info = await transporter.sendMail(mailOptions);
      // Respond with success message
      res.status(200).json({ success: true, info });
    } catch (error) {
      // Respond with error message
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    // Handle other HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
