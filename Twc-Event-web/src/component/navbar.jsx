
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import logo from "../assets/image/logo.png"; // Adjust path if needed

const Nav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (!isMobileMenuOpen) setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = [
    {
      title: "Services",
      links: [
        {
          label: "Social Event", link: "/sociall",
          submenu: [
            { label: "Wedding", link: "/wedding" },
            { label: "Birthday", link: "/birthday" },
            { label: "House Warming", link: "/housewarming" },
            { label: "Naming Ceremony", link: "/naming" },
            { label: "Funeral", link: "/Funeral" },
            { label: "Coronation ", link: "/coronation" },
          ],
        },
        {
          label: "Corporate Event" , link: "/Corporate", 
          submenu: [
            { label: "Conferences", link: "/conference" },
            { label: "End of Year Party", link: "/endyearparty" },
            { label: "Product Launching", link: "/productlaunch" },
            { label: "Networking Events", link: "/networking" },
            { label: "Award cermony", link: "/Award" },
          ],
        },
      ],
    },
    {
      title: "Team",
      links: [
        { label: "Our Team", link: "/teams" },
        { label: "Testimonials", link: "/testimonial" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "Company Info", link: "/History" },
        { label: "FAQs", link: "/abouttwc" },
      ],
    },
  ];

  return (
    <header className="bg-white font-sans shadow-md sticky top-0 left-0 w-full z-50 border-b px-6 md:px-12 border-orange-500">
      <div className="flex items-center justify-between py-2 md:py-4">
        {/* Logo */}
        <Link to="/" onClick={closeMobileMenu} className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="h-20 w-32 object-contain" />
          <h5 className="text-base md:text-lg font-semibold text-cyan-500 mt-1">TWC Event</h5>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center text-orange-500">
          <ul className="flex gap-6 text-lg font-medium items-center">
            <li>
              <Link to="/" className="hover:text-cyan-500">Home</Link>
            </li>
            {menuItems.map((menu, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(menu.title)}
                  className="flex items-center gap-2 hover:text-cyan-400"
                >
                  {menu.title}
                  <FaChevronDown className={`${activeDropdown === menu.title ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === menu.title && (
                  <ul className="absolute top-full left-0 mt-1 py-1 shadow-lg rounded-lg w-56 bg-white z-10">
                    {menu.links.map((item, i) => (
                      <li key={i} className="group relative">
                        <Link
                          to={item.link || "#"}
                          className="block px-4 py-2 hover:bg-cyan-400 hover:text-orange-600 rounded-lg"
                          onClick={item.submenu ? (e) => e.preventDefault() : closeMobileMenu}
                        >
                          {item.label}
                          {item.submenu && <FaChevronDown className="inline ml-2 text-xs" />}
                        </Link>
                        {item.submenu && (
                          <ul className="absolute left-full top-0 mt-0 ml-1 py-1 bg-white rounded-lg shadow-md hidden group-hover:block">
                            {item.submenu.map((sub, j) => (
                              <li key={j} className="px-4 py-2 hover:bg-cyan-300 hover:text-white whitespace-nowrap">
                                <Link to={sub.link} onClick={closeMobileMenu}>{sub.label}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link to="/Gallery" className="hover:text-cyan-400">Gallery</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-cyan-400">Blog</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 text-orange-500 rounded-lg w-64"
          />
          <FaSearch className="ml-2 text-cyan-500" />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="text-3xl md:hidden text-cyan-500">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-orange-500 shadow-lg px-6 py-4 flex flex-col w-full border-t border-orange-300">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded-md w-full mb-4"
          />
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li>
              <Link to="/" className="hover:text-cyan-400" onClick={closeMobileMenu}>Home</Link>
            </li>
            {menuItems.map((menu, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(menu.title)}
                  className="flex justify-between w-full hover:text-cyan-400"
                >
                  {menu.title}
                  <FaChevronDown className={`${activeDropdown === menu.title ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === menu.title && (
                  <ul className="mt-2 bg-cyan-300 text-orange-500 rounded-lg w-full">
                    {menu.links.map((item, i) => (
                      <li key={i} className="px-4 py-2">
                        {item.submenu ? (
                          <>
                            <span className="font-semibold block">{item.label}</span>
                            <ul className="ml-4 mt-1">
                              {item.submenu.map((sub, j) => (
                                <li key={j} className="py-1">
                                  <Link to={sub.link} onClick={closeMobileMenu} className="hover:text-white">
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link to={item.link} onClick={closeMobileMenu} className="hover:text-white">
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link to="/Gallery" className="hover:text-cyan-400" onClick={closeMobileMenu}>Gallery</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-cyan-400" onClick={closeMobileMenu}>Blog</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-cyan-400" onClick={closeMobileMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
