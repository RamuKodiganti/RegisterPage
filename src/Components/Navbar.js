import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import './Navbar.css';
// import facebookLogo from "./my-app\public\logo192.png"; // Add your logo image
// import facebookLogo from "./logo.svc"; // Correct import

// my-app\public\logo192.png
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const pages = {
    "/dashboard": "Dashboard",
    "/workplace": "Workplace",
    "/profile": "Profile",
  };

  const currentPage = pages[location.pathname] || "Dashboard";

  const handleLogout = () => {
    alert("Logged out successfully");
    navigate("/login");
  };

  // Hide navbar on login and registration pages
  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      {/* Left - Logo */}
      <img src="/logo512.png" alt="Facebook Logo" className="h-8 cursor-pointer" onClick={() => navigate("/dashboard")} />
      {/* my-app\src\Components\logo512.png */}
      {/* Center - Current Page */}
      <h1 className="text-xl font-semibold">{currentPage}</h1>

      {/* Right - Hamburger Menu */}
      <div className="relative">
        <button onMouseEnter={() => setMenuOpen(true)} className="p-2 text-white focus:outline-none">
          <FaBars size={24} />
        </button>
        {menuOpen && (
          <div
            className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg"
            onMouseLeave={() => setMenuOpen(false)}
          >
            <ul className="flex flex-col text-left">
              <li
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={() => navigate("/workplace")}
              >
                Workplace
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={() => navigate("/profile")}
              >
                Profile
              </li>
              <li
                className="px-4 py-2 text-red-500 hover:bg-red-700 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
