
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-black">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="relative h-[40vh] bg-gradient-to-r from-green-600 to-green-700 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white px-4">Contact Us</h1>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-green-500 focus:ring-green-500 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-green-500 focus:ring-green-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-green-500 focus:ring-green-500 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-green-500 focus:ring-green-500 transition-colors"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Send Message
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
    <div className="max-w-7xl mx-auto px-4">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
        >
        <h2 className="text-3xl font-bold text-white mb-6">
            Find Us Here
        </h2>
        <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Visit our office or get in touch with us today
        </p>
        </motion.div>

        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d869.255539064619!2d77.1040935!3d15.6324933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb7b396f777df1f%3A0x2c27165ccf6e78c7!2sPedda%20Harivanam%2C%20Andhra%20Pradesh!5e1!3m2!1sen!2sin!4v1734695524969!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
        ></iframe>
        </div>

        <div className="mt-8 flex justify-center space-x-8 text-white">
        <div className="text-center">
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-green-100"> Peddha Harivanam Village</p>
            <p className="text-green-100">Adoni Mandal, Kurnool District, Andhra Pradesh State PIN - 518308</p>


        </div>
        <div className="text-center">
            <h3 className="font-semibold mb-2">Hours</h3>
            <p className="text-green-100">Mon-Fri: 9AM - 6PM</p>
            <p className="text-green-100">Sat-Sun: Closed</p>
        </div>
        </div>
    </div>
    </section>
    </div>
  );
}
