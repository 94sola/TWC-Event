import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ceoImg from "../assets/image/mrskk.jpg";
import twc from "../assets/image/twc12.jpg";
import html2pdf from "html2pdf.js";
import award1 from "../assets/image/award.jpg";
import award2 from "../assets/image/award1.jpg";
import award3 from "../assets/image/award2.jpg";
import award4 from "../assets/image/award4.jpg";

const CeoBio = () => {
  const bioRef = useRef();
  const [selectedAward, setSelectedAward] = useState(null);

  const downloadPDF = () => {
    const element = bioRef.current;
    const opt = {
      margin: 0.5,
      filename: "Adefunke_Kuyoro_Bio.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedAward(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      className="bg-gray-50 py-16 px-6 md:px-20 font-sans relative overflow-hidden"
      ref={bioRef}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-center text-cyan-500 mb-12">
        Meet <span className="text-orange-500">Adefunke Kuyoro</span>, CEO of TWC Events
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* CEO Image and Title */}
        <div className="w-full md:w-1/3 flex flex-col items-center space-y-4 relative z-10">
          <motion.img
            src={ceoImg}
            alt="Adefunke Kuyoro - CEO"
            className="rounded-full shadow-2xl w-60 h-60 md:w-80 md:h-80 object-cover transform transition duration-500 hover:scale-110"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mt-4 text-center">
            Adefunke Kuyoro
          </h2>
          <p className="text-base sm:text-sm text-gray-500 text-center">
            Chief Executive Officer, TWC Event Services
          </p>
          <button
            onClick={downloadPDF}
            className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 shadow-lg transition-all duration-300"
          >
            Download Bio as PDF
          </button>
        </div>

        {/* CEO Bio Content */}
        <div className="w-full md:w-2/3 text-gray-700 space-y-8 relative z-10">
          <motion.img
            src={twc}
            alt="TWC Logo"
            className="absolute top-4 right-4 w-24 md:w-40 opacity-20 rotate-12 shadow-lg rounded-xl pointer-events-none"
          />

          <motion.p
            className="text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Adefunke Kuyoro is a woman of professionalism and versatility, with
            over four decades of experience in IT, Human Resources, and Event
            Planning. Her journey embodies a powerful blend of leadership and a
            passion for excellence.
          </motion.p>

          {/* Bio Sections */}
          {[
            {
              heading: "Educational Journey:",
              text: "BSc in Combined Sciences from University of Brighton, UK (1982). She also holds a Postgraduate Diploma in Development Studies and a Diploma in Business Management from European Business University.",
            },
            {
              heading: "Certifications & Affiliations:",
              text: "Certified by Google Hustle Academy, Women in Digital Business, DO UMWomen, APPOEMN, and more. She is a certified mentor and coach, and a Fellow of the Chartered Institute of Mentoring and Coaching Nigeria.",
            },
            {
              heading: "Professional Expertise:",
              text: "CEO of TWC Event Services since 2012 and co-founder of Events Business Academy. Former HR Manager at Latter Rain Assembly, Systems Analyst at the Ministry of Finance, and Co-founder of Nicodep Computers Limited.",
            },
            {
              heading: "Leadership and Board Roles:",
              text: "Former President and VP of APPOEMN. Multiple leadership roles in NNEW including Chapter Chairperson, General Secretary, and Summit/IWD Chairperson. Board member of GMS Travels, Group Messenger, and Strap & Safe Child Foundation.",
            },
            {
              heading: "Mentorship & Skillset:",
              text: "Adefunke is a skilled mentor and certified coach in programs like FCMB/NNEW She Ventures. Her expertise includes Event Planning, IT Systems, HR Management, Strategic Planning, and Leadership.",
            },
          ].map((section, index) => (
            <div key={index}>
              <motion.h3 className="text-xl md:text-2xl font-semibold text-orange-500 mt-8">
                {section.heading}
              </motion.h3>
              <motion.p className="text-base md:text-lg leading-relaxed">
                {section.text}
              </motion.p>
            </div>
          ))}

          {/* Awards Section */}
          <motion.div
            className="mt-16 pt-12 border-t border-orange-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-500 text-center mb-6">
              Awards & Recognition
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[award1, award2, award3, award4].map((award, index) => (
                <img
                  key={index}
                  src={award}
                  alt={`Award ${index + 1}`}
                  className="w-20 h-20 md:w-28 md:h-28 object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedAward(award)}
                />
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6">
              Honored for leadership, innovation, and commitment to excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mt-20 border-l-4 border-orange-500 pl-6 space-y-12">
        <h3 className="text-2xl md:text-3xl font-bold text-orange-500">Milestones Timeline</h3>
        {[
          ["1982 – BSc Combined Sciences, University of Brighton", "Foundation of her academic and technical expertise"],
          ["1990s – Systems Analyst & IT Specialist", "Worked at Ministry of Finance & DPMS (IBM)"],
          ["2000s – Co-founder, Nicodep Computers", "Pioneer in tech and business center operations"],
          ["2012 – CEO, TWC Event Services", "Founded a premier wedding and events company"],
          ["2020–2024 – Chairperson, NNEW Lagos", "Leadership and mentorship across women networks"],
          ["2024 – Present President, NNEW", "Continuing impact in entrepreneurship and leadership"],
        ].map(([title, desc], i) => (
          <div key={i}>
            <p className="text-gray-700 font-semibold">{title}</p>
            <p className="text-gray-500">{desc}</p>
          </div>
        ))}
      </div>

      {/* Award Modal */}
      {selectedAward && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedAward(null)}
        >
          <img
            src={selectedAward}
            alt="Award Preview"
            className="max-w-full max-h-[90vh] rounded-lg shadow-xl cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default CeoBio;
