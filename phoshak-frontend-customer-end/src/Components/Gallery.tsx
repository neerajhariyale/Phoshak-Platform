
import React from 'react';
import CircularGallery from '../UI/GalleryUi';

const Gallery: React.FC = () => {
  return (
    <div className="bg-[#FFF9BD] relative pt-2 pb-16">
     
      <div className="absolute top-0 left-0 w-full h-24 -translate-y-full ">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 C480,0 960,150 1440,50 V100 H0 Z"
            fill="#FFF9BD"
          />
        </svg>
      </div>

      {/* Content from the user's request */}
      <h1 className="flex justify-center items-center text-4xl font-semibold text-gray-800">
        Our Gallery
      </h1>
      
      {/* Container for the circular gallery, converted from inline styles to Tailwind CSS */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
  <CircularGallery
    bend={1}
    textColor="#black"
    borderRadius={0.09}
    scrollEase={0.01}
  />
</div>

    </div>
  );
};

export default Gallery;
