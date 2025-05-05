import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Imag from "../assets/image/corporatre.jpg";
import Image2 from "../assets/image/twc9.jpg";
import ima from "../assets/image/twc8.jpg";

const packages = [
  {
    title: "Basic Conference Package",
    image: Imag,
    features: [
      {
        title: "Venue Arrangement",
        description:
          "We handle the booking and layout setup of a suitable venue that aligns with your audience size and event goals.",
      },
      {
        title: "Guest Registration",
        description:
          "We provide seamless guest check-in services, including online and on-site registration platforms.",
      },
      {
        title: "Essential Equipment",
        description:
          "Provision of basic AV equipment including microphones, speakers, and projectors.",
      },
    ],
  },
  {
    title: "Standard Conference Package",
    image: Image2,
    features: [
      {
        title: "Enhanced Venue Design",
        description:
          "Includes branded signage, stage setup, and improved seating arrangement with professional ambiance.",
      },
      {
        title: "Conference Materials",
        description:
          "Customized folders, notepads, pens, and event programs for each participant.",
      },
      {
        title: "Professional MC & Support Staff",
        description:
          "Engaging MCs and trained ushers to coordinate event flow.",
      },
      {
        title: "Refreshments",
        description: "Tea breaks and light snacks for guests at specified intervals.",
      },
      {
        title: "Branding Setup",
        description: "Setup includes banners, rollups, and branded backdrops.",
      },
    ],
  },
  {
    title: "Premium Conference Package",
    image: ima,
    features: [
      {
        title: "Event Planning & Consultation",
        description:
          "End-to-end event planning services including strategy, logistics, and timeline management.",
      },
      {
        title: "Live Streaming & Recording",
        description:
          "Multi-camera setup, live broadcasting, and professional video recording.",
      },
      {
        title: "Customized Delegate Kits",
        description:
          "Includes premium welcome kits with branded merchandise and information brochures.",
      },
      {
        title: "Full Catering Service",
        description:
          "Buffet meals, drinks, and on-site catering for your attendees.",
      },
      {
        title: "Panel Management & Keynote Hosting",
        description:
          "We coordinate with your speakers and manage all logistics for keynote sessions and panel discussions.",
      },
      {
        title: "Post-Event Reporting",
        description:
          "Detailed analysis, attendee feedback reports, and media recaps delivered post-event.",
      },
    ],
  },
];

export default function ConferencePackages() {
  // Keep track of which feature in which package is open (by pkgIndex and featureIndex)
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (pkgIndex, featureIndex) => {
    const key = `${pkgIndex}-${featureIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="py-16 px-4 md:px-16 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-600">
        Conference Event Packages
      </h2>
      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
        Discover our tailored packages to professionally handle your conferences,
        seminars, and workshops. Whether you're organizing a small business event
        or a large international conference, TWC Event Services has you covered.
      </p>
      <div className="grid gap-12 md:grid-cols-3">
        {packages.map((pkg, pkgIndex) => (
          <motion.div
            key={pkgIndex}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-2xl shadow-lg bg-white overflow-hidden flex flex-col"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-60 object-cover"
            />
            <div className="flex-1 flex flex-col p-6">
              <h3 className="text-2xl font-bold mb-4 text-orange-500">
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
                        className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-700 hover:text-orange-600 focus:outline-none"
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
