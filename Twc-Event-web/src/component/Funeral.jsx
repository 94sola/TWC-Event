import React, { useState } from "react";
import { FaVolumeMute, FaVolumeUp, FaPlay, FaPause } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import basicFuneralImage from "../assets/image/burial.jpg"; // Replace with your image
import partialFuneralImage from "../assets/image/funeral.jpg"; // Replace with your image
import fullFuneralVideo from "../assets/image/TWC vid.mp4";

const addOns = [
  "Memorial Service Setup",
  "Funeral Procession Coordination",
  "Customized Coffin Design",
  "Obituary Creation",
  "Video Tributes",
  "Catering & Refreshments",
  "Grief Counseling Support",
  "Floral Arrangements",
];

const funeralPackages = [
  {
    id: "basic",
    title: "Simple Memorial",
    image: basicFuneralImage, // Image instead of video
    summary:
      "A respectful and dignified option for those seeking a simple, yet meaningful memorial service.",
    features: [
      {
        title: "Funeral Consultation",
        description:
          "We’ll guide you through the planning process and help tailor a service that honors your loved one.",
      },
      {
        title: "Vendor Coordination",
        description:
          "We ensure seamless coordination of funeral services and vendors, allowing you to focus on your family.",
      },
      {
        title: "Day-of Logistics",
        description:
          "Our team ensures smooth transitions throughout the service, from arrival to departure.",
      },
    ],
  },
  {
    id: "partial",
    title: "Personalized Tribute",
    image: partialFuneralImage, // Image instead of video
    summary:
      "A thoughtful balance between personal touches and professional guidance — suitable for more customized memorial services.",
    features: [
      {
        title: "Themed Memorial Planning",
        description:
          "We help create a tribute that reflects the personality and life of your loved one, with customized décor and themes.",
      },
      {
        title: "Obituary & Invitation Support",
        description:
          "Our team assists with obituary writing and creating beautiful invitations for the service.",
      },
      {
        title: "Partial Vendor Support",
        description:
          "We manage specific elements like floral arrangements, catering, or media coordination.",
      },
    ],
  },
  {
    id: "full",
    title: "Complete Memorial Service",
    video: fullFuneralVideo, // Keep video for full package
    summary:
      "A comprehensive service designed to create a respectful, personalized, and unforgettable memorial experience.",
    features: [
      {
        title: "Venue Scouting & Styling",
        description:
          "We find the ideal location and enhance it with meaningful design elements that reflect the life of your loved one.",
      },
      {
        title: "Complete Vendor Management",
        description:
          "We coordinate every aspect of the service, from caskets to flowers, catering, and live tributes.",
      },
      {
        title: "Program Coordination",
        description:
          "We ensure the entire ceremony flows smoothly, maintaining reverence and respect throughout.",
      },
      {
        title: "Memorial Video Production",
        description:
          "We help create a touching video tribute to honor the life of your loved one.",
      },
    ],
  },
];

const Funeral = () => {
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
    <div className="bg-gradient-to-tr from-gray-50 via-gray-100 to-gray-200 px-4 sm:px-8 lg:px-16 py-14">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 drop-shadow-xl">
          Funeral Packages
        </h1>
        <p className="text-gray-700 max-w-xl mx-auto mt-2 mb-6 text-sm sm:text-base">
          Our funeral services are designed to help you honor and remember your loved ones with dignity and care, offering a range of thoughtful and respectful options.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-gray-800 text-white px-6 py-3 rounded-full shadow-xl hover:bg-white hover:text-gray-800 hover:scale-110 transition-all duration-300 ease-in-out"
        >
          Plan Now
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {funeralPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-lg transition-all duration-300 flex flex-col items-center"
          >
            <div className="relative w-full mb-4 rounded-xl overflow-hidden">
              {pkg.image ? (
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full rounded-xl"
                />
              ) : (
                <video
                  id={`video-${pkg.id}`}
                  className="w-full rounded-xl"
                  autoPlay
                  muted
                >
                  <source src={pkg.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {pkg.video && (
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button
                    onClick={() => handleMuteClick(pkg.id)}
                    className="bg-gray-600 text-white rounded-full p-2 hover:bg-gray-700 shadow-lg"
                  >
                    {isMuted[pkg.id] ? <FaVolumeUp /> : <FaVolumeMute />}
                  </button>
                  <button
                    onClick={() => handlePlayPauseClick(pkg.id)}
                    className="bg-gray-600 text-white rounded-full p-2 hover:bg-gray-700 shadow-lg"
                  >
                    {isPaused[pkg.id] ? <FaPlay /> : <FaPause />}
                  </button>
                </div>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-2 drop-shadow">
              {pkg.title}
            </h2>
            <p className="text-center text-gray-700 mb-4 italic text-sm sm:text-base">
              {pkg.summary}
            </p>

            <div className="w-full divide-y divide-gray-200 mb-4">
              {pkg.features.map((item, index) => (
                <div key={index} className="py-3">
                  <button
                    onClick={() => toggleAccordion(pkg.id, index)}
                    className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-700 hover:text-gray-900"
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
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Optional Add-Ons:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {addOns.map((addon) => (
                  <label key={addon} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedAddOns[pkg.id]?.includes(addon) || false}
                      onChange={() => handleAddonChange(pkg.id, addon)}
                      className="accent-gray-500"
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

export default Funeral;
