// src/components/AboutPage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSchool, FaUsers, FaWhatsapp, FaHandshake } from 'react-icons/fa';

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time
    return () => clearTimeout(timer);
  }, []);

  const timelineEvents = [
    {
      icon: <FaSchool />,
      title: "The Beginning",
      description: "It all started at the Telugu school, where we noticed the need for improvement"
    },
    {
      icon: <FaWhatsapp />,
      title: "Initial Action",
      description: "We raised our concerns in the village WhatsApp group"
    },
    {
      icon: <FaUsers />,
      title: "Group Formation",
      description: "Like-minded youth came together to form our association"
    },
    {
      icon: <FaHandshake />,
      title: "Taking Action",
      description: "Meeting with the school Headmaster and beginning our journey"
    }
  ];

  if (isLoading) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-black">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600"></div>
        </div>
    );
  }

  return (
    <div className="pt-0 bg-gray-50 dark:bg-black min-h-screen">
      {/* Hero Section */}
      <motion.div
      
        className="relative h-[40vh] bg-green-600 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white px-4">
            How We Have Started
          </h1>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200 dark:bg-green-900" />

            {/* Timeline Events */}
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } mb-16`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="text-green-600 text-2xl mb-4">{event.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-green-600">Our Story</h2>
            
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              The story of how the Pedda Harivanam Development Youth group was formed began on a quiet afternoon, when a few of us were sitting in front of the Telugu school in our village...
            </p>

            <p className="mb-6 text-gray-700 dark:text-gray-300">
              As we looked around, we couldn't help but notice how neglected the school seemed compared to others in our village. The buildings looked old and in need of repair, and there was a lack of basic facilities for the children studying there...
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Together, we can continue to bring positive change to our village.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-colors">
              Become a Member
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
