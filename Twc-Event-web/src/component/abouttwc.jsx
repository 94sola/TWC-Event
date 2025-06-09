import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";

const faqs = [
  {
    question: "What services does TWC Event Services offer?",
    answer:
      "TWC Event Services provides full-service planning for weddings, birthdays, corporate events, product launches, anniversaries, and more. We handle décor, coordination, and vendor management with elegance and precision.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 3–6 months in advance for smooth planning. For larger events or destination celebrations, earlier is better!",
  },
  {
    question: "Do you handle destination events?",
    answer:
      "Yes! We offer destination event planning both locally and internationally. Let’s bring your dream celebration to life—wherever it is!",
  },
  {
    question: "Can you work with my budget?",
    answer:
      "Absolutely. We tailor packages to suit your budget while still ensuring quality, style, and sophistication.",
  },
  {
    question: "Do you offer décor services alone?",
    answer:
      "Yes, we offer stand-alone décor, floral arrangements, stage styling, and customized themes even if we’re not handling full planning.",
  },
  {
    question: "What makes TWC Event Services different from other planners?",
    answer:
      "Our attention to detail, creative vision, personalized service, and joyful approach make every event unique and unforgettable.",
  },
  {
    question: "Can we schedule a consultation?",
    answer:
      "Definitely! Reach out via our contact page to book a free consultation. We'd love to chat about your upcoming event!",
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="min-h-screen bg-orange-50 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-orange-600 text-center"
        >
          🙋 Frequently Asked Questions
        </motion.h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white border-l-4 border-orange-400 rounded-xl shadow p-5"
            >
              <button
                className="w-full text-left font-semibold text-lg text-orange-700 flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="text-gray-700 mt-2"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center pt-10"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg shadow-md transition duration-300"
          >
            <ArrowLeftCircle size={24} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQPage;
