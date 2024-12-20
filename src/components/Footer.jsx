
import React from 'react';
import { FiInstagram, FiMail, FiFacebook, FiYoutube } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            
            <h3 className="text-2xl font-bold mb-4 text-green-500 flex flex-row items-center pl-0 ml-0">
            <img className='max-w-[80px]' src='https://res.cloudinary.com/dwiq4s5ut/image/upload/v1734682346/PHDY_bizxek.png' alt='Logo'/>
            PHDY
            </h3>
            <p className="text-gray-400">
              Building a better future for Peddha Harivanam
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Our Work</a></li>
              <li><a href="/team" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Peddha Harivanam Village</li>
              <li>Kurnool District, Andhra Pradesh State PIN - 518308</li>
              <li>Phone: +91 1234567890</li>
              <li>Email: peddaharivanamdevelopmentyouth@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#https://www.facebook.com/share/hSPQw3reat6CEsX3/" className="text-gray-400 hover:text-white transition-colors">
                <FiFacebook className="w-6 h-6" />
              </a>
              <a href="#mailto:peddaharivanamdevelopmentyouth@gmail.com?subject=Joining%20the%20Group&body=I%20am%20interested%20to%20join%20your%20group" className="text-gray-400 hover:text-white transition-colors">
                <FiMail className="w-6 h-6" />
              </a>
              <a href="#https://www.instagram.com/peddaharivanamdevelopmentyouth/" className="text-gray-400 hover:text-white transition-colors">
                <FiInstagram className="w-6 h-6" />
              </a>
              <a href="# https://www.youtube.com/@peddaharivanam" className="text-gray-400 hover:text-white transition-colors">
                <FiYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PHDY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}