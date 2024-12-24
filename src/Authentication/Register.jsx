import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import lottieSignUp from '../../src/assets/lottie/Animation - 1734115829090.json';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Lottie from "lottie-react";


const Register = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, signInWithGoogle, setUser,updateUserProfile } =
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
        updateUserProfile({ displayName: name, photoURL: photo })
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
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

  

  return (
    <div className="flex flex-col lg:flex-row justify-between  w-10/12 mx-auto">
    <div className="lg:w-96 md:w-56 w-44 lg:mt-32 mt-6 md:ml-44 lg:ml-0 ml-24">
      <Lottie animationData={lottieSignUp}></Lottie>
    </div>

    <div className="card backdrop-blur-3xl  bg-base-100  w-full max-w-xl shrink-0 mb-12">
      <h2 className="font-semibold text-2xl mt-12 ml-8 text-blue-700">
        Create an account
      </h2>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input border-black "
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
            className="input border-black"
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
            className="input border-black"
            required
          />
        </div>
        <div className="form-control relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input border-black rounded-lg w-full pr-10"
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
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      {errorMessage && (
        <p className="text-red-600 text-center">{errorMessage}</p>
      )}
      {success && <p className="text-green-600">Register is Successful.</p>}
      <p className="mb-6 text-center text-lg font-semibold ">
        Already have an account?
        <Link className="underline text-blue-800" to="/login">
          Log in
        </Link>
      </p>
      <div className="flex justify-center items-center mb-4 ">
        <button
       onClick={handleGoogleSignIn}
          className="btn btn-outline rounded-none"
        >
          Google<FcGoogle></FcGoogle>
        </button>
      </div>
    </div>
  </div>
  );
};

export default Register;
