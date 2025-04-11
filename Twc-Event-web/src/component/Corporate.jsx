import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import pic from "../assets/image/twc8.jpg";
import award from "../assets/image/corporatre.jpg";
import corp from "../assets/image/A (216).jpg";
import corpa from "../assets/image/twc-a.jpg";
import awar from "../assets/image/twc9.jpg";
import { FaBriefcase, FaChartLine, FaHandshake } from "react-icons/fa";

const Corporate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const eventItems = [
    {
      title: "End of Year Party",
      icon: <FaBriefcase className="text-orange-600" />,
      content: "Unite teams, inspire collaboration, and elevate your business through flawless corporate event coordination.",
      image: corpa,
    },
    {
      title: "Workshops & Conferences",
      icon: <FaChartLine className="text-orange-600" />,
      content: "Deliver transformative learning experiences through meticulously planned workshops and conferences.",
      image: awar,
    },
    {
      title: "Product Launching",
      icon: <FaHandshake className="text-orange-600" />,
      content: "Facilitate connections that matter with our carefully curated networking events for professionals.",
      image: pic,
    },
    {
      title: "Networking Events",
      icon: <FaHandshake className="text-orange-600" />,
      content: "Facilitate connections that matter with our carefully curated networking events for professionals.",
      image: award,
    },
    {
      title: "Award Ceremony",
      icon: <FaHandshake className="text-orange-600" />,
      content: "Celebrate achievements with grace and glamour through our professional award ceremonies.",
      image: corp,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % eventItems.length);
      setProgress(0);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 2;
        clearInterval(progressInterval);
        return prev;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [eventItems.length]);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start({ opacity: 1, y: 0 });
      },
      { threshold: 0.3 }
    );
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, [controls]);

  const currentItem = eventItems[currentIndex];

  return (
    <section className="w-full font-serif bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Floating Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute w-16 h-16 bg-orange-200 rounded-full opacity-20 top-10 left-10 animate-float-slow" />
        <div className="absolute w-20 h-20 bg-yellow-300 rounded-full opacity-10 bottom-12 right-10 animate-float-slower" />
        <div className="absolute w-10 h-10 bg-pink-300 rounded-full opacity-20 top-1/2 left-1/2 animate-float" />
      </div>

      {/* Icons */}
      <div className="absolute top-6 left-6 animate-float z-0">
        <FaBriefcase className="text-gray-400 text-2xl drop-shadow-md bg-white/20 p-2 rounded-full" />
      </div>
      <div className="absolute bottom-10 right-6 animate-float2 z-0">
        <FaChartLine className="text-gray-300 text-2xl drop-shadow-md bg-white/20 p-2 rounded-full" />
      </div>

      {/* Header */}
      <div className="py-10 px-4 md:px-20 text-center relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-orange-600 mb-3">
          Corporate Events
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          Elevating professional events with precision and style, ensuring every detail exceeds expectations.
        </p>
      </div>

      {/* Carousel Layout */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center bg-orange-50 border border-orange-200 rounded-xl shadow-lg p-6 sm:p-8 md:mx-20 mx-4 gap-6 md:gap-10 z-10"
      >
        {/* Image */}
        <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg group">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-60 sm:h-[35vh] md:h-[45vh] object-cover group-hover:scale-105 transition duration-700"
          />
        </div>

        {/* Text */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="w-full md:w-1/2 text-center md:text-left bg-orange-50 rounded-xl px-4 sm:px-6 md:px-14 py-8 space-y-3"
        >
          <div className="flex items-center justify-center md:justify-start text-xl sm:text-2xl font-bold text-orange-700 space-x-3">
            <motion.span
              whileHover={{ rotate: 10, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {currentItem.icon}
            </motion.span>
            <h3>{currentItem.title}</h3>
          </div>
          <p className="text-gray-700 text-sm sm:text-base md:text-xl">{currentItem.content}</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pt-4"
          >
            <Link
              to="/contact"
              className="bg-orange-600 text-white text-sm sm:text-base py-2 px-5 rounded-full hover:bg-orange-700 transition shadow-md"
            >
              Book Your Event
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-200 mt-4">
        <div
          className="h-full bg-orange-500 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Shimmer Divider */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-shimmer mt-12" />
    </section>
  );
};

export default Corporate;
