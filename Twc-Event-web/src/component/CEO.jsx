import React, { useRef } from "react";
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

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 font-sans" ref={bioRef}>
      <h1 className="text-5xl font-bold text-center text-cyan-500 mb-12">
        Meet <span className="text-orange-500">Adefunke Kuyoro</span>, CEO of TWC Events
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* CEO Image and Title */}
        <div className="w-full md:w-1/3 flex flex-col items-center space-y-4 relative">
          <motion.img
            src={ceoImg}
            alt="Adefunke Kuyoro - CEO"
            className="rounded-full shadow-2xl w-96 h-96 object-cover transform transition duration-500 hover:scale-110"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          <h2 className="text-4xl font-semibold text-gray-800 mt-4">
            Adefunke Kuyoro
          </h2>
          <p className="text-xl text-gray-500">Chief Executive Officer, TWC Event Services</p>
          <button
            onClick={downloadPDF}
            className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 shadow-lg transition-all duration-300"
          >
            Download Bio as PDF
          </button>
        </div>

        {/* CEO Bio Content */}
        <div className="w-full md:w-2/3 text-gray-700 space-y-8">
          <motion.img
            src={twc}
            alt="TWC Logo"
            className="absolute top-12 right-12 w-44 md:w-48 opacity-20 transform rotate-12 shadow-lg rounded-xl"
          />

          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Adefunke Kuyoro is a woman of professionalism and versatility, with over four decades of experience in IT, Human Resources, and Event Planning. Her journey embodies a powerful blend of leadership and a passion for excellence.
          </motion.p>

          <motion.h3 className="text-3xl font-semibold text-orange-500 mt-8">
            Educational Journey:
          </motion.h3>
          <motion.p className="text-lg leading-relaxed">
            BSc in Combined Sciences from University of Brighton, UK (1982). She also holds a Postgraduate Diploma in Development Studies and a Diploma in Business Management from European Business University.
          </motion.p>

          <motion.h3 className="text-3xl font-semibold text-orange-500 mt-8">
            Certifications & Affiliations:
          </motion.h3>
          <motion.p className="text-lg leading-relaxed">
            Certified by Google Hustle Academy, Women in Digital Business, DO UMWomen, APPOEMN, and more. She is a certified mentor and coach, and a Fellow of the Chartered Institute of Mentoring and Coaching Nigeria.
          </motion.p>

          <motion.h3 className="text-3xl font-semibold text-orange-500 mt-8">
            Professional Expertise:
          </motion.h3>
          <motion.p className="text-lg leading-relaxed">
            CEO of TWC Event Services since 2012 and co-founder of Events Business Academy. Former HR Manager at Latter Rain Assembly, Systems Analyst at the Ministry of Finance, and Co-founder of Nicodep Computers Limited.
          </motion.p>

          <motion.h3 className="text-3xl font-semibold text-orange-500 mt-8">
            Leadership and Board Roles:
          </motion.h3>
          <motion.p className="text-lg leading-relaxed">
            Former President and VP of APPOEMN. Multiple leadership roles in NNEW including Chapter Chairperson, General Secretary, and Summit/IWD Chairperson. Board member of GMS Travels, Group Messenger, and Strap & Safe Child Foundation.
          </motion.p>

          <motion.h3 className="text-3xl font-semibold text-orange-500 mt-8">
            Mentorship & Skillset:
          </motion.h3>
          <motion.p className="text-lg leading-relaxed">
            Adefunke is a skilled mentor and certified coach in programs like FCMB/NNEW She Ventures. Her expertise includes Event Planning, IT Systems, HR Management, Strategic Planning, and Leadership.
          </motion.p>

          {/* Testimonials or Awards Section */}
          <motion.div
            className="mt-16 pt-12 border-t border-orange-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-bold text-cyan-500 text-center mb-6">
              Awards & Recognition
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <img src={award1} alt="Award 1" className="w-28 h-28 object-contain" />
              <img src={award2}alt="Award 2" className="w-28 h-28 object-contain" />
              <img src={award4} alt="Award 3" className="w-28 h-28 object-contain" />
              <img src={award4} alt="Award 4" className="w-28 h-28 object-contain" />
            </div>
            <p className="text-center text-gray-600 mt-6">
              Honored for leadership, innovation, and commitment to excellence.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Timeline Section */}
      <div className="mt-20 border-l-4 border-orange-500 pl-6 space-y-12">
        <h3 className="text-3xl font-bold text-orange-500">Milestones Timeline</h3>
        <div>
          <p className="text-gray-700 font-semibold">1982 – BSc Combined Sciences, University of Brighton</p>
          <p className="text-gray-500">Foundation of her academic and technical expertise</p>
        </div>
        <div>
          <p className="text-gray-700 font-semibold">1990s – Systems Analyst & IT Specialist</p>
          <p className="text-gray-500">Worked at Ministry of Finance & DPMS (IBM)</p>
        </div>
        <div>
          <p className="text-gray-700 font-semibold">2000s – Co-founder, Nicodep Computers</p>
          <p className="text-gray-500">Pioneer in tech and business center operations</p>
        </div>
        <div>
          <p className="text-gray-700 font-semibold">2012 – CEO, TWC Event Services</p>
          <p className="text-gray-500">Founded a premier wedding and events company</p>
        </div>
        <div>
          <p className="text-gray-700 font-semibold">2020–2024 – Chairperson, NNEW Lagos</p>
          <p className="text-gray-500">Leadership and mentorship across women networks</p>
        </div>
        <div>
          <p className="text-gray-700 font-semibold">2024 – Present President, NNEW</p>
          <p className="text-gray-500">Continuing impact in entrepreneurship and leadership</p>
        </div>
      </div>
    </section>
  );
};

export default CeoBio;
