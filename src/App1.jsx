import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Book, Users, MessageSquare, AlertTriangle } from 'lucide-react';

const AnimatedWebsite = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    { title: "The Hidden Reality of IIT Life", icon: Book },
    { title: "Information Flow in IIT", icon: Users },
    { title: "The PYQ Phenomenon", icon: MessageSquare },
    { title: "The Dark Side of Exam Preparation", icon: AlertTriangle },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Insider's Guide to IIT Life
      </motion.h1>

      <div className="max-w-4xl mx-auto">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className={`bg-white bg-opacity-10 rounded-lg p-6 mb-6 ${
              currentSection === index ? 'border-2 border-yellow-300' : ''
            }`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <section.icon className="mr-2" />
              {section.title}
            </h2>
            <p className="text-sm">
              {index === 0 && "From ragging to exam hacks, discover the hidden realities of IIT life."}
              {index === 1 && "Explore how information flows through various student groups and networks."}
              {index === 2 && "Learn about the controversial practice of solving previous years' questions."}
              {index === 3 && "Uncover the ethical dilemmas and challenges in exam preparation."}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <p className="text-lg mb-4">Scroll down to learn more</p>
        <ChevronDown className="mx-auto animate-bounce" size={32} />
      </motion.div>
    </div>
  );
};

export default AnimatedWebsite;