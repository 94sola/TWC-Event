
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Party1 from "../assets/image/house2.jpg";
import Party2 from "../assets/image/twc8.jpg";
import Party3 from "../assets/image/IMG_4183.jpg";

const packages = [
  {
    title: "Classic Party Package",
    image: Party1,
    features: [
      {
        title: "Venue Setup with Christmas Touch",
        description:
          "Festive decorations with Christmas trees, garlands, and ambient lighting to create a cheerful environment.",
      },
      {
        title: "Music & Light Entertainment",
        description:
          "Background music, light games, and a DJ to keep the party vibrant.",
      },
      {
        title: "Food & Drinks",
        description:
          "Catered light snacks and beverages with a holiday twist, including hot chocolate and festive treats.",
      },
    ],
  },
  {
    title: "Deluxe Party Package",
    image: Party2,
    features: [
      {
        title: "Christmas-Themed Venue & Decor",
        description:
          "Elegant and immersive decor with themed table settings, wreaths, and a snow-inspired backdrop.",
      },
      {
        title: "Live Santa Appearance",
        description:
          "A Santa Claus appearance for gift distribution and photo opportunities.",
      },
      {
        title: "Full Buffet & Drinks",
        description:
          "A buffet menu with seasonal dishes, desserts, wine, and soft drinks.",
      },
      {
        title: "Christmas Karaoke & Games",
        description:
          "Interactive games and a karaoke session for guests to sing along to their favorite holiday tunes.",
      },
      {
        title: "Host & Ushers",
        description:
          "Professional event host and festive-themed ushers to guide your guests.",
      },
    ],
  },
  {
    title: "Luxury Christmas Gala Package",
    image: Party3,
    features: [
      {
        title: "Red Carpet Welcome & Luxury Decor",
        description:
          "Stunning red carpet entrance with luxurious Christmas-themed décor and floral arrangements.",
      },
      {
        title: "Live Band or Carol Singers",
        description:
          "Choose between a jazz band or traditional carolers to serenade your guests.",
      },
      {
        title: "Premium 3-Course Dinner",
        description:
          "Gourmet Christmas dinner with plated service, wine pairing, and dessert.",
      },
      {
        title: "Photo Booth & Videography",
        description:
          "Christmas-themed photo booth with props, plus full event video coverage.",
      },
      {
        title: "Gift Bags & Custom Souvenirs",
        description:
          "Exclusive branded gift bags with holiday-themed souvenirs for every guest.",
      },
      {
        title: "Luxury Transport for VIP Guests",
        description:
          "Shuttle or chauffeur service for your top-tier guests.",
      },
      {
        title: "After Party Lounge Access",
        description:
          "Access to a private after-party lounge with cocktails and ambient entertainment.",
      },
    ],
  },
];

export default function EndOfYearPartyPackages() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (pkgIndex, featureIndex) => {
    const key = `${pkgIndex}-${featureIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="py-16 px-4 md:px-16 bg-gradient-to-br from-white via-red-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/snowflakes.svg')] opacity-10 bg-repeat"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-red-600">
        End-of-Year Party Packages 🎄
      </h2>
      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
        Celebrate the end of the year with joy and elegance. Choose from our
        curated Christmas-themed party packages to suit every mood and occasion.
      </p>
      <div className="grid gap-12 md:grid-cols-3 relative z-10">
        {packages.map((pkg, pkgIndex) => (
          <motion.div
            key={pkgIndex}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-2xl shadow-xl bg-white overflow-hidden flex flex-col border border-red-100 hover:shadow-2xl transition duration-300"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-60 object-cover"
            />
            <div className="flex-1 flex flex-col p-6">
              <h3 className="text-2xl font-bold mb-4 text-red-500">
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
                        className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-700 hover:text-red-600 focus:outline-none"
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
