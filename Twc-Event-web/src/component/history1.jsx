import React from "react";
import { motion } from "framer-motion";
import { Sparkles, PartyPopper, Smile, Star } from "lucide-react";
import social from "../assets/image/twc3.jpg";
import corp from "../assets/image/twc1.jpg";

const About = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-cyan-100 to-orange-50 py-16 px-6 md:px-20 font-serif">
      {/* Floating Decorations */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-pink-300 opacity-20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-yellow-300 opacity-20 rounded-full filter blur-3xl animate-pulse delay-200" />

      {/* Headline */}
      <div className="text-center mb-16 relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-orange-600 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          TWC's Past, Present & Beyond
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          Where celebrations become stories, and stories become memories.
        </p>
      </div>

      {/* Biography Section */}
      <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Born out of a passion for crafting unforgettable experiences, <strong className="text-orange-500">TWC Event Services</strong> has grown from a humble startup into one of the most respected event curators in the industry. With over a decade of spectacular moments under our belt, we blend <span className="text-pink-600 font-semibold">style</span>, <span className="text-yellow-600 font-semibold">strategy</span>, and a hint of <span className="text-purple-600 font-semibold">sparkle</span> into every celebration.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Whether it’s a dazzling wedding, a fun-filled birthday bash, or a sleek corporate soirée — we make the magic happen. From venue design to the final toast, we’ve got your back (and your dance floor). TWC Event Services believes every event is a once-in-a-lifetime story, and we’re here to help you tell it in full color and confetti.
        </motion.p>
      </div>

      {/* Aims Section */}
      <div className="mt-20 max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-orange-600 mb-6">
          <Star className="inline-block mb-1 text-yellow-500" /> Our Aims & Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <motion.div
            className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={social} alt="" />
            <h3 className="text-2xl font-bold text-pink-600 mb-2">Creating Unforgettable Moments</h3>
            <p className="text-gray-600">
              Our goal is to turn your ideas into immersive, unforgettable experiences that reflect your style, values, and story.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={corp} alt="" />
            <h3 className="text-2xl font-bold text-orange-500 mb-2">Spreading Joy and Celebration</h3>
            <p className="text-gray-600">
              From corporate achievements to life milestones, we bring fun, flair, and fabulous vibes to every event we plan.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Playful CTA Section */}
      <div className="mt-24 text-center relative z-10">
        <motion.h3
          className="text-3xl font-semibold text-cyan-600"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          Let's Make Magic Together!
        </motion.h3>
        <p className="text-gray-600 text-lg mt-2 mb-4">
          Planning an event? Let’s sprinkle it with joy, glam, and unforgettable vibes!
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-md transition-all duration-300">
          Start Your Journey
        </button>
        <div className="mt-6 flex justify-center gap-4 text-pink-500 text-3xl">
          <Sparkles />
          <PartyPopper />
          <Smile />
        </div>
      </div>
    </section>
  );
};

export default About;
