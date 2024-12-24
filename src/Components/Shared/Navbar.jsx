import { useState, useEffect, useContext } from "react";
import {  FaMoon, FaSun } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import userIcon from "../../assets/icons/user.png";
import logo from '../../assets/icons/volunteer_18563004.png';
import { IoIosArrowDropdown } from "react-icons/io";

import "../../App.css";


const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // const [darkMode, setDarkMode] = useState(false);

  // Check if dark mode preference is saved in localStorage
  // useEffect(() => {
  //   const savedMode = localStorage.getItem("theme");
  //   if (savedMode === "dark") {
  //     setDarkMode(true);
  //     document.body.classList.add("dark");
  //   }
  // }, []);

  // const handleThemeToggle = () => {
  //   setDarkMode(!darkMode);
  //   if (!darkMode) {
  //     document.body.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Log Out Successfully!", {
          position: "top-right",
          autoClose: 2000,
        });
        navigate("/");
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-vol-need-post">All Post</NavLink>
      </li>
      {user && (
        <>
          <li className="dropdown2">
            <button className="dropdown-button">My Profile<IoIosArrowDropdown /></button>
            <ul className="dropdown-menu px-3 py-2 text-xs">
              <li>
                <Link to="/add-volunteer-need-post">Add Post</Link>
              </li>
              <li>
                <Link to="/my-posts" className="w-32">Manage My Posts</Link>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/my-req-post">My Req Post</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar pt-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[2] mt-3 w-52 p-2 shadow text-black"
          >
            {links}
          </ul>
        </div>

        <img className="md:w-12 md:h-12 h-8 rounded-full w-8" src={logo} alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* Dark Mode Toggle */}
        {/* <button
          onClick={handleThemeToggle}
          className="bg-none rounded-full mr-2"
        >
          {darkMode ? (
            <FaSun className="text-yellow-500 w-8 h-6" />
          ) : (
            <FaMoon className="w-8 h-6" />
          )}
        </button> */}
        <div>
          {user ? (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div
                  title={user?.displayName || "User"}
                  className="w-10 rounded-full"
                >
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL || userIcon}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box md:w-52 w-32 text-xs"
              >
                <li className="mt-2">
                  <button
                    onClick={handleSignOut}
                    className="bg-gray-200 block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link className="btn btn-outline mr-2" to="/login">
                Log in
              </Link>
             
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
