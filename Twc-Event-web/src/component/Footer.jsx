import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [email, setEmail] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add API or email list logic here
    alert(`Thanks for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <footer className="bg-orange-500 text-black py-12 px-6 md:px-12 lg:px-14 font-sans">
     
      <div className="max-w-9xl bg-white text-black p-8 rounded-lg shadow-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Logo & Description */}
        <div data-aos="fade-up">
          <Link to="/" className="block">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-32 object-contain mx-auto md:mx-0"
            />
            <h5 className="text-xl font-semibold text-cyan-500 mt-3">
              TWC Event
            </h5>
          </Link>
          <p className="text-md  text-gray-900 mt-3">
            Whether it's an elegant wedding, a lively birthday celebration, a heartfelt naming ceremony, or a high-profile corporate conference, we bring creativity, professionalism, and flair to every detail. With a deep commitment to excellence and a passion for perfection, we ensure your event not only meets expectations but stands out with timeless class and charm.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-5 mt-20" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-bold text-cyan-500">Contact Info</h3>
          <div className="flex items-start gap-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-cyan-500" />
            <p>46 Ajanaku Str, Awuse Estate, Opebi, Ikeja, Lagos, Nigeria.</p>
          </div>
          <div className="flex items-start gap-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-cyan-500" />
            <p>
              <a href="mailto:twceventservices@gmail.com" className="hover:underline">
                twceventservices@gmail.com
              </a>
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FontAwesomeIcon icon={faPhone} className="text-cyan-500" />
            <p>
              <a href="tel:+2348001234567" className="hover:underline">
                +234 800 123 4567
              </a>
            </p>
          </div>
        </div>

        {/* Newsletter + Socials */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-xl font-bold text-cyan-500 mb-4">Subscribe to Newsletter</h3>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="p-3 rounded-lg text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
              type="submit"
              className="bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-8">
            <h4 className="text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex flex-col items-start gap-4">
              {[
                { icon: faFacebookF, label: "Facebook", color: "blue-600", link: "https://facebook.com" },
                { icon: faTwitter, label: "Twitter", color: "blue-400", link: "https://twitter.com" },
                { icon: faInstagram, label: "Instagram", color: "pink-500", link: "https://www.instagram.com/twcevents?igsh=ZzljeW96Y2U4Y2N5" },
                { icon: faLinkedinIn, label: "LinkedIn", color: "blue-700", link: "https://linkedin.com" },
                { icon: faWhatsapp, label: "WhatsApp", color: "green-500", link: "https://wa.me/+2348001234567" }
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-${s.color} text-lg hover:text-white hover:bg-${s.color} p-2 rounded-full transition duration-300 animate-bounce-on-hover`}
                  aria-label={s.label}
                >
                  <FontAwesomeIcon icon={s.icon} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8 border-cyan-500" data-aos="fade-in" />

      <div className="text-center space-y-4 text-sm md:text-base dark:text-black">
        <p>&copy; {year} TWC Event Planning Services. All rights reserved.</p>
        <p>Designed and Developed by the TWC Team — crafting creativity with excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
