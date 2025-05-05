
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import namingCeremonyImage1 from "../assets/image/naming.jpg";
import namingCeremonyImage2 from "../assets/image/twc11.jpg";
import namingCeremonyImage3 from "../assets/image/twc.jpg";

const addOns = [
  "Welcome Reception Setup",
  "Cultural Dance Performance",
  "Traditional Outfit Design",
  "Baby Blessing Ceremony",
  "Personalized Cake Design",
  "Catering & Refreshments",
  "Live Music Entertainment",
  "Gift Presentation Coordination",
];

const namingCeremonyPackages = [
  {
    id: "basic",
    title: "Simple Blessing Ceremony",
    image: namingCeremonyImage1,
    summary:
      "A simple and intimate naming ceremony, perfect for small gatherings and close family.",
    features: [
      {
        title: "Ceremony Consultation",
        description:
          "We’ll guide you through the planning process and help tailor the perfect ceremony for your baby.",
      },
      {
        title: "Vendor Coordination",
        description:
          "We ensure all vendors are coordinated, so you can focus on celebrating with your loved ones.",
      },
      {
        title: "Event Logistics",
        description:
          "Our team handles all logistics to ensure a smooth event from start to finish.",
      },
    ],
  },
  {
    id: "partial",
    title: "Personalized Blessing Ceremony",
    image: namingCeremonyImage2,
    summary:
      "A balanced ceremony with more personalized touches and cultural elements, suitable for medium-sized gatherings.",
    features: [
      {
        title: "Themed Ceremony Planning",
        description:
          "We help you create a unique event with cultural elements and a theme that reflects your family's traditions.",
      },
      {
        title: "Baby Blessing & Naming Rituals",
        description:
          "Our team guides you through meaningful naming rituals and baby blessings tailored to your beliefs.",
      },
      {
        title: "Partial Vendor Support",
        description:
          "We coordinate specific aspects like catering, floral arrangements, and entertainment.",
      },
    ],
  },
  {
    id: "full",
    title: "Complete Naming Ceremony",
    image: namingCeremonyImage3,
    summary:
      "A grand, unforgettable naming ceremony designed to celebrate your baby’s arrival with family and friends.",
    features: [
      {
        title: "Venue Selection & Styling",
        description:
          "We help you find the perfect venue and design it with meaningful decor that complements your family traditions.",
      },
      {
        title: "Complete Vendor Management",
        description:
          "We manage every aspect of the event, from catering to entertainment, ensuring the ceremony runs smoothly.",
      },
      {
        title: "Full Event Coordination",
        description:
          "From invitations to event flow, we ensure everything is planned to perfection.",
      },
      {
        title: "Personalized Ceremony Video Production",
        description:
          "We create a beautiful video tribute to capture the essence of the naming ceremony and the joy of the occasion.",
      },
    ],
  },
];

const NamingCeremony = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [selectedAddOns, setSelectedAddOns] = useState({});

  const toggleAccordion = (pkgId, index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [pkgId]: {
        ...prev[pkgId],
        [index]: !prev[pkgId]?.[index],
      },
    }));
  };

  const handleAddonChange = (pkgId, addon) => {
    setSelectedAddOns((prev) => {
      const current = prev[pkgId] || [];
      return {
        ...prev,
        [pkgId]: current.includes(addon)
          ? current.filter((item) => item !== addon)
          : [...current, addon],
      };
    });
  };

  return (
    <div className="bg-gradient-to-tr from-orange-100 via-orange-200 to-pink-200 px-4 sm:px-10 lg:px-20 py-14">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-orange-800 drop-shadow-xl">
          Naming Ceremony Packages
        </h1>
        <p className="text-orange-700 max-w-xl mx-auto mt-2 mb-6">
          Celebrate your baby's arrival with a beautiful, memorable naming ceremony. Choose from a variety of packages to suit your needs.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-orange-800 text-white px-6 py-3 rounded-full shadow-xl hover:bg-white hover:text-orange-800 hover:scale-110 transition-all duration-300 ease-in-out"
        >
          Plan Now
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {namingCeremonyPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-orange-300 transition-all duration-300 flex flex-col items-center"
          >
            <div className="relative w-full mb-4 rounded-xl overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-56 object-cover rounded-xl"
              />
            </div>

            <h2 className="text-2xl font-bold text-center text-orange-800 mb-2 drop-shadow">{pkg.title}</h2>
            <p className="text-center text-orange-700 mb-4 italic">{pkg.summary}</p>

            <div className="w-full divide-y divide-orange-200 mb-4">
              {pkg.features.map((item, index) => (
                <div key={index} className="py-3">
                  <button
                    onClick={() => toggleAccordion(pkg.id, index)}
                    className="w-full flex justify-between items-center text-left text-lg font-medium text-orange-700 hover:text-orange-900"
                  >
                    {item.title}
                    {expandedItems[pkg.id]?.[index] ? <FiMinus /> : <FiPlus />}
                  </button>
                  {expandedItems[pkg.id]?.[index] && (
                    <p className="text-orange-600 mt-2 text-sm pl-2">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="w-full mt-4">
              <h3 className="text-lg font-semibold text-orange-700 mb-2">
                Optional Add-Ons:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 text-orange-700 gap-2 text-sm">
                {addOns.map((addon) => (
                  <label key={addon} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedAddOns[pkg.id]?.includes(addon) || false}
                      onChange={() => handleAddonChange(pkg.id, addon)}
                      className="accent-orange-500"
                    />
                    <span>{addon}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NamingCeremony;
 