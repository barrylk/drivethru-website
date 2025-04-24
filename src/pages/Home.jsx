import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Welcome to DriveThru</h1>
        <p className="hero-subtitle">Sri Lanka's fastest-growing goods delivery service,Whether it's groceries, meals,
          or everyday items, we connect you with nearby riders who deliver straight to your door..</p>
        <button className="cta-button">Get Started</button>
      </div>
    </motion.section>
  );
};

export default Home;
