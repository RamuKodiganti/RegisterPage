// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css"; // CSS file for styling

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     alert("You have been logged out.");
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar">
//       {/* Logo on the left */}
//       <div className="logo">MyCompany</div>

//       {/* Page Title in Center */}
//       <div className="page-title">Dashboard</div>

//       {/* Menu (☰) on the right */}
//       <div
//         className="menu-icon"
//         onMouseEnter={() => setShowMenu(true)}
//         onMouseLeave={() => setShowMenu(false)}
//       >
//         ☰
//         {showMenu && (
//           <div className="dropdown-menu">
//             <Link to="/dashboard">Dashboard</Link>
//             <Link to="/workplace">Workplace</Link>
//             <Link to="/profile">Profile</Link>
//             <button onClick={handleLogout}>Logout</button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
