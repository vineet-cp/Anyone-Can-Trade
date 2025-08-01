import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-[1rem] text-[#000000] font-[500]">Trading Masters of India</h1>
      <nav className="space-x-4">
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
          to="/contact"
          className="text-white font-normal text-[0.8rem] rounded-3xl px-3 py-3 bg-black"
        >
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
}
