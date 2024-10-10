import React from 'react'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Jane Doe Photography. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><Instagram size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Facebook size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Twitter size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer