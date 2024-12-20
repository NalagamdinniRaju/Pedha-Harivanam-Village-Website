
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import OurTeamPage from './components/OurTeamPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import AboutPage from './components/AboutPage'
import OurWorkPage from './components/OurWorkPage'
import ContactPage from './components/ContactPage'
import FundRaisePopup from './components/FundRaisePopup';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-black">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Services />
                <Contact />
              </>
            } />
            <Route path="/team" element={<OurTeamPage />} />
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/services" element={<OurWorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
          <ChatBot />
          <FundRaisePopup />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;