import { useState } from "react"; 
import vid from "../assets/image/TWC vid.mp4";
import vid2 from "../assets/image/Akinbola+Sylvia vid.mp4";
import vid1 from "../assets/image/twc vid1.mp4";
import twc1 from "../assets/image/5Z0A9322.JPG.jpg";
import twc2 from "../assets/image/A (192).jpg";
import twc3 from "../assets/image/A (20).jpg";
import twc4 from "../assets/image/A (216).jpg";
import twc5 from "../assets/image/A (217).jpg";
import twc6 from "../assets/image/award.jpg";
import twc7 from "../assets/image/birthday.jpg";
import twc8 from "../assets/image/burial.jpg";
import twc9 from "../assets/image/corporatre.jpg";
import twc10 from "../assets/image/funeral.jpg";
import twc11 from "../assets/image/funeral2.jpg";
import twc12 from "../assets/image/IMG-20240405-WA0004.jpg";
import twc13 from "../assets/image/IMG-20240416-WA0030.jpg";
import twc14 from "../assets/image/IMG-20240811-WA0002.jpg";
import twc15 from "../assets/image/IMG_1904.jpg";
import twc16 from "../assets/image/IMG_20241206_090130_038.webp";
import twc17 from "../assets/image/IMG_4107.jpg";
import twc18 from "../assets/image/IMG_4111.jpg";
import twc19 from "../assets/image/IMG_4173.jpg";
import twc20 from "../assets/image/IMG_4181.jpg";
import twc21 from "../assets/image/IMG_4183.jpg";
import twc22 from "../assets/image/Modupe & Abimbola Wedding-2110.jpg";
import twc23 from "../assets/image/Modupe & Abimbola Wedding-2743.jpg";
import twc24 from "../assets/image/Modupe & Abimbola Wedding-2801.jpg";
import twc25 from "../assets/image/twc31.JPG";
import twc26 from "../assets/image/SODIPO(b) (2).jpg";
import twc27 from "../assets/image/SODIPO(b) (5).jpg";
//import twc28 from "../assets/image/twc36.JPG";
//import twc29 from "../assets/image/twc37.jpg";
import twc30 from "../assets/image/twc-a.jpg";
import twc31 from "../assets/image/twc.jpg";
import twc32 from "../assets/image/twc1.jpg";
import twc33 from "../assets/image/twc10.jpg";
import twc34 from "../assets/image/twc11.jpg";
import twc35 from "../assets/image/twc12.jpg";
import twc36 from "../assets/image/twc13.jpg";
import twc37 from "../assets/image/twc14.jpg";
import twc38 from "../assets/image/twc3.jpg";
import twc39 from "../assets/image/twc4.jpg";
import twc40 from "../assets/image/twc5.jpg";
import twc41 from "../assets/image/twc6.jpg";
import twc42 from "../assets/image/twc7.jpg";
import twc43 from "../assets/image/twc8.jpg";
import twc44 from "../assets/image/twc9.jpg";
import twc45 from "../assets/image/twc16.jpg";
import twc46 from "../assets/image/twc17.JPG";
import twc47 from "../assets/image/twc18.JPG";
import twc48 from "../assets/image/twc19.JPG";
import twc49 from "../assets/image/twc21.JPG";
import twc50 from "../assets/image/twc22.JPG";
import twc51 from "../assets/image/twc23.JPG";
import twc52 from "../assets/image/twc24.JPG";
import twc53 from "../assets/image/twc25.JPG";
import twc54 from "../assets/image/twc26.JPG";
import twc55 from "../assets/image/twc27.JPG";
import twc56 from "../assets/image/twc28.JPG";
import twc57 from "../assets/image/twc29.JPG";
import twc58 from "../assets/image/twc30.JPG";
import twc59 from "../assets/image/twc20.JPG";
import twc60 from "../assets/image/twc37.JPG";
import twc61 from "../assets/image/twc33.JPG";
import twc62 from "../assets/image/twc34.JPG";
import twc63 from "../assets/image/twc36.JPG";
import twc64 from "../assets/image/twc32.JPG";


const allImages = [
  { src: twc1, category: "Weddings" },
  { src: twc2, category: "Corporate" },
  { src: twc3, category: "Corporate" },
  { src: twc4, category: "Corporate" },
  { src: twc5, category: "Corporate" },
  { src: twc6, category: "Birthdays" },
  { src: twc7, category: "Birthdays" },
  { src: twc8, category: "Funerals" },
  { src: twc9, category: "Corporate" },
  { src: twc10, category: "Funerals" },
  { src: twc11, category: "Funerals" },
  { src: twc12, category: "Birthdays" },
  { src: twc13, category: "Weddings" },
  { src: twc14, category: "Weddings" },
  { src: twc15, category: "Birthdays" },
  { src: twc16, category: "Weddings" },
  { src: twc17, category: "Funerals" },
  { src: twc18, category: "Corporate" },
  { src: twc19, category: "Weddings" },
  { src: twc20, category: "Weddings" },
  { src: twc21, category: "Funerals" },
  { src: twc22, category: "Weddings" },
  { src: twc23, category: "Weddings" },
  { src: twc24, category: "Weddings" },
  { src: twc25, category: "Weddings" },
  { src: twc26, category: "Funerals" },
  { src: twc27, category: "Funerals" },
  //{ src: twc28, category: "Corporate" },
 // { src: twc29, category: "Corporate" },
  { src: twc30, category: "Corporate" },
  { src: twc31, category: "Birthdays" },
  { src: twc32, category: "Weddings" },
  { src: twc33, category: "Corporate" },
  { src: twc34, category: "Birthdays" },
  { src: twc35, category: "Birthdays" },
  { src: twc36, category: "Birthdays" },
  { src: twc37, category: "Corporate" },
  { src: twc38, category: "Weddings" },
  { src: twc39, category: "Birthdays" },
  { src: twc40, category: "Corporate" },
  { src: twc41, category: "Birthdays" },
  { src: twc42, category: "Weddings" },
  { src: twc43, category: "Weddings" },
  { src: twc44, category: "Weddings" },
  { src: twc45, category: "Corporate" },
  { src: twc46, category: "Weddings" },
  { src: twc47, category: "Weddings" },
  { src: twc48, category: "Weddings" },
  { src: twc49, category: "Weddings" },
  { src: twc50, category: "Weddings" },
  { src: twc51, category: "Weddings" },
  { src: twc52, category: "Weddings" },
  { src: twc53, category: "Weddings" },
  { src: twc54, category: "Weddings" },
  { src: twc55, category: "Weddings" },
  { src: twc56, category: "Weddings" },
  { src: twc57, category: "Weddings" },
  { src: twc58, category: "Weddings" },
  { src: twc59, category: "Weddings" },
  { src: twc60, category: "Weddings" },
  { src: twc61, category: "Weddings" },
  { src: twc62, category: "Weddings" },
  { src: twc63, category: "Weddings" },
  { src: twc64, category: "Weddings" },
];

const categories = ["All", "Weddings", "Birthdays", "Corporate", "Funerals"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [enlargedImg, setEnlargedImg] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="px-4 py-8 max-w-screen-xl mx-auto">
      <h2 className="text-3xl md:text-5xl text-orange-600 font-extrabold text-center mb-6">
        🎉 Gallery 🎊
      </h2>
      <p className="text-center text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
        A glimpse into our vibrant events — weddings, birthdays, corporate celebrations, and more!
      </p>

      {/* Category buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border font-semibold text-sm ${
              selectedCategory === cat
                ? "bg-orange-500 text-white"
                : "bg-white border-orange-300 text-orange-600"
            } hover:bg-orange-400 hover:text-white transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Top video for Weddings and All */}
      {(selectedCategory === "Weddings" || selectedCategory === "All") && (
        <video
          src={vid}
          className="w-full rounded-xl h-[700px] shadow-lg mb-6"
          controls
        />
      )}

      {/* Image grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            onClick={() => setEnlargedImg(img.src)}
            alt={`TWC Event ${i + 1}`}
            className="rounded-xl object-cover w-full h-40 md:h-48 hover:scale-105 transition duration-300 cursor-pointer shadow-md"
          />
        ))}
      </div>

      {/* Enlarged view */}
      {enlargedImg && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setEnlargedImg(null)}
        >
          <img
            src={enlargedImg}
            alt="Enlarged"
            className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl"
          />
        </div>
      )}

      {/* Funeral video for Funeral and All */}
      {(selectedCategory === "Funerals" || selectedCategory === "All") && (
        <video
          src={vid1}
          className="w-full rounded-xl h-[500px] shadow-lg mt-10"
          controls
        />
      )}

       {/* Top video for Weddings and All */}
       {(selectedCategory === "Weddings" || selectedCategory === "All") && (
        <video
          src={vid2}
          className="w-full rounded-xl h-[700px] shadow-lg mb-6"
          controls
        />
      )}
    </div>

  );
};

export default Gallery;
