// components/Gallery.js
import { useState } from 'react';

const Gallery = ({ images }:any) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image:any) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
      {images.map((image:any, index:any) => (
        <div
          key={index}
          onClick={() => handleImageClick(image)}
          className="cursor-pointer"
        >
          <img
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="w-96 h-96 rounded-lg"
            
          />
        </div>
      ))}

      {selectedImage && (
        <div
          onClick={handleCloseModal}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
        >
          <div className="max-w-lg p-4 bg-white rounded-lg shadow-lg">
            <img
              src={selectedImage}
              alt="Selected Image"
              className=""
               
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
