import pic from "../assets/image/twc4.jpg";  
import burial from "../assets/image/burial.jpg";
import birthday from "../assets/image/birthday.jpg";
import wedding from "../assets/image/twc13.jpg";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaBirthdayCake, FaHeart, FaHome, FaBaby, FaCross, FaCrown } from "react-icons/fa";

const Social = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const eventItems = [
    {
      title: "Weddings",
      icon: <FaHeart className="text-orange-600 mr-2" />,
      content: "Experience the magic of love with our flawlessly coordinated wedding services — timeless elegance, your way.",
      image: wedding,
      effect: "weddingSparkle",
    },
    {
      title: "Birthdays",
      icon: <FaBirthdayCake className="text-orange-600 mr-2" />,
      content: "Celebrate life’s moments with unforgettable birthday parties full of elegance, warmth, and joyful ambiance.",
      image: birthday,
      effect: "birthdayConfetti",
    },
    {
      title: "House Warmings",
      icon: <FaHome className="text-orange-600 mr-2" />,
      content: "Welcome to new beginnings! We provide classy and comfortable arrangements for a memorable housewarming celebration.",
      image: pic,
      effect: "softGlow",
    },
    {
      title: "Naming Ceremonies",
      icon: <FaBaby className="text-orange-600 mr-2" />,
      content: "Intimate and graceful — our naming ceremony services bring dignity and joy to this beautiful occasion.",
      image: pic,
      effect: "softGlow",
    },
    {
      title: "Funeral Services",
      icon: <FaCross className="text-orange-600 mr-2" />,
      content: "A respectful and compassionate farewell, managed with grace, cultural understanding, and solemn dignity.",
      image: burial,
      effect: "softGlow",
    },
    {
      title: "Cultural Events",
      icon: <FaCrown className="text-orange-600 mr-2" />,
      content: "Celebrate tradition with elegance — we create culturally rich events with ceremonial precision and flair.",
      image: pic,
      effect: "softGlow",
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eventItems.length);
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
  }, [eventItems.length, isPaused]);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
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
    <section className="w-full font-serif bg-white relative overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute top-10 left-4 animate-float z-0">
        <FaHeart className="text-pink-400 text-3xl drop-shadow-lg backdrop-blur-md bg-white/20 p-2 rounded-full hover:scale-110 transition duration-300" />
      </div>
      <div className="absolute top-20 right-4 animate-float2 z-0">
        <FaCrown className="text-yellow-400 text-3xl drop-shadow-lg backdrop-blur-md bg-white/20 p-2 rounded-full hover:scale-110 transition duration-300" />
      </div>

      {/* Header */}
      <div className="py-12 px-4 sm:px-6 lg:px-20 text-center z-10 relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-4">
          Elegant Social Gatherings
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          TWC ensures your events reflect the taste, tradition, and sophistication you deserve. Curated with poise and precision — our social events reflect timeless charm and refined celebration.
        </p>
      </div>

      {/* Event Content */}
      <motion.div
        ref={sectionRef}
        key={`event-${currentIndex}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center justify-center bg-orange-50 border border-orange-200 rounded-xl shadow-lg p-6 sm:p-8 md:p-12 lg:mx-20 gap-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="w-full lg:w-1/3 text-center px-4 sm:px-10 py-8 space-y-4">
          <div className="text-2xl md:text-3xl text-orange-600 flex justify-center items-center">
            {currentItem.icon}
            <span className="ml-2 font-bold">{currentItem.title}</span>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {currentItem.content}
          </p>
        </div>
        <div className="relative w-full lg:w-1/2 overflow-hidden group rounded-xl shadow-md h-80 sm:h-[30rem] md:h-[33rem]">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
        </div>
      </motion.div>

      {/* Shimmer Divider */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-shimmer mt-16"></div>
    </section>
  );
};

export default Social;