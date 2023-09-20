// pages/index.js
import Slider from './Slider'

const slides = [
  {
    image: '/flag.jpeg', // Replace with your image path
    text: 'Slide 1 Text',
  },
  {
    image: '/file.jpeg', // Replace with your image path
    text: 'Slide 2 Text',
  },
  {
    image: '/shopoth.jpeg', // Replace with your image path
    text: 'Slide 3 Text',
  },
]

export default function Slide() {
  return (
    <div className="container mx-auto p-4">
      <Slider slides={slides} />
    </div>
  )
}
