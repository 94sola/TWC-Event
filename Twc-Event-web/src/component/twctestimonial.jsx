import { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Mrs Titi Akinjogbin",
    title: "Social Event",
    event: "Elegant Lagos Funeral",
    text: "Thank you for another excellent event with no hiccups. Hope next time it's under happier times. TWC Event Planning Services made the entire process seamless, and we were able to focus on honoring our loved one. Everything was executed beautifully, making a tough day a little easier to bear."
  },
  {
    id: 2,
    name: "Mr and Mrs Adeyemi",
    title: "Social Event",
    event: "A Fantastic Wedding Banquet",
    text: "Thank you so much, we couldn't have done this without you! TWC's meticulous attention to detail made our wedding banquet an unforgettable experience. Every moment, every decoration, and every gesture was perfectly coordinated to give us the best day of our lives."
  },
  {
    id: 3,
    name: "Mrs Remi Fadoju",
    title: "Social Event",
    event: "A Classic Birthday Party",
    text: "My 50th birthday felt like a royal affair! TWC added sparkle, joy, and precision. Highly recommend! From the decor to the entertainment, every detail was thoughtfully planned and executed with care. I felt like royalty and all my guests had a fantastic time."
  },
  {
    id: 4,
    name: "Ajumogobia & Okeke",
    title: "Corporate Event",
    event: "Conferment Ceremony",
    text: "First trials are always a risk, but your delivery was classy and lively. Commendations have been pouring in! TWC managed our conferment ceremony with such professionalism. They understood our vision and ensured every aspect of the event was executed flawlessly. We’ve received numerous compliments."
  },
  {
    id: 5,
    name: "Mrs Bunmi Owope",
    title: "Corporate Event",
    event: "Launching",
    text: "Impressive organization. The energy, elegance, and excellence of the event were beyond expectations! TWC’s team was a joy to work with. They delivered a seamless experience from start to finish, and I was able to fully enjoy the event without worrying about the details."
  }
];

const lineAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 }
  })
};

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const autoSlideDelay = 8000;

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, autoSlideDelay);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="w-full bg-gradient-to-b from-cyan-500 to-cyan-600 text-white py-16 px-4 md:px-12 lg:px-24 font-sans">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Hear From Our Happy Clients</h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6 px-2">
          <button
            onClick={prevSlide}
            className="text-white bg-cyan-800 p-2 rounded-full hover:bg-cyan-600 transition"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="text-white bg-cyan-800 p-2 rounded-full hover:bg-cyan-600 transition"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-cyan-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-800">{testimonial.title}</p>
                <p className="text-sm text-orange-600 font-medium">{testimonial.event}</p>
              </div>

              <FaQuoteLeft className="text-cyan-400 text-2xl mb-2" />
              {testimonial.text.split(". ").map((line, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  variants={lineAnimation}
                  initial="hidden"
                  animate="visible"
                  className="text-gray-700 italic text-lg leading-relaxed"
                >
                  {line.trim()}
                </motion.p>
              ))}
              <FaQuoteRight className="text-cyan-400 text-2xl mt-4 float-right" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
