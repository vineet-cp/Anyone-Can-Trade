import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // or use heroicons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-8 md:px-24 py-3 border-b border-gray-200 md:border-0 bg-gray-300 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 md:gap-1.5">
          <img src="/TMI_Logo.png" width={"60px"} height={"60px"}/>
          <h1 className="text-[1rem] md:text-[1.4rem] text-[#000000] font-[500]">Trading Masters of India</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center text-[1.2rem]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#000000] font-semibold"
                : "text-gray-700 hover:text-black font-normal"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? "text-[#000000] font-semibold"
                : "text-gray-700 hover:text-black font-[400]"
            }
          >
            Courses
          </NavLink>
            <NavLink
            to="/mentorship"
            className={({ isActive }) =>
              isActive
                ? "text-[#000000] font-semibold"
                : "text-gray-700 hover:text-black font-[400]"
            }
          >
            One on One Mentorship
          </NavLink>
          {/* <NavLink
            to="/form"
            className={({ isActive }) =>
              isActive
                ? "text-[#000000] font-semibold"
                : "text-gray-700 hover:text-black font-[400]"
            }
          >
            Form
          </NavLink> */}
          <NavLink
            to="/contact"
            className="text-white font-normal text-[1rem] rounded-3xl px-3 py-3 bg-black"
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="flex flex-col mt-3 md:hidden space-y-3 px-2 justify-start">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#000000] font-semibold"
                : "text-gray-700 hover:text-black font-normal"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#000000] font-semibold"
                : "text-gray-700 hover:text-black font-normal"
            }
          >
            Courses
          </NavLink>
                    <NavLink
            to="/mentorship"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#000000] font-semibold"
                : "text-gray-700 hover:text-black font-normal"
            }
          >
            One on One Mentorship
          </NavLink>
        <NavLink
            to="/form"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#000000] font-semibold"
                : "text-gray-700 hover:text-black font-normal"
            }
          >
            Form
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-white font-normal text-[0.8rem] rounded-3xl px-3 py-3 bg-black w-fit"
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </header>
  );
}
