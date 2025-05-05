
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image3 from "../assets/image/A (216).jpg";
import Image2 from "../assets/image/twc5.jpg";
import Image1 from "../assets/image/A (20).jpg";

const packages = [
  {
    title: "Essential Launch Package",
    image: Image1,
    features: [
      {
        title: "Venue Setup",
        description:
          "Perfect venue selection and setup aligned with your brand identity and audience profile.",
      },
      {
        title: "Guest Reception",
        description:
          "Coordinated RSVP management and red-carpet guest reception.",
      },
      {
        title: "PA System & Projector",
        description:
          "Quality AV setup for clear product presentations.",
      },
    ],
  },
  {
    title: "Pro Launch Package",
    image: Image2,
    features: [
      {
        title: "Creative Stage Design",
        description:
          "Custom-branded stage setup with lighting effects and dynamic product display zones.",
      },
      {
        title: "MC & Ushers",
        description:
          "Professional MC and hostesses for crowd management and excitement.",
      },
      {
        title: "Product Teaser Film",
        description:
          "Short cinematic video to introduce the product and build hype.",
      },
      {
        title: "Media & Influencer Coordination",
        description:
          "Invite and manage press, bloggers, and influencers for event visibility.",
      },
    ],
  },
  {
    title: "Luxury Launch Experience",
    image: Image3,
    features: [
      {
        title: "Full Event Strategy",
        description:
          "Comprehensive launch planning including marketing, storytelling, and brand immersion.",
      },
      {
        title: "Live Streaming & Social Buzz",
        description:
          "Multiplatform live broadcast with real-time social media team coverage.",
      },
      {
        title: "Interactive Product Stations",
        description:
          "Tech-enhanced demo areas with touchscreen displays and live trials.",
      },
      {
        title: "Catering & Entertainment",
        description:
          "Themed food service, live music, and entertainment to keep guests engaged.",
      },
      {
        title: "Post-Launch Media Kit",
        description:
          "Beautifully packaged videos, photos, press releases, and stats to keep the momentum going.",
      },
    ],
  },
];

export default function ProductLaunchPackages() {
  const [openItems, setOpenItems] = useState({});
  const [modalContent, setModalContent] = useState(null);

  const toggleItem = (pkgIndex, featureIndex) => {
    const key = `${pkgIndex}-${featureIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const openModal = (feature) => setModalContent(feature);
  const closeModal = () => setModalContent(null);

  return (
    <section className="py-16 px-4 md:px-16 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-4 text-orange-600"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Product Launch Packages
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto text-gray-600 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Bring your product to market with flair and impact. Our launch packages are
        crafted to showcase your innovation in style.
      </motion.p>

      <div className="grid gap-10 md:grid-cols-3">
        {packages.map((pkg, pkgIndex) => (
          <motion.div
            key={pkgIndex}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: pkgIndex * 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-xl bg-white overflow-hidden flex flex-col hover:shadow-orange-200 transition-shadow duration-300"
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
                            className="px-4 pb-4 text-gray-600 text-sm cursor-pointer"
                            onClick={() => openModal(feature)}
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

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-2xl max-w-lg p-6"
          >
            <h4 className="text-xl font-bold text-orange-600 mb-4">
              {modalContent.title}
            </h4>
            <p className="text-gray-700 mb-4">{modalContent.description}</p>
            <button
              onClick={closeModal}
              className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
