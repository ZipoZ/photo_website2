import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const PaymentSuccess: React.FC = () => {
  const location = useLocation()
  const { workshop, formData } = location.state || {}

  if (!workshop || !formData) {
    return <div>Invalid payment data. Please try again.</div>
  }

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-6">
            <CheckCircle size={48} className="text-green-500 mr-4" />
            <h1 className="text-3xl font-bold text-gray-800">Payment Successful!</h1>
          </div>
          <p className="text-xl text-gray-700 mb-8 text-center">
            Thank you for signing up for the {workshop.title} workshop.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Workshop Details</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Date: {workshop.date}</li>
            <li>Price: ${workshop.price}</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Your Information</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Name: {formData.name}</li>
            <li>Email: {formData.email}</li>
            <li>Phone: {formData.phone}</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Private Workshop Information</h2>
          <p className="text-gray-700 mb-4">
            Thank you for joining our workshop! Here's some additional information for participants:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Meeting Point: Main entrance of Urban Loft Studio at 9:00 AM on the first day</li>
            <li>What to Bring: Camera, lenses, tripod, and a laptop for post-processing sessions</li>
            <li>Lunch and refreshments will be provided</li>
            <li>A detailed schedule will be emailed to you 1 week before the workshop</li>
          </ul>

          <p className="text-gray-700 mb-6">
            If you have any questions or need to make changes to your registration, please contact us at support@janedoephotography.com or call (555) 123-4567.
          </p>

          <div className="text-center">
            <Link
              to="/"
              className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
            >
              Return to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PaymentSuccess