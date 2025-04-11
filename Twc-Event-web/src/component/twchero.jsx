import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import pic from "../assets/image/twc.jpg";
import picture from "../assets/image/twc12.jpg";
import landing from "../assets/image/twc10.jpg";

// Slides array
const slides = [
  {
    img: pic,
    heading: (
      <>
        Creating <br /> Unforgettable <br /> Moments
      </>
    ),
    paragraph: "From the perfect wedding to timeless memories.",
    bgColor: "bg-orange-500",
  },
  {
    img: picture,
    heading: (
      <>
        Honoring <br /> Life with <br /> Grace
      </>
    ),
    paragraph: "Burials planned with dignity and heartfelt care.",
    bgColor: "bg-cyan-500",
  },
  {
    img: landing,
    heading: (
      <>
        Making <br /> Corporate <br /> Events Shine
      </>
    ),
    paragraph: "Professional. Polished. Perfectly executed.",
    bgColor: "bg-rose-700",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[85vh] overflow-hidden font-sans">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.img}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`slide-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute z-10 flex flex-col items-center justify-center h-full w-full px-4 md:px-10 text-center"
        >
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg">
            {slides[current].heading}
          </h1>

          <Link to="/contact" className="mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-orange-500 text-white font-semibold text-lg rounded-full shadow-xl hover:bg-orange-700 transition-all"
            >
              Plan Your Event
            </motion.button>
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Slide Paragraph – left-aligned and positioned near bottom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`para-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className={`absolute bottom-20 left-6 z-10 px-4 py-2 text-sm md:text-base text-white rounded-md shadow-lg max-w-sm text-left ${slides[current].bgColor}`}
        >
          {slides[current].paragraph}
        </motion.div>
      </AnimatePresence>

      {/* Quote Bottom Right */}
      <div className="absolute bottom-4 right-6 font-sans text-right z-10 text-white drop-shadow-md">
        <p className="text-sm md:text-base italic font-normal">
          “Crafting moments that echo through time.”
        </p>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            } transition-all duration-300`}
          />
        ))}
      </div>

      {/* Carousel Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
