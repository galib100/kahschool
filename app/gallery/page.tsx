// pages/index.js
'use client'
import Gallery from "@/components/Gallery";

const images = [
  '/flag.jpeg', // Replace with your image URLs
  '/file.jpeg',
  '/cake.jpeg',,
  '/crestGifted.jpeg',
  '/shopoth.jpeg'
];

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className=" text-3xl font-semibold mb-4">Image Gallery</h1>
      <Gallery images={images} />
    
      {/* Other content for your gallery website */}
    </div>
  );
}
