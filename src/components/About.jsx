
// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaHandshake, FaLightbulb } from 'react-icons/fa';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      title: "Community",
      description: "Strong network of dedicated youth volunteers",
      icon: <FaUsers className="text-green-600 dark:text-green-400 w-12 h-12" />,
    },
    {
      title: "Collaboration",
      description: "Working together for village development",
      icon: <FaHandshake className="text-blue-500 dark:text-blue-400 w-12 h-12" />,
    },
    {
      title: "Innovation",
      description: "Modern solutions for rural challenges",
      icon: <FaLightbulb className="text-yellow-500 dark:text-yellow-400 w-12 h-12" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Established in 2020, PHVDYA has been at the forefront of village development initiatives.
            Through youth empowerment and community engagement, we work towards creating sustainable
            development solutions for Peddha Harivanam village.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-colors"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}