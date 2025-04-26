import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu, AiFillCaretDown} from "react-icons/ai";
import logo from "../assets/img/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const openForm = () => {
    setMenuOpen(false);
    // open login/signup modal logic goes here
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/mission", label: "Mission & Vision" },
    {
      label: "Our Products",
      dropdown: [
        { to: "/products/product1", label: "Product 1" },
        { to: "/products/product2", label: "Product 2" },
        { to: "/products/product3", label: "Product 3" },
        { to: "/products/product4", label: "Product 4" },
        { to: "/products/product5", label: "Product 5" },
        { to: "/products/product6", label: "Product 6" },
        { to: "/products/product7", label: "Product 7" },
        { to: "/products/product8", label: "Product 8" },
        { to: "/products/product9", label: "Product 9" },
        { to: "/products/product10", label: "Product 10" },
        { to: "/products/product11", label: "Product 11" },
        { to: "/products/product12", label: "Product 12" },
      ],
    },    { to: "/career", label: "Career" },
    { to: "/investors", label: "Investors" },
    { to: "/expansion", label: "Reach and Expansion" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-[104px] z-50 bg-backgroundColor shadow-md text-black ">
      <div className="max-w-[1920px] mx-auto px-5 md:px-10 lg:px-20 flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="Logo" className="h-102 w-154.91" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-16 text-[16px] font-normal ">
  {navLinks.map((link, index) => (
    <div key={index} className="relative group">
      {link.dropdown ? (
        <>
          <div className="flex items-center gap-1 cursor-pointer hover:text-hoverColor transition">
            <span>{link.label}</span>
            <AiFillCaretDown className="text-sm mt-1" />
          </div>
          <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 hidden group-hover:block z-50 w-56">
            {link.dropdown.map((subLink, subIndex) => (
              <li key={subIndex}>
                <Link
                  to={subLink.to}
                  className="block px-4 py-2 text-black hover:bg-gray-100 transition"
                >
                  {subLink.label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link
          to={link.to}
          className="hover:text-hoverColor transition"
        >
          {link.label}
        </Link>
      )}
    </div>
  ))}
</nav>


        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-8">
          <button
            className="bg-[#0054AD] text-white w-[105px] h-[39px] rounded hover:bg-hoverColor transition"
            onClick={openForm}
          >
            Login
          </button>
          <button
            className="bg-brightColor text-white w-[105px] h-[39px] rounded hover:bg-hoverColor transition"
            onClick={openForm}
          >
            Sign Up
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[104px] left-0 w-full bg-backgroundColor shadow-md z-40 flex flex-col gap-4 px-5 py-6 transition-all duration-300 ease-in-out">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="hover:text-hoverColor transition text-base font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <button
              className="bg-brightColor text-white w-full py-2 rounded hover:bg-hoverColor transition"
              onClick={openForm}
            >
              Login
            </button>
            <button
              className="bg-brightColor text-white w-full py-2 rounded hover:bg-hoverColor transition"
              onClick={openForm}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
