import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTree, FaGraduationCap, FaHandHoldingHeart } from 'react-icons/fa';

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <FaTree className="w-12 h-12" />,
      title: "Environmental Projects",
      description: "Leading initiatives for a greener village through tree plantation and waste management programs.",
      achievements: [
        "1000+ Trees Planted",
        "Weekly Clean-up Drives",
        "Waste Segregation Program",
        "Water Conservation Projects"
      ]
    },
    {
      icon: <FaGraduationCap className="w-12 h-12" />,
      title: "Education Support",
      description: "Providing educational assistance and skill development programs for village youth.",
      achievements: [
        "After-school Tutoring",
        "Scholarship Programs",
        "Digital Literacy Classes",
        "Career Guidance"
      ]
    },
    {
      icon: <FaHandHoldingHeart className="w-12 h-12" />,
      title: "Community Welfare",
      description: "Organizing health camps and social welfare activities for village residents.",
      achievements: [
        "Monthly Health Camps",
        "Senior Citizen Support",
        "Women Empowerment Programs",
        "Sports Events"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-green-600 dark:text-green-500">
            Our Work
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our initiatives and their impact on the community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-colors"
            >
              <div className="text-green-500 mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}