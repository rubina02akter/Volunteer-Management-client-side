import { motion } from "framer-motion";
import Lottie from "lottie-react";
import volunteerAnimation from "../../assets/lottie/Animation - 1734115829090.json";

const SectionThree = () => {
  return (
    <div className="py-12 ">
      <motion.div
        className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
        }}
      >
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold">Join Our Volunteer Hub</h2>
          <p className="text-lg mt-4">
            Start your volunteering journey today. Whether you want to create
            opportunities or help others, our platform is here for you.
          </p>
          <button className="mt-6 btn text-white bg-[#148161] px-6 py-3 rounded-lg font-semibold hover:bg-[#f1f1f1] transition-all">
            Explore Opportunities
          </button>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 mt-8 md:mt-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Lottie animationData={volunteerAnimation} loop={true} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionThree;
