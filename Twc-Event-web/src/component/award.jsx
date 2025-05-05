import awardVid2 from "../assets/image/award vid.mp4";
import awardVid3 from "../assets/image/Award vide.mp4";
import awardVid1 from "../assets/image/award vid1.mp4";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import {
  GiLaurelCrown,
  GiMicrophone,
  GiGiftOfKnowledge,
  GiPartyPopper,
  GiChampagneCork,
  GiFireworkRocket
} from "react-icons/gi";
import {
  FaBroadcastTower,
  FaQrcode,
  FaAward,
  FaCameraRetro,
  FaCommentsDollar,
  FaCamera,
  FaRegHandshake,
  FaGifts,
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaForward,
  FaBackward
} from "react-icons/fa";
import {
  MdFastfood,
  MdVideoCall,
  MdPhotoCameraFront,
  MdCardMembership
} from "react-icons/md";

const packages = [
  {
    title: "Classic Award Package",
    description:
      "Essential ceremony planning including stage setup, award logistics, and basic branding.",
    features: [
      { icon: <FaAward />, title: "Stage Setup", description: "Customizable stage design with branding." },
      { icon: <FaRegHandshake />, title: "Award Coordination", description: "Managing nominees, trophies, and presentations." },
      { icon: <MdCardMembership />, title: "Guest Invitations", description: "Coordinated digital invites and RSVP tracking." },
      { icon: <FaCameraRetro />, title: "On-Site Interviews", description: "Red carpet interviews and live feedback." },
      { icon: <FaQrcode />, title: "Interactive Voting", description: "Audience voting via QR code or event app." },
      { icon: <FaCommentsDollar />, title: "Customized Invitations", description: "E-invites or luxury printed invites." },
    ],
    video: awardVid1
  },
  {
    title: "Prestige Award Package",
    description:
      "Premium planning with live streaming, entertainment, and interactive elements.",
    features: [
      { icon: <GiMicrophone />, title: "Live Entertainment", description: "Top musicians, comedians, or spoken word artists." },
      { icon: <FaBroadcastTower />, title: "Live Broadcast", description: "Real-time live stream with branding overlays." },
      { icon: <MdVideoCall />, title: "Awardee Highlight Reels", description: "Short segments on each nominee’s journey." },
      { icon: <MdPhotoCameraFront />, title: "Red Carpet Experience", description: "Professional photo & video with branded backdrop." },
      { icon: <FaQrcode />, title: "Interactive Voting", description: "Audience voting via QR code or event app." },
      { icon: <FaCommentsDollar />, title: "Customized Invitations", description: "E-invites or luxury printed invites." },
      { icon: <FaCameraRetro />, title: "On-Site Interviews", description: "Red carpet interviews and live feedback." },
      { icon: <FaGifts />, title: "VIP Giveaways", description: "Exclusive gifts or merchandise for select guests." },
      { icon: <FaCamera />, title: "360 Video Booth", description: "Immersive slow-mo booth experience for guests." }
    ],
    video: awardVid2
  },
  {
    title: "Royal Award Package",
    description:
      "Luxury package with celebrity hosts, aerial coverage, and VIP experiences.",
    features: [
      { icon: <GiLaurelCrown />, title: "Full Event Branding", description: "Stage, badges, video intros, photo booth setup." },
      { icon: <MdFastfood />, title: "Catering & Drinks", description: "Exquisite meals and beverage service for VIPs." },
      { icon: <GiMicrophone />, title: "Celebrity Host & DJ", description: "Top entertainers and lively music experience." },
      { icon: <MdVideoCall />, title: "Post-Event Media Pack", description: "Recap video and professional photo album." },
      { icon: <FaCamera />, title: "Drone Coverage", description: "Aerial shots of venue and key ceremony moments." },
      { icon: <FaRegHandshake />, title: "VIP Lounge Access", description: "Private space for high-profile guests." },
      { icon: <FaGifts />, title: "Luxury Gift Bags", description: "Premium branded gift packs for attendees." },
      { icon: <GiFireworkRocket />, title: "Fireworks Finale", description: "Grand fireworks display to end the night." },
      { icon: <FaBroadcastTower />, title: "Media Coverage", description: "Live and post-event media exposure." },
      { icon: <FaCameraRetro />, title: "Documentary Filming", description: "Full professional behind-the-scenes docu-style video." }
    ],
    video: awardVid3
  }
];

const AwardPackages = () => {
  const videoRefs = useRef([]);

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    video.muted = !video.muted;
  };

  const skipTime = (index, seconds) => {
    const video = videoRefs.current[index];
    video.currentTime += seconds;
  };

  return (
    <div className="py-16 px-4 sm:px-10 lg:px-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-8xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4"
        >
          <Sparkles className="inline-block w-14 h-14 text-orange-500 mr-2" /> Award Packages
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-600 max-w-4xl mx-auto mb-10"
        >
          Choose from our carefully crafted packages tailored to suit any award ceremony style and scale.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="w-full relative rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300"
            >
              <div className="relative group">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={pkg.video}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-60 object-cover"
                />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 items-center bg-black/50 p-2 rounded-full">
                  <button onClick={() => togglePlay(index)} className="text-white px-4"><FaPlay /></button>
                  <button onClick={() => toggleMute(index)} className="text-white px-4"><FaVolumeMute /></button>
                  <button onClick={() => skipTime(index, -5)} className="text-white px-2"><FaBackward /></button>
                  <button onClick={() => skipTime(index, 5)} className="text-white px-2"><FaForward /></button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <ul className="space-y-3 text-left">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-orange-500 mt-1 mr-2">{feature.icon}</span>
                      <div>
                        <p className="font-medium text-gray-800">{feature.title}</p>
                        <p className="text-sm text-gray-500">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardPackages;
