import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Instagram } from 'lucide-react'

const stripePromise = loadStripe('your_stripe_publishable_key')

interface Model {
  name: string
  photo: string
  instagram: string
}

interface Location {
  name: string
  description: string
  photos: string[]
}

interface Workshop {
  id: number
  title: string
  mainPhoto: string
  date: string
  description: string
  price: number
  schedule: string[]
  models: Model[]
  locations: Location[]
}

const PaymentForm = ({ workshop, onPaymentSuccess }: { workshop: Workshop; onPaymentSuccess: (formData: any) => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvc: '',
  })
  const [error, setError] = useState<string | null>(null)
  const [processing, setProcessing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)
    setError(null)

    try {
      // Simulate a successful payment
      setTimeout(() => {
        setProcessing(false)
        onPaymentSuccess(formData)
      }, 2000)
    } catch (err) {
      setError('An error occurred while processing your payment. Please try again.')
      setProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block mb-1">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="cardNumber" className="block mb-1">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label htmlFor="expMonth" className="block mb-1">Expiration Month</label>
          <input
            type="text"
            id="expMonth"
            name="expMonth"
            value={formData.expMonth}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="expYear" className="block mb-1">Expiration Year</label>
          <input
            type="text"
            id="expYear"
            name="expYear"
            value={formData.expYear}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      </div>
      <div>
        <label htmlFor="cvc" className="block mb-1">CVC</label>
        <input
          type="text"
          id="cvc"
          name="cvc"
          value={formData.cvc}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={processing}
        className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
      >
        {processing ? 'Processing...' : 'Sign Up and Pay'}
      </button>
    </form>
  )
}

const WorkshopDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [workshop, setWorkshop] = useState<Workshop | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Mock API call to fetch workshop details
    const fetchWorkshop = async () => {
      // In a real application, you would fetch this data from an API
      const mockWorkshop: Workshop = {
        id: parseInt(id || '0'),
        title: 'Mastering Portrait Lighting',
        mainPhoto: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        date: 'June 15-17, 2024',
        description: 'Join us for an intensive 3-day workshop on mastering portrait lighting techniques. Learn from industry professionals and work with experienced models in stunning locations.',
        price: 999,
        schedule: [
          'Day 1: Introduction to lighting techniques and equipment',
          'Day 2: On-location shoots with natural and artificial light',
          'Day 3: Advanced lighting setups and post-processing techniques'
        ],
        models: [
          { name: 'Emma Johnson', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', instagram: 'emma_j_model' },
          { name: 'Alex Chen', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', instagram: 'alexchenphoto' },
        ],
        locations: [
          {
            name: 'Urban Loft Studio',
            description: 'A spacious, industrial-style loft with large windows, perfect for mastering natural light techniques.',
            photos: [
              'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
              'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            ]
          },
          {
            name: 'Sunset Beach',
            description: 'A picturesque beach location for golden hour shoots and challenging lighting conditions.',
            photos: [
              'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
              'https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            ]
          },
        ]
      }
      setWorkshop(mockWorkshop)
    }

    fetchWorkshop()
  }, [id])

  const handlePaymentSuccess = (formData: any) => {
    navigate('/payment-success', { state: { workshop, formData } })
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  if (!workshop) {
    return <div className="text-center py-16">Loading...</div>
  }

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <motion.img
          src={workshop.mainPhoto}
          alt={workshop.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {workshop.title}
        </motion.h1>
        <motion.div
          className="bg-white rounded-lg shadow-md p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl mb-4">Date: {workshop.date}</p>
          <p className="text-gray-700 mb-6">{workshop.description}</p>
          <p className="text-2xl font-bold mb-8">Price: ${workshop.price}</p>
          
          <h2 className="text-2xl font-semibold mb-4">Workshop Schedule</h2>
          <ul className="list-disc list-inside mb-8">
            {workshop.schedule.map((day, index) => (
              <li key={index} className="mb-2">{day}</li>
            ))}
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4">Featured Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {workshop.models.map((model, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img src={model.photo} alt={model.name} className="w-24 h-24 rounded-full object-cover" />
                <div>
                  <h3 className="text-xl font-semibold">{model.name}</h3>
                  <a href={`https://instagram.com/${model.instagram}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <Instagram size={20} className="mr-1" /> @{model.instagram}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Workshop Locations</h2>
          {workshop.locations.map((location, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
              <p className="text-gray-700 mb-4">{location.description}</p>
              <Slider {...sliderSettings}>
                {location.photos.map((photo, photoIndex) => (
                  <div key={photoIndex}>
                    <img src={photo} alt={`${location.name} - Photo ${photoIndex + 1}`} className="w-full h-64 object-cover rounded-lg" />
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </motion.div>
        
        <motion.div
          className="bg-white rounded-lg shadow-md p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Sign Up for This Workshop</h2>
          <PaymentForm workshop={workshop} onPaymentSuccess={handlePaymentSuccess} />
        </motion.div>
      </div>
    </div>
  )
}

export default WorkshopDetails