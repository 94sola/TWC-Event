import React, { useState, useEffect } from "react";
import ceo from "../assets/image/mrskk.jpg";
import award1 from "../assets/image/award.jpg";
import award2 from "../assets/image/award1.jpg";
import award3 from "../assets/image/award2.jpg";
import award4 from "../assets/image/award4.jpg";
import twc from "../assets/image/twc12.jpg";

const Twc = () => {
  const awards = [award1, award2, award3, award4];
  const [scrollIndex, setScrollIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1) % awards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [awards.length]);

  return (
    <section className="bg-white py-10 px-6 md:px-20 font-serif">
      <h1 className="text-6xl font-bold text-center text-orange-500 mb-10">
        About <span className="text-cyan-500">TWC</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            src={ceo}
            alt="CEO"
            className="rounded-3xl shadow-lg object-cover"
          />
          <h2 className="text-3xl font-semibold text-orange-600 mt-4">
            Mrs. Adefunke Kuyoro
          </h2>
          <p className="text-lg text-gray-500">
            Chief Executive Officer, TWC Event Planning Services
          </p>
        </div>

        <div className="w-full md:w-1/2 text-gray-700 space-y-5 relative">
          <img
            src={twc}
            alt="TWC"
            className="absolute top-0 right-0 w-36 md:w-44 rotate-6 opacity-40 rounded-xl shadow-md"
          />

          <h2 className="text-5xl font-bold text-orange-600">CEO Biography</h2>

          <div className="flex flex-wrap gap-3 mt-2 mb-4 text-3xl font-bold">
            <span className="text-orange-500 animate-fade-in delay-[100ms] hover:animate-float">
              Excellence.
            </span>
            <span className="text-pink-500 animate-fade-in delay-[300ms] hover:animate-float glow">
              Finesse.
            </span>
            <span className="text-cyan-500 animate-fade-in delay-[500ms] hover:animate-float">
              Distinction.
            </span>
          </div>

          <p className="text-lg leading-relaxed">
            Mrs. Adefunke Kuyoro is the heartbeat of TWC — a leader known for blending depth with strategy. Her decade-long journey in the world of events has transformed aspirations into timeless memories. From grand celebrations to intimate moments, her approach combines creativity, structure, and sincerity.
          </p>
          <p className="text-lg leading-relaxed">
            With a sterling reputation and unwavering commitment, Mrs. Kuyoro has positioned TWC as a symbol of trust. Every event curated under her direction is poised, personal, and impactful — a celebration with purpose.
          </p>
          <p className="text-lg font-medium italic text-gray-500">
            "We don’t just plan events — we craft unforgettable experiences."
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-6">
          Awards & Recognition
        </h2>
        <p className="text-center text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
          Mrs. Kuyoro has received numerous prestigious awards in the event planning industry, recognizing her dedication to excellence and innovation.
        </p>

        <div
          className="flex overflow-x-auto space-x-6 scrollbar-hide px-2 md:px-10 transition-transform duration-700"
          style={{ transform: `translateX(-${scrollIndex * 300}px)` }}
        >
          {awards.map((award, index) => (
            <div
              key={index}
              className="min-w-[250px] md:min-w-[300px] bg-white shadow-md rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => {
                setSelectedAward(award);
                setModalOpen(true);
              }}
            >
              <img
                src={award}
                alt={`Award ${index + 1}`}
                className="object-cover w-full h-40"
              />
            </div>
          ))}
        </div>

        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
                onClick={() => setModalOpen(false)}
              >
                &times;
              </button>
              <img
                src={selectedAward}
                alt="Award Enlarged"
                className="rounded-xl w-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Twc;
