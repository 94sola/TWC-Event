import { useState, useEffect, useRef, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import { FaPauseCircle, FaPlayCircle, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import vid from "../assets/image/TWC vid.mp4";
import vid2 from "../assets/image/Akinbola+Sylvia vid.mp4";
import birthday from "../assets/image/birthday.jpg";
import Burial from "../assets/image/burial.jpg";
import corporate from "../assets/image/corporatre.jpg";

const testimonials = [
  {
    type: "video",
    src: vid2,
    name: "Mr and Mrs. Abimbola",
    eventType: "Wedding",
    message:
      "TWC made our wedding absolutely magical! From securing the most beautiful hall that suited our style, to coordinating flawlessly with the decorator, caterers, and even handling the DJ and lighting with precision, it was a dream come true. The entire team was incredibly professional and worked tirelessly to ensure everything was on point. Our guests were blown away by the ambience and the flow of the event. We truly felt like royalty!",
  },
  {
    type: "video",
    src: vid,
    name: "Mr and Mrs. Akinbola Family",
    eventType: "Wedding",
    message:
      "We are grateful to TWC for creating such a memorable event for us. From planning logistics, vendor coordination, and flawless setup to ensuring the timeline was strictly followed, the experience was stress-free. The team was respectful, attentive, and always available to support. Even the entertainment, including the MC and DJ, were top-class. We highly recommend them!",
  },
  {
    type: "image",
    src: birthday,
    name: "Mr Damilola",
    eventType: "Birthday",
    message:
      "My birthday party was a dream come true! TWC brought my vision to life — from organizing the decor, sound, lighting, to selecting top-notch vendors. They even helped with creative games and coordinated all the surprises! It was fun, lively, and unforgettable. The team’s energy and vibe were everything.",
  },
  {
    type: "image",
    src: Burial,
    name: " The Olabopo Lawanson Family",
    eventType: "Burial",
    message:
      "Thank you, TWC, for organizing a befitting burial ceremony. Every single detail, from the hall decoration to the program coordination, was managed excellently. The ushering, protocol handling, and reception setup were seamless. You made it a celebration of life, not just a ceremony.",
  },
  {
    type: "image",
    src: corporate,
    name: "CEO, TechFlow Inc.",
    eventType: "Corporate",
    message:
      "TWC flawlessly executed our corporate retreat. The planning was meticulous, and the ambiance was spot on. From arranging high-end conference spaces to collaborating with vendors for catering, multimedia, and entertainment, they delivered beyond expectations. It was not only professional but also engaging and inspiring.",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);
  const total = testimonials.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
    setIsPlaying(true);
  }, [total]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
    setIsPlaying(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    const handleActivity = () => {
      setShowControls(true);
      clearTimeout(window.controlsTimeout);
      window.controlsTimeout = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    };

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("touchstart", handleActivity);

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("touchstart", handleActivity);
      clearTimeout(window.controlsTimeout);
    };
  }, []);

  const { type, src, name, message, eventType } = testimonials[current];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-50 to-yellow-100 py-12 px-4 md:px-20 transition-all duration-700 ease-in-out overflow-hidden relative"
      {...swipeHandlers}
    >
      <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-12 drop-shadow-sm animate-fadeIn">
        ❤️ Heartfelt Testimonials
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="relative w-full md:w-1/2 rounded-3xl overflow-hidden shadow-xl">
          {type === "video" ? (
            <div className="relative">
              <video
                src={src}
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                className="w-full h-auto object-cover rounded-2xl"
              />
              <AnimatePresence>
                {showControls && (
                  <motion.button
                    key="play-pause"
                    onClick={toggleVideo}
                    aria-label={isPlaying ? "Pause Video" : "Play Video"}
                    title={isPlaying ? "Pause" : "Play"}
                    className="absolute inset-0 flex items-center justify-center text-white text-5xl bg-black/30 hover:bg-black/50 transition rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <img
              src={src}
              alt={name}
              className="w-full h-auto object-cover rounded-2xl"
            />
          )}
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left px-20 space-y-6 animate-slideIn">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-700">{name}</h2>

          <div className="border p-4 rounded-xl bg-white shadow-lg h-[400px] overflow-y-auto">
            <h3 className="text-2xl text-center text-cyan-500 font-semibold mb-4">{eventType} Event</h3>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">{message}</p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showControls && (
          <motion.div
            className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={prevSlide}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 md:px-6 py-2 rounded-full shadow-lg text-lg md:text-xl transition duration-300"
              aria-label="Previous Testimonial"
              title="Previous"
            >
              ◀ Prev
            </button>

            <button
              onClick={nextSlide}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 md:px-6 py-2 rounded-full shadow-lg text-lg md:text-xl transition duration-300"
              aria-label="Next Testimonial"
              title="Next"
            >
              Next ▶
            </button>

            <button
              onClick={toggleMute}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 md:px-6 py-2 rounded-full shadow-lg text-lg md:text-xl transition duration-300 flex items-center gap-2"
              aria-label={isMuted ? "Unmute Video" : "Mute Video"}
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Testimonial;
