import { useState, useEffect, useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import userIcon from "../../assets/icons/user.png";
import logo from "../../assets/icons/volunteer_18563004.png";
import { IoIosArrowDropdown } from "react-icons/io";

import "../../App.css";

const Navbar = () => {
  const { user, signOutUser,theme, setTheme,handleTheme } = useContext(AuthContext);
  const navigate = useNavigate();
  

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
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user && (
        <>
          <li className="dropdown2">
            <button className="dropdown-button ">
              My Profile
              <IoIosArrowDropdown />
            </button>
            <ul className={` dropdown-menu px-3 py-2 text-xs ${theme === "dark" ? "text-black " : "text-black"}`}>
              <li>
                <Link to="/add-volunteer-need-post">Add Post</Link>
              </li>
              <li>
                <Link to="/my-posts" className="w-32">
                  Manage My Posts
                </Link>
              </li>
            </ul>
          </li>
          {/* <li>
            <NavLink to="/my-req-post">My Req Post</NavLink>
          </li> */}
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

        <img
          className="md:w-12 md:h-12 h-8 rounded-full w-8"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* theme part */}
        <div className="p-4">
          <label className="cursor-pointer grid place-items-center">
            <input
              onChange={handleTheme}
              type="checkbox"
              className="toggle  theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
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
                  className="w-10 rounded-full tooltip" 
                  data-tip={user?.displayName}
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
