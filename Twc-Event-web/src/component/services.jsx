import { Link } from "react-router-dom";
import {
  ArrowRight,
  Pause,
  Play,
  Volume2,
  VolumeX,
  CalendarCheck,
  Users2,
  Briefcase,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import abou from "../assets/image/SEUN AND BAMIKE DECOR.mp4";

const Services = () => {
  const ref = useRef();
  const videoRef = useRef();
  const containerRef = useRef();
  const isInView = useInView(ref, { once: true });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -40]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Play/pause toggle
  const toggleVideo = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Mute/unmute toggle
  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Volume control
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  // Update progress bar as video plays
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  // Seek video when progress bar changes
  const handleSeek = (e) => {
    const video = videoRef.current;
    const newProgress = parseFloat(e.target.value);
    video.currentTime = (newProgress / 100) * video.duration;
    setProgress(newProgress);
  };

  // Fullscreen toggle
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      setIsFullscreen(false);
    }
  }, []);

  // Listen for fullscreen change (in case user presses ESC)
  useEffect(() => {
    const handler = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handler);
    return () => {
      document.removeEventListener("fullscreenchange", handler);
    };
  }, []);

  // Auto-hide controls after inactivity
  useEffect(() => {
    if (!showControls) return;

    const timeout = setTimeout(() => setShowControls(false), 3000);

    // Cleanup
    return () => clearTimeout(timeout);
  }, [showControls]);

  // Show controls on mouse move or touch
  const handleUserActivity = () => {
    setShowControls(true);
  };

  return (
    <section
      ref={ref}
      className="relative bg-orange-50 w-full overflow-hidden"
    >
      {/* Animated background shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-cyan-200 rounded-full opacity-30 animate-ping"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300 rounded-full opacity-20 animate-pulse"></div>

      <div className="flex flex-col lg:flex-row w-full h-full" ref={containerRef}>
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="bg-orange-500 text-white w-full lg:w-[420px] px-8 py-10 flex flex-col justify-center rounded-t-lg lg:rounded-l-sm lg:rounded-tr-none shadow-xl z-10 lg:h-[580px]"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-300 mb-6 leading-tight">
            Our Services
          </h1>

          <ul className="space-y-14">
            <li className="flex items-start space-x-4">
              <Users2 className="w-6 h-6 text-cyan-300 mt-1" />
              <div>
                <span className="text-xl font-semibold mb-2 block">
                  Social Events
                </span>
                <Link
                  to="/social"
                  className="inline-flex items-center cursor-pointer px-5 py-2 text-sm bg-orange-700 text-white font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 group"
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
                  to="/Corporate"
                  className="inline-flex cursor-pointer items-center px-5 py-2 text-sm bg-orange-700 text-white font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 group"
                >
                  Explore Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Video Section */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full lg:w-[75%] h-[300px] md:h-[500px] lg:h-[695px] overflow-hidden group rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none"
          onMouseMove={handleUserActivity}
          onTouchStart={handleUserActivity}
        >
          <video
            ref={videoRef}
            src={abou}
            className="w-full h-full object-cover"
            muted={isMuted}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onClick={toggleVideo}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-200/60 to-transparent z-10 rounded-b-2xl lg:rounded-r-2xl" />

          {/* Overlay content */}
          <div className="absolute bottom-28 left-8 z-20 text-orange-900 max-w-2xl space-y-3">
            <h2 className="text-3xl md:text-5xl text-white font-bold drop-shadow-lg">
              Moments that Last Forever
            </h2>
            <p className="text-base md:text-xl text-white font-medium drop-shadow-sm">
              We help you plan and execute unforgettable experiences—whether it's a business conference or a vibrant party.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center cursor-pointer px-5 py-2 mt-2 text-sm font-semibold bg-cyan-600 hover:bg-cyan-500 text-white rounded-full shadow-lg transition-all duration-300"
            >
              <CalendarCheck className="w-4 h-4 mr-2" />
              Book Now
            </Link>
          </div>


          {/* Video Controls - auto-hide */}
          {showControls && (
            <div className="absolute bottom-4 right-4 left-4 flex flex-col space-y-2 bg-orange/40 p-3 rounded-xl backdrop-blur-sm z-30">
              {/* Progress Bar */}
              <input
                type="range"
                min={0}
                max={100}
                step={0.1}
                value={progress}
                onChange={handleSeek}
                className="w-full h-1 rounded-lg cursor-pointer accent-cyan-500"
                aria-label="Video progress bar"
              />

              <div className="flex items-center justify-between gap-2">
                {/* Play/Pause */}
                <button
                  onClick={toggleVideo}
                  className="text-white p-2 hover:text-cyan-400 transition-colors"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="w-10 h-10" />
                  ) : (
                    <Play className="w-10 h-10" />
                  )}
                </button>

                {/* Mute/Unmute */}
                <button
                  onClick={toggleMute}
                  className="text-white p-2 hover:text-cyan-400 transition-colors"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <VolumeX className="w-10 h-10" />
                  ) : (
                    <Volume2 className="w-10 h-10" />
                  )}
                </button>

                {/* Volume Slider */}
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-1 rounded-lg cursor-pointer accent-cyan-500"
                  aria-label="Volume control"
                />

                {/* Fullscreen Toggle */}
                <button
                  onClick={toggleFullscreen}
                  className="text-white p-2 hover:text-cyan-400 transition-colors"
                  aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-5 h-5" />
                  ) : (
                    <Maximize2 className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
