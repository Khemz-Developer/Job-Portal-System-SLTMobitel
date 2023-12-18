import React, { useState } from "react";
import { Link, NavLink ,useNavigate } from "react-router-dom";
import "./navbar.css";
import { useAuth } from './pages/Authcontext';
import companyLogo from "../assets/images/sltlogo.png";
const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const [menuOpen, setMemuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    // Redirect to the home page after logout
    navigate('/');
  };
  return (
    //navbar ekt pitin div ekk demma
    <div className="content-containerr">
      <nav className="navBar">
        {/* <a href="/" className="site-title">SLTMOBITEL </a> */}
        <Link to="/">
          <img src={companyLogo} alt="Company Logo" className="company-logo" />
        </Link>
        <div
          className="menu"
          onClick={() => {
            setMemuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`white-background-wrapper ${menuOpen ? "hidden" : ""}`}>
          <div className="">
            <ul className={menuOpen ? "open" : ""}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">AboutUs</NavLink>
              </li>
              <li>
                <NavLink to="/vacancies">Vacancies</NavLink>
              </li>
              <li>
                {isLoggedIn ? (
                  <button className="logoutbtn" onClick={handleLogout}>Logout</button>
                ) : (
                  <NavLink to="/login">Login</NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

//------------
// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import "./navbar.css";
// import companyLogo from "../assets/images/sltlogo.png";
// const Navbar = () => {
//   const [menuOpen, setMemuOpen] = useState(false);

//   return (
//     //navbar ekt pitin div ekk demma
//     <div className="content-containerr">
//       <nav className="navBar">
//         {/* <a href="/" className="site-title">SLTMOBITEL </a> */}
//         <Link to="/">
//           <img src={companyLogo} alt="Company Logo" className="company-logo" />
//         </Link>
//         <div
//           className="menu"
//           onClick={() => {
//             setMemuOpen(!menuOpen);
//           }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//         <div className={`white-background-wrapper ${menuOpen ? "hidden" : ""}`}>
//           <div className="">
//             <ul className={menuOpen ? "open" : ""}>
//               <li>
//                 <NavLink to="/">Home</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/about">AboutUs</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/vacancies">Vacancies</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/login">Login</NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
