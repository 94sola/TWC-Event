
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "../assets/image/corporatre.jpg";
import Image2 from "../assets/image/A (192).jpg";
import Image3 from "../assets/image/twc11.jpg";

const packages = [
  {
    title: "Basic Networking Package",
    image: Image1,
    features: [
      {
        title: "Venue Coordination",
        description:
          "We arrange a cozy and conducive venue ideal for small to mid-scale networking gatherings.",
      },
      {
        title: "Guest List Management",
        description:
          "Assistance with invitation dispatch and tracking RSVPs to streamline attendance.",
      },
      {
        title: "Basic Refreshments",
        description:
          "Provision of light snacks and drinks to keep the conversations flowing.",
      },
    ],
  },
  {
    title: "Professional Networking Package",
    image: Image2,
    features: [
      {
        title: "Branded Environment Setup",
        description:
          "Customized décor with your branding elements to create an immersive experience.",
      },
      {
        title: "Interactive Ice Breakers",
        description:
          "Facilitated networking activities and games to spark conversations among attendees.",
      },
      {
        title: "Live Music & Entertainment",
        description:
          "Ambient music or a live band to enhance the vibe without overpowering conversations.",
      },
      {
        title: "Name Tags & Business Card Stations",
        description:
          "Custom name badges and areas to easily exchange business cards or digital contact info.",
      },
    ],
  },
  {
    title: "Elite Networking Experience",
    image: Image3,
    features: [
      {
        title: "Luxury Venue & Styling",
        description:
          "Top-tier venue with elegant décor, mood lighting, and professional ambiance.",
      },
      {
        title: "Gourmet Catering & Drinks",
        description:
          "A full-course buffet, signature cocktails, and professional bar service.",
      },
      {
        title: "Professional Hosts & Facilitators",
        description:
          "Trained hosts to help direct conversations and build connections among attendees.",
      },
      {
        title: "Photo & Video Coverage",
        description:
          "Capture memorable moments and share highlights post-event with your audience.",
      },
      {
        title: "VIP Lounges & One-on-One Booths",
        description:
          "Private breakout areas for exclusive conversations and brand showcases.",
      },
    ],
  },
];

export default function NetworkingEventPackages() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (pkgIndex, featureIndex) => {
    const key = `${pkgIndex}-${featureIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="py-16 px-4 md:px-16 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-4 text-cyan-600"
      >
        Networking Event Packages
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center max-w-2xl mx-auto text-gray-600 mb-12"
      >
        Choose from our customizable packages for dynamic and engaging networking events that connect professionals and leave a lasting impression.
      </motion.p>
      <div className="grid gap-12 md:grid-cols-3">
        {packages.map((pkg, pkgIndex) => (
          <motion.div
            key={pkgIndex}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-2xl shadow-xl bg-white overflow-hidden flex flex-col transition-transform duration-300"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-60 object-cover"
            />
            <div className="flex-1 flex flex-col p-6">
              <h3 className="text-2xl font-bold mb-4 text-cyan-500">
                {pkg.title}
              </h3>
              <div className="w-full space-y-2">
                {pkg.features.map((feature, featureIndex) => {
                  const key = `${pkgIndex}-${featureIndex}`;
                  const isOpen = openItems[key] || false;
                  return (
                    <div
                      key={featureIndex}
                      className="border rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(pkgIndex, featureIndex)}
                        className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-700 hover:text-cyan-600 focus:outline-none"
                      >
                        <span>{feature.title}</span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-2"
                        >
                          ▼
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-4 pb-4 text-gray-600 text-sm"
                          >
                            {feature.description}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
