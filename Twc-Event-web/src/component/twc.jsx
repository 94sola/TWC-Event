import { Link } from "react-router-dom";
import { ArrowRight, Pause, Play } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import abou from "../assets/image/TWC vid.mp4";

const About = () => {
  const ref = useRef();
  const videoRef = useRef();
  const isInView = useInView(ref, { once: true });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -40]);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      ref={ref}
      className="relative bg-orange-50 w-full overflow-hidden"
    >
      {/* Animated background shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-cyan-200 rounded-full opacity-30 animate-ping"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300 rounded-full opacity-20 animate-pulse"></div>

      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Video Section */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-[75%] h-[280px] lg:h-[600px] relative"
        >
          <video
            ref={videoRef}
            src={abou}
            className="w-full h-full object-cover rounded-none"
            muted
          />
          {/* Centered Play/Pause Button */}
          <button
            onClick={toggleVideo}
            className="absolute inset-0 flex justify-center items-center"
          >
            <div className="bg-orange-500 text-white p-4 rounded-full hover:bg-orange-700 transition-all duration-300">
              {isPlaying ? (
                <Pause className="w-10 h-10" />
              ) : (
                <Play className="w-10 h-10" />
              )}
            </div>
          </button>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="bg-cyan-500 text-white 
                    w-full h-full 
                    lg:w-96 lg:h-[600px] 
                    px-10 py-10 
                    flex flex-col justify-center items-start 
                    shadow-2xl rounded-none lg:rounded-l-2xl z-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-800 mb-4">
            Who We Are
          </h2>
          <p className="text-base md:text-lg text-orange-100 leading-relaxed mb-6">
            Experiences crafted with excellence and heart—from concept to celebration.
            Whether it’s an intimate wedding or a grand corporate event, our creative
            touch ensures unforgettable memories that reflect your vision and style.
          </p>

          {/* CTA Button */}
          <Link
            to="/about"
            className="inline-flex items-center px-6 py-3 bg-orange-400 text-cyan-900 font-bold rounded-full hover:bg-white hover:text-cyan-800 transition-all duration-300 group"
          >
            Explore Us
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Optional decorative divider */}
          <div className="mt-6 w-16 h-1 bg-cyan-300 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
