import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";

import basicHouseImage from "../assets/image/house2.jpg";
import classicHouseImage from "../assets/image/house3.jpg";
import premiumHouseImage from "../assets/image/IMG_4107.jpg";

const packages = [
    {
      id: 1,
      title: "Basic Package",
      description:
        "Perfect for intimate housewarming gatherings with essential decorations and light refreshments.",
      features: [
        {
          title: "Basic decor (balloons, welcome banner)",
          desc: "Create a festive environment with cheerful, themed decorations.",
        },
        {
          title: "Welcome drink station",
          desc: "A warm reception area with light refreshments for your guests.",
        },
        {
          title: "Music playlist setup",
          desc: "Custom music playlist tailored to your preferred vibe.",
        },
        {
          title: "1 Host/MC",
          desc: "Professional host to welcome guests and maintain event flow.",
        },
        {
          title: "1-hour event photography",
          desc: "A photographer captures memorable moments throughout the event.",
        },
      ],
      image: basicHouseImage,
    },
    {
      id: 2,
      title: "Classic Package",
      description:
        "Designed for a more elaborate housewarming celebration with enhanced decor and activities.",
      features: [
        {
          title: "Elegant decor with floral touches",
          desc: "Sophisticated decoration setup with tasteful floral elements.",
        },
        {
          title: "Customized welcome signage",
          desc: "Personalized signs to warmly greet your guests.",
        },
        {
          title: "Light snacks & drink station",
          desc: "Tasty refreshments beautifully arranged for easy access.",
        },
        {
          title: "Professional DJ (2 hrs)",
          desc: "Live DJ to keep the party energy flowing with music.",
        },
        {
          title: "Photo booth with props",
          desc: "Fun corner with themed props for entertaining photos.",
        },
        {
          title: "Event host/MC",
          desc: "A lively MC keeps guests engaged and coordinates activities.",
        },
      ],
      image: classicHouseImage,
    },
    {
      id: 3,
      title: "Premium Package",
      description:
        "A luxurious housewarming experience with full-scale event coordination and entertainment.",
      features: [
        {
          title: "Premium decor with lighting & floral arrangements",
          desc: "Stunning decor setup using premium materials and lighting.",
        },
        {
          title: "Catering service (snacks & drinks)",
          desc: "Full-service catering with gourmet snacks and beverages.",
        },
        {
          title: "Live band or DJ (4 hrs)",
          desc: "Enjoy top-tier musical entertainment for the entire event.",
        },
        {
          title: "Customized souvenirs for guests",
          desc: "Unique keepsakes to thank your guests for celebrating with you.",
        },
        {
          title: "Full photography & videography",
          desc: "Professional team capturing every moment of your event.",
        },
        {
          title: "Games & entertainment coordination",
          desc: "Interactive activities designed to engage all your guests.",
        },
        {
          title: "Dedicated event manager",
          desc: "An experienced coordinator ensures everything runs smoothly.",
        },
      ],
      image: premiumHouseImage,
    },
  ];

const Housewarming = () => {
  const [openCards, setOpenCards] = useState({});
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000); // Show for 5 secs
    return () => clearTimeout(timer);
  }, []);

  const toggleCard = (index) => {
    setOpenCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="bg-orange-50 py-20 px-6 md:px-20 relative overflow-hidden">
      {showConfetti && <Confetti numberOfPieces={150} recycle={false} />}
      
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-orange-700 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Housewarming Packages 🎉
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Celebrate your new beginnings with our curated housewarming packages.
          Choose the one that suits your vibe and let us handle the rest!
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {packages.map((pkg, index) => {
          const isOpen = openCards[index];

          return (
            <motion.div
              key={pkg.id}
              className={`bg-white p-6 rounded-2xl shadow-2xl transition-all duration-300 flex flex-col items-center 
                ${isOpen ? "border-4 border-orange-300 scale-105 bg-orange-50" : "hover:shadow-orange-300"}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative w-full mb-4 rounded-xl overflow-hidden group">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover rounded-xl transform group-hover:scale-105 group-hover:brightness-110 transition-all duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300 rounded-xl"></div>
              </div>

              <button
                onClick={() => toggleCard(index)}
                className="w-full text-left text-2xl font-semibold text-orange-700 mb-2 flex justify-between items-center transition-transform"
              >
                {pkg.title}
                <motion.span
                  className="text-3xl font-bold text-orange-500"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  +
                </motion.span>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden w-full"
              >
                <p className="text-gray-600 text-center mb-4">{pkg.description}</p>
                <ul className="text-left text-gray-700 space-y-4 mb-4 w-full">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <p className="font-medium text-orange-600">{feature.title}</p>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <Link
                to="/contact"
                className="mt-auto inline-block bg-orange-500 text-white px-6 py-3 rounded-full shadow-xl hover:bg-white hover:text-orange-700 hover:scale-110 transition-all duration-300 ease-in-out"
              >
                Book Now
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Housewarming;
