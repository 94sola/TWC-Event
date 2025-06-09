import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { GiCrownCoin, GiDrakkarDragon, GiPartyPopper } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegTimesCircle } from "react-icons/fa";

const addOns = [
  "Cultural Dance Performances",
  "Live Traditional Music",
  "Royal Costume Rentals",
  "Customized Thrones & Regalia",
  "Press & Media Coverage",
  "Security Coordination",
  "Commemorative Souvenirs",
  "Royal Parade Arrangements",
];

const coronationPackages = [
  {
    id: "entry",
    title: "Royal Entry Ceremony",
    icon: <GiDrakkarDragon className="text-6xl text-yellow-700" />,
    summary:
      "A majestic introduction with drums, procession, and honor guards.",
    features: [
      {
        title: "Procession Planning",
        description:
          "Coordinate ceremonial entry with grand parade and protocols.",
      },
      {
        title: "Sound & Announcement Setup",
        description:
          "Royal fanfares and traditional music for an immersive entrance.",
      },
      {
        title: "Welcome Protocol Management",
        description:
          "Dignitary honors and formal greeting ceremonies.",
      },
    ],
  },
  {
    id: "rites",
    title: "Traditional Rites & Installations",
    icon: <GiCrownCoin className="text-6xl text-yellow-700" />,
    summary:
      "Authentic cultural rites and symbolic installations for your heritage.",
    features: [
      {
        title: "Ancestral Blessings",
        description:
          "Spiritual leaders conduct sacred rites to bless your reign.",
      },
      {
      title: "Traditional Entertainment",
      description:
        "Enjoy a curated lineup of cultural dancers, heritage drummers, and oral folklore performances.",
    },
    {
      title: "VIP Hosting & Service",
      description:
        "Professional stewards provide elite service with designated protocol seating and premium dining experience.",
    },
      {
        title: "Symbolic Ritual Coordination",
        description:
          "Prepare sacred tokens and ceremonial symbols.",
      },
      {
        title: "Cultural Documentation",
        description:
          "Capture rituals in photo, video, and transcript.",
      },
    ],
  },
  {
  id: "banquet",
  title: "Royal Banquet & Celebration",
  icon: <GiPartyPopper className="text-6xl text-yellow-700" />,
  summary:
    "A regal feast and entertainment fit for royalty, blending luxury with cultural splendor.",
  features: [
    {
      title: "Banquet Styling & Decor",
      description:
        "Transform your venue with opulent royal themes—golden drapery, embroidered linens, and ceremonial florals.",
    },
    {
        title: "Cultural Documentation",
        description:
          "Capture rituals in photo, video, and transcript.",
    },
    {
      title: "Traditional Entertainment",
      description:
        "Enjoy a curated lineup of cultural dancers, heritage drummers, and oral folklore performances.",
    },
    {
      title: "VIP Hosting & Service",
      description:
        "Professional stewards provide elite service with designated protocol seating and premium dining experience.",
    },
    {
      title: "Gourmet Culinary Experience",
      description:
        "Indulge in a curated menu of heritage dishes and continental fusion prepared by royal chefs.",
    },
    {
      title: "Royal Toast & Celebration Ritual",
      description:
        "Lead guests through a formal royal toast and end with blessing songs and community cheers.",
    },
    {
      title: "Evening Illumination Ceremony",
      description:
        "Culminate the banquet with a night-time lantern release, fireworks display, or crown-lighting ritual.",
    },
  ],
},

];

const Coronation = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [selectedAddOns, setSelectedAddOns] = useState({});
  const [openModal, setOpenModal] = useState(null);

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
    const current = selectedAddOns[pkgId] || [];
    setSelectedAddOns((prev) => ({
      ...prev,
      [pkgId]: current.includes(addon)
        ? current.filter((a) => a !== addon)
        : [...current, addon],
    }));
  };

  return (
    <div className="relative bg-gradient-to-br from-yellow-50 via-yellow-100 to-white px-4 sm:px-8 lg:px-16 py-14 overflow-hidden">
      {/* Floating Animation Icons */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-8 left-8 text-yellow-300 text-3xl pointer-events-none"
      >
        👑
      </motion.div>
      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-10 right-10 text-yellow-200 text-4xl pointer-events-none"
      >
        🎺
      </motion.div>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-yellow-800 drop-shadow-xl">
          Coronation Packages
        </h1>
        <p className="text-yellow-700 max-w-xl mx-auto mt-2 mb-6 text-sm sm:text-base">
          Experience your rise to royalty with a celebration rooted in tradition and elegance.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-yellow-800 text-white px-6 py-3 rounded-full shadow-xl hover:bg-white hover:text-yellow-800 hover:scale-110 transition-all"
        >
          Plan Your Coronation
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {coronationPackages.map((pkg) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-lg transition-all duration-300 flex flex-col items-center"
          >
            <div className="mb-4">{pkg.icon}</div>

            <h2 className="text-2xl font-bold text-yellow-900 mb-2 text-center">
              {pkg.title}
            </h2>
            <p className="text-yellow-700 text-center mb-4 italic">{pkg.summary}</p>

            <button
              onClick={() => setOpenModal(pkg.id)}
              className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 font-semibold px-4 py-2 rounded-lg shadow hover:scale-105 transition-all mb-4"
            >
              View Full Details
            </button>

            <div className="w-full">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Optional Add-Ons:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {addOns.map((addon) => (
                  <label key={addon} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedAddOns[pkg.id]?.includes(addon) || false}
                      onChange={() => handleAddonChange(pkg.id, addon)}
                      className="accent-yellow-700"
                    />
                    <span>{addon}</span>
                  </label>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modals for Full Details */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-lg relative"
            >
              <button
                onClick={() => setOpenModal(null)}
                className="absolute top-3 right-3 text-yellow-800 text-xl"
              >
                <FaRegTimesCircle />
              </button>
              {coronationPackages
                .filter((pkg) => pkg.id === openModal)
                .map((pkg) => (
                  <div key={pkg.id}>
                    <div className="mb-4 text-center">{pkg.icon}</div>
                    <h2 className="text-2xl font-bold text-yellow-900 mb-2 text-center">
                      {pkg.title}
                    </h2>
                    <p className="text-yellow-700 italic text-center mb-4">{pkg.summary}</p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i}>
                          <span className="font-semibold text-yellow-800">{feature.title}:</span>{" "}
                          <span className="text-yellow-700">{feature.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Coronation;
