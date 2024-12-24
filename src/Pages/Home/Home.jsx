import { useEffect, useState } from "react";
import Slider from "./Slider";
import HomeCards from "./HomeCards";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [cards, setCards] = useState([]);

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
   <div className="my-12">
   <Slider></Slider>
   </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 w-11/12 mx-auto">
        {cards.map((card) => (
          <HomeCards key={card._id} card={card}></HomeCards>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to='/all-vol-need-post' className="btn my-12 btn-accent">See All Volunteer Needed Posts<FaArrowRight></FaArrowRight></Link>
      </div>
    </div>
  );
};

export default Home;