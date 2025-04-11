import { Link } from "react-router-dom";
import { ArrowRight, Users2, Briefcase, CalendarCheck } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import abou from "../assets/image/twc3.jpg";

const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -40]);

  return (
    <section
      ref={ref}
      className="relative bg-orange-50 w-full overflow-hidden py-10"
    >
      {/* Floating Bubbles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-cyan-200 rounded-full opacity-30 animate-ping" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300 rounded-full opacity-20 animate-pulse" />

      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="bg-orange-500 text-white w-full lg:w-[400px] px-8 py-12 flex flex-col justify-center rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none shadow-xl z-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-300 mb-6 leading-tight">
            Our Services
          </h1>

          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <Users2 className="w-6 h-6 text-cyan-300 mt-1" />
              <div>
                <span className="text-xl font-semibold mb-2 block">
                  Social Events
                </span>
                <Link
                  to="/socia"
                  className="inline-flex items-center px-5 py-2 text-sm bg-orange-700 text-white font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 group"
                >
                  Explore Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <Briefcase className="w-6 h-6 text-cyan-300 mt-1" />
              <div>
                <span className="text-xl font-semibold mb-2 block">
                  Corporate Events
                </span>
                <Link
                  to="/corporate"className="inline-flex items-center px-5 py-2 text-sm bg-orange-700 text-white font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 group"
                  
                >
                  Explore Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </li>
          </ul>

          
        </motion.div>

        {/* Image Section with Overlay */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full lg:w-[75%] h-[300px] lg:h-[600px] overflow-hidden group rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none"
        >
          {/* Background Image */}
          <img
            src={abou}
            alt="Elegant Event"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-300/70 to-transparent z-10 rounded-b-2xl lg:rounded-r-2xl" />

          {/* Text & Button Overlay */}
          <div className="absolute bottom-8 left-8 z-20 text-orange-950 max-w-xl space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold drop-shadow-lg">
              Moments that Last Forever
            </h2>
            <p className="text-sm md:text-base text-cyan-950 drop-shadow-sm">
              We help you plan and execute unforgettable experiences—whether it's a business conference or a vibrant party.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2 mt-2 text-sm font-semibold bg-cyan-600 hover:bg-cyan-500 text-white rounded-full shadow-lg transition-all duration-300"
            >
              <CalendarCheck className="w-4 h-4 mr-2" />
              Book Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
