import React, { useContext } from "react";
import { FaServicestack, FaHandsHelping, FaUsers } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const SectionTwo = () => {
  const{theme} = useContext(AuthContext)
  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="text-center mb-10">
        <h2 className={`text-3xl font-extrabold text-[#11362E] mb-4 ${ theme === 'dark'? 'text-white' : '' }`}>
          The all-in-one volunteer platform with the tools you’ve been wishing for
        </h2>
        <p className={`text-lg  text-gray-700 mb-4 ${ theme === 'dark'? 'text-gray-300' : '' }`}>
          Connect, manage, and contribute to the community through volunteer opportunities that matter.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* 1 */}
        <div className="w-full md:w-[30%] text-center">
          <div className="border-4 border-[#11362E] rounded-full bg-red-200 h-[200px] w-[200px] mx-auto flex justify-center items-center transition-transform duration-300 transform hover:scale-110">
            <p className="text-4xl text-[#11362E]">
              <FaServicestack />
            </p>
          </div>
          <p className={`mt-4 text-xl font-bold text-[#11362E] ${theme === 'dark'? 'text-white' : ''}`}>Create Posts</p>
          <p className={`text-sm text-gray-600 mt-2 ${theme === 'dark'? 'text-white' : '' }`}>
            Easily create posts for your volunteer needs and share them with the community.
          </p>
        </div>

        {/* 2 */}
        <div className="w-full md:w-[30%] text-center">
          <div className="border-4 border-[#11362E] rounded-full bg-green-200 h-[200px] w-[200px] mx-auto flex justify-center items-center transition-transform duration-300 transform hover:scale-110">
            <p className="text-4xl text-[#11362E]">
              <FaHandsHelping />
            </p>
          </div>
          <p className={`mt-4 text-xl font-bold text-[#11362E] ${theme === 'dark'? 'text-white' : ''}`}>Volunteer</p>
          <p className={`text-sm text-gray-600 mt-2 ${theme === 'dark'? 'text-white' : '' }`}>
            Browse through volunteer opportunities and contribute to causes that matter to you.
          </p>
        </div>

        {/* 3 */}
        <div className="w-full md:w-[30%] text-center">
          <div className="border-4 border-[#11362E] rounded-full bg-blue-200 h-[200px] w-[200px] mx-auto flex justify-center items-center transition-transform duration-300 transform hover:scale-110">
            <p className="text-4xl text-[#11362E]">
              <FaUsers />
            </p>
          </div>
          <p className={`mt-4 text-xl font-bold text-[#11362E] ${theme === 'dark'? 'text-white' : ''}`}>Connect</p>
          <p className={`text-sm text-gray-600 mt-2 ${theme === 'dark'? 'text-white' : '' }`}>
            Connect with like-minded individuals and make a bigger impact together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
