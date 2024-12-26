import { useContext, useEffect, useState } from "react";
import Slider from "./Slider";
import HomeCards from "./HomeCards";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ImgSection from "./ImgSection";
import SectionTwo from "./SectionTwo";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import Marquee from "./Marquee";

const Home = () => {
  const [cards, setCards] = useState([]);
  const {theme} = useContext(AuthContext)

  useEffect(() => {
    fetch("https://server-side-rho-lemon.vercel.app/upcoming-deadlines")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
       <Helmet>
    <title>Volunteer-Hub|Home</title>
    <meta name="description" content="Helmet application"></meta>
  </Helmet>
      <div className="my-12">
        <Slider></Slider>
      </div>
      <div>{/* <Section></Section> */}</div>
      <div className={`${theme === 'dark'?'text-white' : 'text-black'}`}>
        <h2 className="text-center font-extrabold text-4xl my-6">
          We have the power to change tomorrow
        </h2>
        <ImgSection></ImgSection>
        <div className="text-center mt-6">
          <p className="font-extrabold text-3xl ">We Are Waiting For You</p>
          <h2 className="font-thin text-2xl ">
            Lets Make The World Great Again
          </h2>
          <p className="font-extralight text-xl ">
            We can start by taking small steps and making small changes that can
            have a big impact on the world.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 w-11/12 mx-auto">
        {cards.map((card) => (
          <HomeCards key={card._id} card={card}></HomeCards>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to="/all-vol-need-post"
          className="btn my-12 text-white bg-gradient-to-r from-[#228d79] to-[#d43fcf]"
        >
          See All Volunteer Needed Posts<FaArrowRight></FaArrowRight>
        </Link>
      </div>
      <div>
        <SectionTwo></SectionTwo>
      </div>
      <div>
        <Marquee></Marquee>
      </div>
    </div>
  );
};

export default Home;
