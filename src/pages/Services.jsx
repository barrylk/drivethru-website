import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.section
      className="services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2>Our Services</h2>
      <p>We deliver food, drinks, groceries, and more to your doorstep using motorbike delivery. Fast, reliable, and efficient.</p>
      <ul className="service-list">
        <li>Food Delivery</li>
        <li>Grocery Shopping</li>
        <li>Drink Delivery</li>
        <li>And More!</li>
      </ul>
    </motion.section>
  );
};

export default Services;
