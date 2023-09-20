// components/Slider.js
'use client'
import { useState } from 'react'

const Slider = ({ slides }:any) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden relative h-64">
        <div className="flex">
          {slides.map((slide:any, index:any) => (
            <div
              key={index}
              className={`transform transition-transform duration-300 ease-in-out ${
                index === currentSlide ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-64" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                {slide.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
        <button className="bg-gray-800 text-white rounded-full p-2" onClick={prevSlide}>
          &lt;
        </button>
      </div>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
        <button className="bg-gray-800 text-white rounded-full p-2" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  )
}

export default Slider
