// Inside your Birthday.jsx or BirthdayPackages.jsx

import React, { useState } from "react";
import { FaVolumeMute, FaVolumeUp, FaPlay, FaPause } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import basicBirthdayVideo from "../assets/image/twc basic.mp4";
import partialBirthdayVideo from "../assets/image/Akinbola+Sylvia vid.mp4";
import fullBirthdayVideo from "../assets/image/TWC vid.mp4";

const addOns = [
  "Custom Cake Design",
  "Photo Booth Setup",
  "Live Entertainment",
  "Balloon & Decor Package",
  "Themed Costume Characters",
  "Cocktail & Mocktail Bar",
  "Event Photography & Videography",
  "Personalized Party Favors",
];

const birthdayPackages = [
  {
    id: "basic",
    title: "Simple Joy",
    video: basicBirthdayVideo,
    summary:
      "Ideal for minimal birthday planning support — perfect for adults or kids with their main plans in place.",
    features: [
      {
        title: "Event Consultation",
        description:
          "We’ll help you review your birthday plans and offer final refinements to enhance your celebration.",
      },
      {
        title: "Vendor Coordination",
        description:
          "We confirm your vendors’ readiness for a smooth party day experience.",
      },
      {
        title: "Day-of Logistics",
        description:
          "Our team ensures seamless flow throughout your event, start to finish.",
      },
    ],
  },
  {
    id: "partial",
    title: "Lively Bash",
    video: partialBirthdayVideo,
    summary:
      "A balance between guidance and freedom – designed for adult milestones or fun-filled children's parties.",
    features: [
      {
        title: "Theme & Decor Planning",
        description:
          "We help you build a visual story around your chosen birthday theme – for kids or grown-ups.",
      },
      {
        title: "Guest List & Invites",
        description:
          "Get support with creative invites, tracking RSVPs, and managing guests.",
      },
      {
        title: "Partial Vendor Support",
        description:
          "We coordinate specific elements like catering, entertainment, or decoration.",
      },
    ],
  },
  {
    id: "full",
    title: "Ultimate Celebration",
    video: fullBirthdayVideo,
    summary:
      "A full-service package that crafts extraordinary birthdays for all ages — magical kids parties to lavish adult events.",
    features: [
      {
        title: "Venue Scouting & Styling",
        description:
          "We find the perfect place and transform it with customized design and ambiance.",
      },
      {
        title: "Complete Vendor Management",
        description:
          "From clowns to DJs, balloon artists to bartenders — we manage it all.",
      },
      {
        title: "Program Coordination",
        description:
          "We craft a smooth event timeline to keep the energy up and moments memorable.",
      },
      {
        title: "Surprise Element Execution",
        description:
          "Whether it’s a birthday flash mob or surprise appearance, we handle the magic.",
      },
    ],
  },
];

const Birthday = () => {
  const [isMuted, setIsMuted] = useState({});
  const [isPaused, setIsPaused] = useState({});
  const [expandedItems, setExpandedItems] = useState({});
  const [selectedAddOns, setSelectedAddOns] = useState({});

  const toggleMute = (id) => {
    const video = document.getElementById(`video-${id}`);
    if (video) video.muted = !video.muted;
  };

  const togglePlayPause = (id) => {
    const video = document.getElementById(`video-${id}`);
    if (video) video.paused ? video.play() : video.pause();
  };

  const handleMuteClick = (id) => {
    toggleMute(id);
    setIsMuted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePlayPauseClick = (id) => {
    togglePlayPause(id);
    setIsPaused((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAccordion = (pkgId, index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [pkgId]: {
        ...prev[pkgId],
        [index]: !prev[pkgId]?.[index],
      },
    }));
  };

  const handleAddonChange = (pkgId, addon) => {
    setSelectedAddOns((prev) => {
      const current = prev[pkgId] || [];
      return {
        ...prev,
        [pkgId]: current.includes(addon)
          ? current.filter((item) => item !== addon)
          : [...current, addon],
      };
    });
  };

  return (
    <div className="bg-gradient-to-tr from-yellow-50 via-orange-100 to-blue-50 px-4 sm:px-10 lg:px-20 py-14">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-orange-700 drop-shadow-xl">
          Birthday Packages
        </h1>
        <p className="text-gray-700 max-w-xl mx-auto mt-2 mb-6">
          Our birthday experiences are crafted for both children and adults. Whether it’s a playful party or a glamorous gathering, we’ve got you covered.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-orange-500 text-white px-6 py-3 rounded-full shadow-xl hover:bg-white hover:text-orange-700 hover:scale-110 transition-all duration-300 ease-in-out"
        >
          Book Now
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {birthdayPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-orange-300 transition-all duration-300 flex flex-col items-center"
          >
            <div className="relative w-full mb-4 rounded-xl overflow-hidden">
              <video
                id={`video-${pkg.id}`}
                className="w-full rounded-xl"
                autoPlay
                muted
              >
                <source src={pkg.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={() => handleMuteClick(pkg.id)}
                  className="bg-pink-500 text-white rounded-full p-2 hover:bg-pink-600 shadow-lg"
                >
                  {isMuted[pkg.id] ? <FaVolumeUp /> : <FaVolumeMute />}
                </button>
                <button
                  onClick={() => handlePlayPauseClick(pkg.id)}
                  className="bg-pink-500 text-white rounded-full p-2 hover:bg-pink-600 shadow-lg"
                >
                  {isPaused[pkg.id] ? <FaPlay /> : <FaPause />}
                </button>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center text-orange-800 mb-2 drop-shadow">{pkg.title}</h2>
            <p className="text-center text-gray-700 mb-4 italic">{pkg.summary}</p>

            <div className="w-full divide-y divide-gray-200 mb-4">
              {pkg.features.map((item, index) => (
                <div key={index} className="py-3">
                  <button
                    onClick={() => toggleAccordion(pkg.id, index)}
                    className="w-full flex justify-between items-center text-left text-lg font-medium text-orange-700 hover:text-orange-900"
                  >
                    {item.title}
                    {expandedItems[pkg.id]?.[index] ? <FiMinus /> : <FiPlus />}
                  </button>
                  <AnimatePresence>
                    {expandedItems[pkg.id]?.[index] && (
                      <motion.p
                        className="text-gray-600 mt-2 text-sm pl-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="w-full mt-4">
              <h3 className="text-lg font-semibold text-orange-700 mb-2">
                Optional Add-Ons:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {addOns.map((addon) => (
                  <label key={addon} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedAddOns[pkg.id]?.includes(addon) || false}
                      onChange={() => handleAddonChange(pkg.id, addon)}
                      className="accent-orange-500"
                    />
                    <span>{addon}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Birthday;
