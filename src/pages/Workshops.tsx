import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface Workshop {
  id: number
  title: string
  date: string
  description: string
  image: string
}

const Workshops: React.FC = () => {
  const [workshops] = useState<Workshop[]>([
    {
      id: 1,
      title: 'Mastering Portrait Lighting',
      date: 'June 15, 2024',
      description: 'Learn the art of portrait lighting in this hands-on workshop.',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: 'Outdoor Portrait Techniques',
      date: 'July 22, 2024',
      description: 'Discover tips and tricks for stunning outdoor portraits.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      title: 'Post-Processing for Portraits',
      date: 'August 10, 2024',
      description: 'Enhance your portrait editing skills with professional techniques.',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
  ])

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Upcoming Workshops</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={workshop.image} alt={workshop.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{workshop.title}</h3>
                <p className="text-gray-600 mb-4">{workshop.date}</p>
                <p className="text-gray-700 mb-4">{workshop.description}</p>
                <Link to={`/workshops/${workshop.id}`} className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Workshops