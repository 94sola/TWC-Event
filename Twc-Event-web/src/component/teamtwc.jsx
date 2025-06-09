import { FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";
import team from "../assets/image/mrsk.jpg";
import team1 from "../assets/image/team.jpg";
import team2 from "../assets/image/team 2.jpg";
import team3 from "../assets/image/team 3.jpg";
import team4 from "../assets/image/team 4.jpg";
import team5 from "../assets/image/team 1.jpg";

const staffData = [
  {
    id: 1,
    img: team,
    name: "Mrs Adefunke Kuyoro",
    role: "CEO of TWC Event Services",
    desc: "Adefunke Kuyoro is a seasoned and dynamic professional with over 40 years of experience across IT, Human Resources, and Events Planning. As the CEO of TWC Events Services since 2012 and co-founder of the Events Business Academy, she has become a prominent force in Nigeria’s events industry, known for her strategic leadership and commitment to excellence. Her academic foundation includes a BSc in Combined Sciences from the University of Brighton and postgraduate diplomas in Development Studies and Business Management. She holds numerous certifications, including from Google Hustle Academy, DO UMWomen, APPOEMN, and Women in Digital Business, and is a certified mentor and Fellow of the Chartered Institute of Mentoring and Coaching Nigeria. Adefunke's diverse career includes roles such as Systems Analyst at the Federal Ministry of Finance, HR Manager at The Latter Rain Assembly, and co-founder of Nicodep Computers Limited. Her impact extends through consultancy, board roles at organizations like GMS Travels and Safe Child Foundation, and leadership positions in professional bodies, including APPOEMN and NNEW, where she currently serves as President. Known for her expertise in event planning, strategic leadership, project management, and mentoring, Adefunke continues to inspire and empower others while leaving a lasting legacy of innovation and excellence.",
    bg: "bg-cyan-500",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 2,
    img: team1,
    name: "Mrs Tosin Ayoola",
    role: "Lead Coordinator",
    desc: "My name is Oluwatosin Ayoola. I am a dedicated and family-oriented individual, happily married with three children. I hold a certificate in Catering and Hotel Management, and I have a strong background in customer service, having worked at Mr Biggs and completed several customer service training programs. Currently, I work with TWC Events Services, where I continue to grow professionally. I recently completed a course in Women in Digital Business (WIDB), organized by NECA's Network of Entrepreneurial Women (NNEW), which significantly enhanced my understanding and skills in the digital business space. I am passionate about what I do and committed to excellence, continuous learning, and delivering outstanding service in every area of my work.",
    bg: "bg-orange-200",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 3,
    img: team2,
    name: "Ms Oluwaseun Akinwumi",
    role: "Lead Coordinator",
    desc: "Oluwaseun O. Akinwunmi is a versatile and dynamic professional with a diverse academic and creative background spanning the arts, communications, culinary innovation, and luxury event planning. She holds a first degree in English/Theatre Arts and an Honors degree in Public Relations and Advertisement from Cyprus International University. Her career spans healthcare, communications, and events, including roles at Investcorp HMO and Ultimate Health HMO. She's certified in French Pastry and Luxury Event Planning, and is also a partner at a travel agency. Oluwaseun brings over a decade of experience, creative flair, and strategic communication skills to every project, driven by teamwork, client impact, and a passion for memorable experiences.",
    bg: "bg-orange-200",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 4,
    img: team4,
    name: "Mr Taiwo Oladipupo",
    role: "Coordinator",
    desc: "Taiwo ensures every logistical detail is in place, making sure that all events are flawless from start to finish.",
    bg: "bg-cyan-200",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 5,
    img: team5,
    name: "Ms Dolapo Fashina",
    role: "Coordinator",
    desc: "Dolapo ensures the flawless execution of events, managing everything from start to finish with perfection.",
    bg: "bg-cyan-200",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 6,
    img: team3,
    name: "Ms Adebanke Ojo",
    role: "Executive Assistant / Social Media Officer",
    desc: "My name is Adebanke Ojo, born in Lagos State, Nigeria, in 1997. I hold a B.Sc. in Sociology from the University of Lagos and am a certified Human Resources Manager. I currently serve as a Personal Assistant and Social Media Handler at TWC Event Services, and also as the Admin Officer at Event Business Academy. With a strong passion for organization, creativity, and supporting others, I help bring visions to life through executive support, content management, and efficient operations. I'm driven by purpose, excellence, and a desire to make meaningful impact in every role I take on.",
    bg: "bg-orange-300",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
];

const Staff = () => {
  return (
    <section className="w-full py-16 px-6 sm:px-8 lg:px-20 bg-white text-neutral-800 font-serif">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500 tracking-tight drop-shadow-md">
          Meet Our Exceptional Team
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Passion, creativity, and dedication — the driving forces behind every event.
        </p>
      </div>

      {/* CEO */}
      <div className="max-w-4xl mx-auto mb-14">
        <div className={`rounded-lg p-6 shadow-xl transform hover:scale-105 transition duration-300 ${staffData[0].bg}`}>
          <div className="flex flex-col items-center gap-6">
            <img src={staffData[0].img} alt={staffData[0].name} className="w-48 h-48 object-cover rounded-full border-4 border-white mb-4" />
            <div className="text-center">
              <h3 className="text-3xl font-bold text-neutral-800">{staffData[0].name}</h3>
              <h4 className="text-xl font-medium text-gray-700">{staffData[0].role}</h4>
              <div className="overflow-y-auto h-40 max-h-96 px-6 mt-4 text-white text-base space-y-4">
                <p>{staffData[0].desc}</p>
              </div>
              <div className="flex gap-4 justify-center mt-4">
                <a href={staffData[0].facebook} className="bg-white p-2 rounded-full text-blue-500 text-2xl"><FaFacebook /></a>
                <a href={staffData[0].instagram} className="bg-white p-2 rounded-full text-pink-500 text-2xl"><FaInstagram /></a>
                <a href={staffData[0].linkedin} className="bg-white p-2 rounded-full text-blue-400 text-2xl"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Coordinators with scrollbars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-14 text-lg">
        {staffData.slice(1, 3).map((staff) => (
          <div key={staff.id} className={`rounded-lg p-6 shadow-md transform hover:scale-105 transition duration-300 ${staff.bg}`}>
            <img src={staff.img} alt={staff.name} className="w-40 h-52 object-cover rounded-full mx-auto border-4 border-white mb-4" />
            <div className="text-center">
              <h3 className="text-3xl sm:text-xl font-bold text-neutral-800">{staff.name}</h3>
              <h4 className="font-semibold text-2xl sm:text-lg text-gray-700">{staff.role}</h4>
            </div>
            <div className="overflow-y-auto h-40 max-h-96 px-4 mt-4 text-base space-y-4 text-neutral-700 text-center">
              <p>{staff.desc}</p>
            </div>
            <div className="flex justify-center gap-4 mt-4 text-2xl">
              <a href={staff.facebook} className="text-blue-500"><FaFacebook /></a>
              <a href={staff.instagram} className="text-pink-500"><FaInstagram /></a>
              <a href={staff.linkedin} className="text-blue-400"><FaLinkedinIn /></a>
            </div>
          </div>
        ))}
      </div>


      {/* Adebanke Section */}
      <div className="max-w-3xl mx-auto mb-14">
        <div className={`rounded-lg p-6 shadow-xl transform hover:scale-105 transition duration-300 ${staffData[5].bg}`}>
          <div className="flex flex-col items-center gap-6">
            <img src={staffData[5].img} alt={staffData[5].name} className="w-44 h-64 object-cover rounded-full border-4 border-white mb-4" />
            <div className="text-center">
              <h3 className="text-2xl font-bold text-neutral-800">{staffData[5].name}</h3>
              <h4 className="text-xl font-medium text-gray-700">{staffData[5].role}</h4>
              <div className="overflow-y-auto h-40 max-h-96 px-4 mt-4 text-base space-y-4 text-neutral-700 text-center">
                <p>{staffData[5].desc}</p>
              </div>
              <div className="flex gap-4 justify-center mt-4">
                <a href={staffData[5].facebook} className="bg-white p-2 rounded-full text-blue-500 text-xl"><FaFacebook /></a>
                <a href={staffData[5].instagram} className="bg-white p-2 rounded-full text-pink-500 text-xl"><FaInstagram /></a>
                <a href={staffData[5].linkedin} className="bg-white p-2 rounded-full text-blue-400 text-xl"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Staff */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-14 ">
            {staffData.slice(3, 5).map((staff) => (
            <div key={staff.id} className={`rounded-lg p-6 shadow-md text-center ${staff.bg}`}>
                <img
                src={staff.img}
                alt={staff.name}
                className="w-36 h-52 object-cover rounded-full mx-auto border-4 border-white mb-4"
                />
                <h3 className="text-3xl font-bold sm:text-xl">{staff.name}</h3>
                <h4 className="font-semibold text-2xl sm:text-lg">{staff.role}</h4>
                <p className="text-lg mt-2 sm:text-sm">{staff.desc}</p>
                <div className="flex justify-center gap-4 mt-3 text-2xl">
                <a href={staff.facebook} className="text-blue-500 "><FaFacebook /></a>
                <a href={staff.instagram} className="text-pink-500 "><FaInstagram /></a>
                <a href={staff.linkedin} className="text-blue-500 "><FaLinkedinIn /></a>
                </div>
            </div>
            ))}
        </div>
    </section>
  );
};

export default Staff;
