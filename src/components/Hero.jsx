// import React from 'react';
// import { motion } from 'framer-motion';
// import Button from './ui/Button';

// export default function Hero() {
//   return (
//     <section id="home" className="min-h-screen relative flex items-center bg-black">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#6b21a8_10%,_transparent_50%)]" />
//       </div>
      
//       <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="max-w-2xl"
//         >
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
//             Excellence in Every Service
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 text-gray-300">
//             Professional computer services, creative graphic design solutions, and a premium internet cafe experience.
//           </p>
//           <div className="flex gap-4">
//             <Button className="bg-purple-600 text-white hover:bg-purple-700">
//               Explore Services
//             </Button>
//             <Button className="border border-white text-white hover:bg-white/10">
//               Learn More
//             </Button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center bg-gray-50 dark:bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#22c55e_10%,_transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 dark:text-white">
            Building a Better <span className="text-green-600">Tomorrow</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
            Join us in our mission to develop Peddha Harivanam village through youth empowerment and community service.
          </p>
          <div className="flex gap-4">
          <Button 
            onClick={() => window.location.href = 'https://wa.me/916300963789?text=I%20am%20interested%20to%20Join%20Your%20Group'} 
            className="bg-green-600 text-white hover:bg-green-700"
          >
            Join Us
          </Button>

            <Button className="border border-gray-800 dark:border-white text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black">
             <Link to="/about">Learn More</Link> 
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}