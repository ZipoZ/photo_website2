import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Home: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  const images = [
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  ]

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="h-screen">
        <Slider {...settings} className="h-full">
          {images.map((image, index) => (
            <div key={index} className="h-full">
              <div 
                className="h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="h-full flex items-center justify-center bg-black bg-opacity-30">
                  {/* You can add text overlay here if needed */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Welcome to Jane Doe Photography
        </h2>
        <p className="text-xl text-center max-w-2xl mx-auto text-gray-700">
          Capturing life's precious moments with artistry and passion. From intimate portraits to grand events, we bring your vision to life through the lens.
        </p>
      </div>
    </div>
  )
}

export default Home