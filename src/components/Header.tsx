import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Camera, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/workshops', label: 'Workshops' },
  ]

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-2 rounded-full"
          >
            <Camera size={24} className="text-gray-900" />
          </motion.div>
          <span className="text-2xl font-bold text-white">
            Jane Doe
          </span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`hover:text-indigo-400 transition-colors duration-300 ${
                    location.pathname === item.path ? 'text-indigo-400' : ''
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800 py-4"
        >
          <ul className="flex flex-col items-center space-y-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`hover:text-indigo-400 transition-colors duration-300 ${
                    location.pathname === item.path ? 'text-indigo-400' : ''
                  }`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  )
}

export default Header