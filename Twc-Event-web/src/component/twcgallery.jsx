import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cre from "../assets/image/twc14.jpg";
import pre from "../assets/image/A (192).jpg";
import pri from "../assets/image/twc.jpg";
import nur from "../assets/image/twc10.jpg";
import crea from "../assets/image/twc7.jpg";
import nurs from "../assets/image/twc9.jpg";
import afters from "../assets/image/twc11.jpg";
import prise from "../assets/image/twc12.jpg";
import uni from "../assets/image/twc13.jpg";
import twc2 from "../assets/image/twc8.jpg";
import pics from "../assets/image/twc4.jpg";
import twc from "../assets/image/A (20).jpg";
import pic from "../assets/image/Modupe & Abimbola Wedding-2743.jpg";

const images = [
  { src: crea },
  { src: nurs },
  { src: afters },
  { src: prise },
  { src: cre },
  { src: pri },
  { src: nur },
  { src: pre },
  { src: pics },
  { src: pic },
  { src: uni },
  { src: twc },
  { src: twc2 },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-orange-50 py-16 px-6 sm:px-10 lg:px-16 flex flex-col items-center">
      {/* Section Header */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mb-12 relative inline-block"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Media
      </motion.h1>

      {/* Sliding Image */}
      <div className="relative w-full max-w-full sm:max-w-md md:max-w-xl lg:max-w-4xl overflow-hidden">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={`Gallery Image ${currentIndex}`}
          className="w-full h-[300px] sm:h-[400px] md:h-[510px] object-cover rounded-lg shadow-xl cursor-pointer"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          onClick={() => setSelectedImage(images[currentIndex].src)}
        />
      </div>

      {/* Carousel Indicators */}
      <div className="flex space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-cyan-400' : 'bg-orange-400'} transition-all duration-300`}
          ></button>
        ))}
      </div>

      {/* Manual Navigation Buttons */}
      <div className="flex justify-between w-full mt-6">
        <button
          onClick={goToPrevious}
          className="bg-cyan-500 text-white p-3 rounded-full hover:bg-cyan-400 transition-all duration-300"
        >
          &#8592; Previous
        </button>
        <button
          onClick={goToNext}
          className="bg-cyan-500 text-white p-3 rounded-full hover:bg-cyan-700 transition-all duration-300"
        >
          Next 
        </button>
      </div>

      {/* Fullscreen Image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Fullscreen"
              className="w-auto max-w-full max-h-full object-contain"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
