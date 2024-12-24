import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import footer from '../../assets/icons/undraw_team-up_qeem.svg';
import footer2 from "../../assets/icons/undraw_personal_information_re_vw8a.svg";
import bg from "../../assets/images/cool-background.png";
const Footer = () => {
  return (
    <div className="">
      {/* Top Colored Sections */}
      {/* <div className="grid grid-cols-3">
        <div className="border-4 border-green-700"></div>
        <div className="border-4 border-yellow-400"></div>
        <div className="border-4 border-red-600"></div>
      </div> */}

      {/* Main Footer Section */}
      <div
        className="bg-base-200 relative  bg-cover bg-center  py-16 text-white text-lg "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-10/12 mx-auto gap-8 relative">
          {/* Footer Image */}
          <div className="flex justify-center">
            <img
              src={footer}
              alt="Game Night"
              className="lg:w-[300px] w-[150px]"
            />
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <nav>
              <h6 className="footer-title text-lg font-extrabold mb-3">
                Services
              </h6>
              <a className="link link-hover block">Branding</a>
              <a className="link link-hover block">Design</a>
              <a className="link link-hover block">Marketing</a>
              <a className="link link-hover block">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title text-lg font-extrabold mb-3">
                Company
              </h6>
              <a className="link link-hover block">About us</a>
              <a className="link link-hover block">Contact</a>
              <a className="link link-hover block">Jobs</a>
              <a className="link link-hover block">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title text-lg font-extrabold mb-3">
                Legal
              </h6>
              <a className="link link-hover block">Terms of use</a>
              <a className="link link-hover block">Privacy policy</a>
              <a className="link link-hover block">Cookie policy</a>
            </nav>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            <div className="flex gap-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/sh.rubina?mibextid=ZbWKwL"
              >
                <FaFacebook className="text-3xl text-blue-700 dark:text-blue-400" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/rubinaakter4321"
              >
                <FaTwitter className="text-3xl text-sky-400 dark:text-sky-200" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/rubina02akter"
              >
                <FaGithub className="text-3xl  dark:text-gray-100" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <FaInstagram className="text-3xl text-red-400 dark:text-red-300" />
              </a>
            </div>
            <div>
              <img src={footer2} alt="Personal Info" className="w-48 h-auto" />
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Divider */}
          <div className="mt-8 w-7/12 mx-auto border-b border-white dark:border-gray-600"></div>

          {/* Footer Bottom Section */}
          <div className="text-center p-4 ">
            <p className="text-xs md:text-sm font-thin">
              Copyright © {new Date().getFullYear()} - All rights reserved by
              Volunteer_Hub Industries Ltd
            </p>
          </div>

          {/* Bottom Divider */}
          <div className="w-7/12 mx-auto border-b border-white dark:border-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;