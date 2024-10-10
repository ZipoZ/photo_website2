import React from 'react'
import { Camera, Users, Heart, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

const Services: React.FC = () => {
  const services = [
    { icon: <Camera size={48} />, title: 'Portrait Sessions', description: 'Capture your unique personality in a customized portrait session.' },
    { icon: <Users size={48} />, title: 'Family Portraits', description: 'Preserve precious family moments with beautiful group portraits.' },
    { icon: <Heart size={48} />, title: 'Engagement Photos', description: 'Celebrate your love story with romantic engagement photography.' },
    { icon: <Briefcase size={48} />, title: 'Corporate Headshots', description: 'Make a strong professional impression with polished headshots.' },
  ]

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-gray-800"
        >
          Our Services
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center gradient-bg"
            >
              <div className="text-indigo-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services