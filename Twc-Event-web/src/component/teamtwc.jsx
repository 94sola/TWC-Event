import { useState, useRef } from "react";
import { FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import team from "../assets/image/mrsk.jpg";
import team1 from "../assets/image/team.jpg";
import team2 from "../assets/image/team 2.jpg";
import team3 from "../assets/image/team 3.jpg";
import team4 from "../assets/image/team 4.jpg";
import team5 from "../assets/image/team 1.jpg";

const teamData = [
  {
    img: team,
    name: "Adefunke Kuyoro",
    role: "CEO of TWC",
    desc: `Adefunke Kuyoro is a seasoned and dynamic professional with over 40 years of experience across IT, Human Resources, and Events Planning. As the CEO of TWC Events Services since 2012 and co-founder of the Events Business Academy, she has become a prominent force in Nigeria’s events industry, known for her strategic leadership and commitment to excellence. Her academic foundation includes a BSc in Combined Sciences from the University of Brighton and postgraduate diplomas in Development Studies and Business Management. She holds numerous certifications, including from Google Hustle Academy, DO UMWomen, APPOEMN, and Women in Digital Business, and is a certified mentor and Fellow of the Chartered Institute of Mentoring and Coaching Nigeria. Adefunke's diverse career includes roles such as Systems Analyst at the Federal Ministry of Finance, HR Manager at The Latter Rain Assembly, and co-founder of Nicodep Computers Limited. Her impact extends through consultancy, board roles at organizations like GMS Travels and Safe Child Foundation, and leadership positions in professional bodies, including APPOEMN and NNEW, where she currently serves as President. Known for her expertise in event planning, strategic leadership, project management, and mentoring, Adefunke continues to inspire and empower others while leaving a lasting legacy of innovation and excellence.`,
    bg: "bg-cyan-400",
  },
  {
    img: team1,
    name: "Mrs Tosin Ayoola",
    role: "Lead Coordinator",
    desc: "Tosin ensures each event runs seamlessly, with a meticulous eye for logistics and flawless execution.",
    bg: "bg-orange-200",
  },
  {
    img: team2,
    name: "Ms Oluwaseun Akinwumi",
    role: "Lead Coordinator",
    desc: "Oluwaseun brings imaginative designs to life, ensuring every event feels like a work of art.",
    bg: "bg-orange-200",
  },
  {
    img: team4,
    name: "Mr Taiwo Oladipupo",
    role: "Coordinator",
    desc: "Taiwo ensures every logistical detail is in place, making sure that all events are flawless from start to finish.",
    bg: "bg-cyan-200",
  },
  {
    img: team5,
    name: "Ms Dolapo Fashina",
    role: "Coordinator",
    desc: "Dolapo ensures the flawless execution of events, managing everything from start to finish with perfection.",
    bg: "bg-cyan-200",
  },
  {
    img: team3,
    name: "Ms Adebanke Ojo",
    role: "Executive Assistant / Social Media Officer",
    desc: "My name is Adebanke Ojo, born in Lagos State, Nigeria, in 1997. I hold a B.Sc. in Sociology from the University of Lagos and am a certified Human Resources Manager. I currently serve as a Personal Assistant and Social Media Handler at TWC Events, and also as the Admin Officer at Event Business Academy. With a strong passion for organization, creativity, and supporting others, I help bring visions to life through executive support, content management, and efficient operations. I'm driven by purpose, excellence, and a desire to make meaningful impact in every role I take on.",
    bg: "bg-orange-300",
  },
];

const Team = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5], [40, 0]);
  const springY = useSpring(y, { stiffness: 60, damping: 18 });

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-16 px-4 bg-gradient-to-br from-white via-orange-50 to-pink-50 border-y-4 border-orange-200"
    >
      <motion.div style={{ y: springY }} className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500 tracking-tight drop-shadow-md">
            Meet Our Exceptional Team
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Passion, creativity, and dedication — the driving forces behind every event.
          </p>
        </div>

        {/* Custom Grid Layout: 1 at the top, 2 below, 2 below the second, and 1 at the bottom */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {/* First row: 1 member */}
          <div className="col-span-1 sm:col-span-1">
            <TeamCard member={teamData[0]} />
          </div>

          {/* Second row: 2 members */}
          <div className="col-span-1 sm:col-span-1">
            <TeamCard member={teamData[1]} />
          </div>
          <div className="col-span-1 sm:col-span-1">
            <TeamCard member={teamData[2]} />
          </div>

          {/* Third row: 2 members */}
          <div className="col-span-1 sm:col-span-1">
            <TeamCard member={teamData[3]} />
          </div>
          <div className="col-span-1 sm:col-span-1">
            <TeamCard member={teamData[4]} />
          </div>

          {/* Fourth row: 1 member */}
          <div className="col-span-1 sm:col-span-1">
            <TeamCard member={teamData[5]} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const TeamCard = ({ member }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleReadMore = () => setExpanded(!expanded);

  const isLong = member.desc.length > 350;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`group relative ${member.bg} rounded-3xl p-6 w-full max-w-md shadow-xl transition duration-300 hover:shadow-2xl`}
    >
      <div className="w-40 h-52 mx-auto rounded-full overflow-hidden border-4 border-black shadow-lg mb-4">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <h3 className="text-2xl font-bold text-center text-orange-600">{member.name}</h3>
      <h4 className="text-lg font-medium text-center text-black mb-4">{member.role}</h4>

      <div className="text-sm text-gray-800 text-center transition-all duration-300">
        {isLong && !expanded ? `${member.desc.slice(0, 350)}...` : member.desc}
        {isLong && (
          <button
            className="block mt-2 text-orange-600 font-semibold hover:underline"
            onClick={toggleReadMore}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      <div className="flex justify-center gap-5 mt-5">
        <a href="#" className="text-cyan-700 hover:text-cyan-900">
          <FaLinkedinIn size={18} />
        </a>
        <a href="#" className="text-pink-500 hover:text-pink-700">
          <FaInstagram size={18} />
        </a>
        <a href="mailto:hello@example.com" className="text-orange-500 hover:text-orange-700">
          <FaEnvelope size={18} />
        </a>
      </div>
    </motion.div>
  );
};

export default Team;
