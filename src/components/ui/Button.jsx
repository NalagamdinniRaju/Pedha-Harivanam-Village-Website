// // import React from 'react';
// // import { motion } from 'framer-motion';

// // export default function Button({ children, variant = 'primary', ...props }) {
// //   const baseStyles = "px-8 py-3 rounded-full text-lg font-semibold transition-colors";
// //   const variants = {
// //     primary: "bg-purple-600 text-white hover:bg-purple-700",
// //     secondary: "border border-white text-white hover:bg-white/10"
// //   };

// //   return (
// //     <motion.button
// //       whileHover={{ scale: 1.05 }}
// //       whileTap={{ scale: 0.95 }}
// //       className={`${baseStyles} ${variants[variant]}`}
// //       {...props}
// //     >
// //       {children}
// //     </motion.button>
// //   );
// // }
// import React from 'react';
// import { motion } from 'framer-motion';

// export default function Button({ children, variant = 'primary', ...props }) {
//   const baseStyles = "px-10 py-4 rounded-3xl text-lg font-semibold transition-colors"; // Increased width, height, and border radius
//   const variants = {
//     primary: "bg-purple-600 text-white hover:bg-purple-700",
//     secondary: "border border-white text-white hover:bg-white/10"
//   };

//   return (
//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className={`${baseStyles} ${variants[variant]}`}
//       {...props}
//     >
//       {children}
//     </motion.button>
//   );
// }

import React from 'react';

export default function Button({ children, className, variant = 'primary', ...props }) {
  return (
    <button
      className={`${className} px-12 py-4 rounded-3xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95`}
      {...props}
    >
      {children}
    </button>
  );
}
