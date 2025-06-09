import React, { useState } from "react";
import basicPackageVideo from "../assets/image/Akinbola+Sylvia vid.mp4";
import partialPackageVideo from "../assets/image/TWC vid.mp4";
import  fullPackageVideo from "../assets/image/SEUN AND BAMIKE 5 MIN.mp4";
import { FaVolumeMute, FaVolumeUp, FaPlay, FaPause } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const packages = [
  {
    id: "basic",
    title: "Elegant Essentials",
    video: basicPackageVideo,
    summary:
      "Perfect for those who need assistance with logistics, but have most of the planning done themselves.",
    features: [
      {
        title: "Pre-Wedding Consultation",
        description:
          "Meet with the couple to review their plans, offer feedback, and help finalize last-minute details.",
      },
      {
        title: "Vendor Confirmation",
        description:
          "We confirm all bookings and logistics with your vendors a week before the event.",
      },
      {
        title: "Problem-Solving & Troubleshooting",
        description:
          "Handle any unexpected issues so the clients doesn’t have to.",
      },
      {
        title: "On-the-Day Logistics Management",
        description:
          "Oversee setup, timing, and execution of the entire day: ceremony, reception, and anything in between.",
      },
      {
        title: "Day-of Coordination",
        description:
          "We’re on-site to direct the event, troubleshoot issues, and keep everything running smoothly.",
      },
    ],
  },
  {
    id: "partial",
    title: "Chic Harmony",
    video: partialPackageVideo,
    summary:
      "Designed for those who want assistance with some but not all aspects of their wedding.",
    features: [
      {
        title: "Vendor Recommendations & Negotiation",
        description:
          "We provide vetted vendors and help you negotiate contracts to fit your budget and style.",
      },
      {
        title: "Design Guidance",
        description:
          "Advice and input on your overall wedding theme, décor selection, and creative design.",
      },
      {
        title: "Budget Monitoring",
        description:
          "We keep an eye on spending and suggest ways to save without compromising on quality.",
      },
      {
        title: "Guest List Management & Invitations",
        description:
          "Help with invitation designs, tracking RSVPs, and managing the guest list.",
      },
      {
        title: "Partial Coordination",
        description:
          "We help coordinate specific wedding components like ceremony setup, catering, or entertainment.",
      },
      {
        title: "Day-of Support",
        description:
          "We provide limited on-site coordination to ensure your day runs smoothly.",
      },
    ],
  },
  {
    id: "full",
    title: "Grand Affair",
    video: fullPackageVideo,
    summary:
      "Comprehensive services to ensure every detail of your wedding is flawless.",
    features: [
      {
        title: "Initial Consultation",
        description:
          "Meet with the couple to discuss vision, style, budget, and priorities. We offer expert guidance right from the beginning.",
      },
      {
        title: "Venue Selection & Coordination",
        description:
          "We scout venues, accompany you on site visits, and handle all the communication to secure the best location.",
      },
      {
        title: "Design & Styling",
        description:
          "Theme development, color palette, floral design, lighting, and complete ambiance styling.",
      },
      {
        title: "Vendor Management",
        description:
          "Full coordination with caterers, photographers, decorators, MCs, DJs, makeup artists, and others.",
      },
      {
        title: "Timeline & Budget Tracking",
        description:
          "We manage your timeline and keep all expenses within your desired range.",
      },
      {
        title: "Guest List Management & Invitations",
        description:
          "Help with invitation designs, tracking RSVPs, and managing the guest list.",
      },
      {
        title: "Rehearsal & Day-of Coordination",
        description:
          "We oversee the wedding rehearsal and provide on-site support throughout the wedding day.",
      },
      {
        title: "Post-Wedding Support",
        description:
          "Ensure the return of rentals, thank-you cards, gift management, and follow-up with vendors.",
      },
      {
        title: "Honeymoon Arrangement",
        description:
          "We help you research, plan, and book your dream honeymoon based on your budget and desires.",
      },
    ],
  },
];


const Wedding = () => {
  const [isMuted, setIsMuted] = useState({});
  const [isPaused, setIsPaused] = useState({});
  const [expandedItems, setExpandedItems] = useState({});

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

  return (
    <div className="bg-gradient-to-tr from-cyan-100 via-white to-pink-100 px-4 sm:px-10 lg:px-10 py-14">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-cyan-700 drop-shadow-xl">Wedding Packages</h1>
        <a
          href="/contact"
          className="mt-6 inline-block bg-cyan-500 text-white px-6 py-3 rounded-full shadow-xl hover:bg-white hover:text-cyan-700 hover:scale-110 transition-all duration-300 ease-in-out"
        >
          Book Now
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-cyan-300 transition-all duration-300 flex flex-col items-center"
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
                  className="bg-cyan-500 text-white rounded-full p-2 hover:bg-cyan-600 shadow-lg"
                >
                  {isMuted[pkg.id] ? <FaVolumeUp /> : <FaVolumeMute />}
                </button>
                <button
                  onClick={() => handlePlayPauseClick(pkg.id)}
                  className="bg-cyan-500 text-white rounded-full p-2 hover:bg-cyan-600 shadow-lg"
                >
                  {isPaused[pkg.id] ? <FaPlay /> : <FaPause />}
                </button>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center text-cyan-800 mb-2 drop-shadow">{pkg.title}</h2>
            <p className="text-center text-gray-700 mb-4 italic">{pkg.summary}</p>

            <div className="w-full divide-y divide-gray-200">
              {pkg.features.map((item, index) => (
                <div key={index} className="py-3">
                  <button
                    onClick={() => toggleAccordion(pkg.id, index)}
                    className="w-full flex justify-between items-center text-left text-lg font-medium text-cyan-700 hover:text-cyan-900 focus:outline-none"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wedding;