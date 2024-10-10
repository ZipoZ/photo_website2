import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-gray-800"
        >
          About Me
        </motion.h1>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Jane Doe" className="rounded-lg shadow-lg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2 md:pl-8"
          >
            <p className="text-lg mb-4 text-gray-700">
              Hi, I'm Jane Doe, a passionate portrait photographer with over 10 years of experience. I specialize in capturing the essence and personality of my subjects, creating timeless images that tell their unique stories.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              My journey in photography began when I received my first camera as a gift. Since then, I've honed my skills through countless shoots, workshops, and a deep love for the art of portraiture.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not behind the camera, you can find me exploring nature trails, experimenting with new recipes in the kitchen, or spending quality time with my family and our golden retriever, Max.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About