import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2>Contact Us</h2>
      <p>Feel free to reach out with any inquiries or feedback!</p>
      <div className="contact-info">
        <p>Email: nadeejaknirmala@gmail.com</p>
        <p>Phone:‪+94 77 007 8086‬</p>
      </div>
    </motion.section>
  );
};

export default Contact;
