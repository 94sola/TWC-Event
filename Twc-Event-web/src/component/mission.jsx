
import { motion } from "framer-motion";
import missionImg from "../assets/image/mrsk 1.jpg";
import visionImg from "../assets/image/twc4.jpg";
import valuesImg from "../assets/image/twc5.jpg";

const Mission = () => {
  return (
    <section id="mission-vision" className="relative overflow-hidden">
      {/* Background video or animation */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      >
        <source src="/twc-bg.mp4" type="video/mp4" />
      </video>

      {/* Decorative SVG shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.4C204.41,69.89,86.13,77.24,0,60V120H1200V0C1090.3,15.97,979.67,35.19,857.39,47.17C711.69,62.11,573.49,43.16,432,35.06C325.14,28.8,222.72,44.03,121.28,55.31C95.6,58.16,63.75,63.55,0,60Z"
            className="fill-orange-100"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 space-y-28">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <img
            src={missionImg}
            alt="TWC Mission"
            className="w-full md:w-1/2 h-72 object-cover rounded-3xl shadow-xl"
          />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-orange-600 mb-4">🌟 Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At TWC Event Services, our mission is to transform your dreams into reality by delivering extraordinary event experiences filled with creativity, precision, and elegance. We are committed to exceeding expectations and ensuring that each celebration leaves lasting impressions of joy, beauty, and brilliance.
            </p>
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row-reverse items-center gap-10"
        >
          <img
            src={visionImg}
            alt="TWC Vision"
            className="w-full md:w-1/2 h-72 object-cover rounded-3xl shadow-xl"
          />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-pink-600 mb-4">🌈 Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our vision is to become the leading name in premium event planning, recognized for innovation, luxury, and heartfelt storytelling. TWC envisions a future where every moment we craft becomes a cherished masterpiece that brings people together in celebration, unity, and unforgettable joy.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <img
            src={valuesImg}
            alt="TWC Values"
            className="w-full md:w-1/2 h-72 object-cover rounded-3xl shadow-xl"
          />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-green-600 mb-4">💫 Our Core Values</h2>
            <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
              <li>🎯 Excellence in execution</li>
              <li>✨ Creativity and elegance</li>
              <li>🤝 Integrity and trust</li>
              <li>💡 Innovation and inspiration</li>
              <li>💖 Client-centric approach</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;

  