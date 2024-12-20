// src/components/ChatBot.jsx
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { TbMessageChatbot } from "react-icons/tb";
import { IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({
    username: '',
    mobile: '',
    email: '',
    village: '',
    age: '',
    interests: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const quotes = [
    "Youth is the hope of our future.",
    "Together we can make a difference.",
    "Be the change you wish to see in your village.",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="bg-green-600 p-4 flex justify-between items-center">
              <h3 className="text-white font-semibold">Join PHDY</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <IoMdClose size={24} />
              </button>
            </div>

            <div className="p-4">
              {step === 0 && (
                <div className="text-center">
                  <p className="mb-4 text-gray-800 dark:text-gray-200">Would you like to join our youth association?</p>
                  <div className="space-x-4">
                    <button
                      onClick={() => setStep(1)}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}

              {step === 1 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Form fields */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white">Name</label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-900"
                      onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white">Age</label>
                    <input
                      type="number"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-900"
                      onChange={(e) => setUserData({ ...userData, age: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white">Mobile</label>
                    <input
                      type="tel"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-900"
                      onChange={(e) => setUserData({ ...userData, mobile: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white">Village</label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-900"
                      onChange={(e) => setUserData({ ...userData, village: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white">Interests</label>
                    <textarea
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-900"
                      onChange={(e) => setUserData({ ...userData, interests: e.target.value })}
                      placeholder="What activities interest you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Submit
                  </button>
                </form>
              )}

              {step === 3 && (
                <div className="text-center">
                  <p className="text-green-600 font-semibold mb-4">
                    Thank you for joining PHDY!
                    <br/>
                    <span className="p-2 rounded text-black dark:text-white">
                      Your profile will be live soon! 
                      <br/>ID: {Math.floor(Math.random() * 1000000)}
                    </span>                  
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 italic">{randomQuote}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* <button
        onClick={() => setIsOpen(true)}
        className="bg-black hover:bg-white-600 dark:text-black dark:bg-white text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <TbMessageChatbot size={24} />
      </button> */}
    <button
      onClick={() => setIsOpen(true)}
      className="bg-black text-white p-3 rounded-full shadow-lg shadow-gray-300 transition-all duration-300 dark:bg-white dark:text-black"
      >
      <TbMessageChatbot size={24} />
    </button>


    </div>
  );
}



