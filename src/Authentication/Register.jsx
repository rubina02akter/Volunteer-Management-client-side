import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";

import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";


const Register = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, signInWithGoogle, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    console.log(photo,name,email,password);
    // reset error and status
    setErrorMessage("");
    setSuccess(false);

    // if (password.length < 6) {
    //   setErrorMessage("Password should be 6 characters or longer");
    //   return;
    // }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "At least 1 uppercase, 1 lowercase and must be 6 character"
      );
      return;
    }

    //create user
    createUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
        navigate("/");

        const displayName = loggedInUser.displayName || "User";
        Swal.fire(`Welcome, ${displayName}!`);

        e.target.reset();
        setSuccess(true);
      })
      .catch((error) => {
        toast("ERROR", error.message);
        setErrorMessage(error.message);
        setSuccess(false);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate("/");
        const displayName = loggedInUser.displayName || "User";
        Swal.fire(`Welcome, ${displayName}!`);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  const [text] = useTypewriter({
    words: ["Register Now", "Welcome to My Website!"], // Text to type
    loop: true, // Loop indefinitely
    typeSpeed: 70, // Typing speed in milliseconds
    deleteSpeed: 50, // Deleting speed in milliseconds
    delaySpeed: 1000, // Delay between words in milliseconds
  });

  return (
    <div className="py-6">
      
      <div className="h-12 mx-auto ">
        <h2 className="font-semibold text-2xl ml-8 text-white text-center">
          {text}
        </h2>
      </div>
      <div className="card bg-base-100 w-11/12 max-w-lg shrink-0 mx-auto border-black border  rounded-none">
        <h2 className="font-semibold text-2xl mt-12 ml-8 text-rose-800">
          Create new account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="email"
              className="input border-b-black rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input border-b-black rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo_URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo_url"
              className="input border-b-black rounded-none"
              required
            />
          </div>
          <div className="form-control relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input border-b-black rounded-none w-full pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 btn btn-xs outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gradient-to-r from-blue-800 to-rose-800 text-white text-lg">
              Register
            </button>
          </div>
        </form>
        {errorMessage && (
          <p className="text-red-600 text-center">{errorMessage}</p>
        )}
        {success && <p className="text-green-600">Register is Successful.</p>}
        <p className="mb-6 text-center text-lg font-semibold ">
          Already have an account?{" "}
          <Link className="underline text-green-600" to="/login">
            Log in
          </Link>
        </p>
        <div className="flex justify-center items-center mb-4 ">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline rounded-none"
          >
            Google <FcGoogle></FcGoogle>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
