import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaTimes, FaQrcode, FaHandshake, FaMoneyBill, FaUserCircle, FaMobileAlt, FaHome } from 'react-icons/fa';


const FundRaisePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    village: ''
  });
  const [hasPaid, setHasPaid] = useState(false);

  useEffect(() => {
    // Check if user has already paid
    const paidStatus = localStorage.getItem('hasPaid');
    if (paidStatus === 'true') {
      return;
    }

    // Show popup every 2 minutes if not paid
    const interval = setInterval(() => {
      setShowPopup(true);
    }, hasPaid ? null : 120000); // 2 minutes

    // Initial popup after 1 minute
    const initialTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 30000); // 1 minute

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, [hasPaid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handlePaymentMethod = (method) => {
    if (method === 'online') {
      // Show QR code or redirect to payment
      setStep(4);
    } else {
      // Show offline message
      setStep(5);
    }
  };

  const handlePaymentComplete = () => {
    setHasPaid(true);
    localStorage.setItem('hasPaid', 'true');
    setStep(6);
  };

const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="text-center">
            <div className="text-5xl mb-4 text-green-600">🌱</div>
            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <FaHeart className="text-red-500" />
              Support Village Development
            </h2>
            <p className="mb-6">
              "Together we can build a brighter future for our village" 
              <span className="text-2xl">✨</span>
            </p>
            <button
              onClick={() => setStep(2)}
              className="bg-green-600 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2 mx-auto hover:bg-green-700 transition-colors"
            >
              <FaHandshake className="text-xl" />
              Yes, I'm Interested 🙌
            </button>
          </div>
        );

      case 2:
        return (
          <div>
            <h3 className="text-xl font-bold mb-4 text-center">
              Thank you for your interest! 🙏
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-3">
                <FaUserCircle className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 pl-10 border rounded-lg"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="relative mb-3">
                <FaMobileAlt className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full p-2 pl-10 border rounded-lg"
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                />
              </div>
              <div className="relative mb-3">
                <FaHome className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Village Name"
                  className="w-full p-2 pl-10 border rounded-lg"
                  required
                  value={formData.village}
                  onChange={(e) => setFormData({...formData, village: e.target.value})}
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-full w-full hover:bg-green-700 transition-colors"
              >
                Submit ✨
              </button>
            </form>
          </div>
        );

      case 3:
        return (
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Choose Payment Method 💰</h3>
            <div className="space-y-3">
              <button
                onClick={() => handlePaymentMethod('online')}
                className="w-full bg-green-600 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
              >
                <FaQrcode className="text-xl" />
                Pay Online 📱
              </button>
              <button
                onClick={() => handlePaymentMethod('offline')}
                className="w-full bg-green-600 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
              >
                <FaMoneyBill className="text-xl" />
                Pay Offline 🤝
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Scan QR Code to Pay 📱</h3>
            <div className="border-4 border-green-600 rounded-lg p-2 mb-4">
              <img src="https://res.cloudinary.com/dwiq4s5ut/image/upload/v1734702974/PHDY_QR_CODE_v24pp4.png" alt="Payment QR Code" className="mx-auto" />
            </div>
            <button
              onClick={handlePaymentComplete}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
            >
              I've Completed the Payment ✅
            </button>
          </div>
        );

      case 5:
        return (
          <div className="text-center">
            <div className="text-5xl mb-4">🙏</div>
            <h3 className="text-xl font-bold mb-4">Thank You!</h3>
            <p className="mb-4">We've received your response and will contact you shortly regarding offline payment. ✨</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
            >
              Close
            </button>
          </div>
        );

      case 6:
        return (
          <div className="text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-bold mb-4">Thank You for Your Support! 🙏</h3>
            <p className="mb-4">"Your contribution will help build a better future for our village." ✨</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
            >
              Close ✨
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full shadow-2xl"
          >
            <div className="relative">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
              >
                <FaTimes />
              </button>
              {renderStep()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

};

export default FundRaisePopup;