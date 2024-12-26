// Import images for marquee
import marqueeImg1 from "../../assets/sectionImg/Screenshot 2024-12-25 at 11.30.39 PM.png";
import marqueeImg2 from "../../assets/sectionImg/Screenshot 2024-12-25 at 11.35.04 PM.png";
import marqueeImg3 from "../../assets/sectionImg/Screenshot 2024-12-25 at 11.38.26 PM.png";
import marqueeImg4 from "../../assets/sectionImg/Screenshot 2024-12-25 at 11.38.45 PM.png";
import marqueeImg5 from '../../assets/sectionImg/eco-concept-with-group-joyful-volunteers.jpg';
import marqueeImg6 from '../../assets/sectionImg/entrepreneurs-meeting-office.jpg';
import marqueeImg7 from '../../assets/sectionImg/group-volunteers-collecting-trash-beach-as-team.jpg';
import marqueeImg8 from '../../assets/sectionImg/helping-hands-volunteer-support-community-service-graphic.jpg';
import marqueeImg9 from '../../assets/sectionImg/volunteers-team-doing-community-service-activities-plant-trees.jpg';
import marqueeImg10 from '../../assets/sectionImg/volunteers-work-preparing-donations-charity.jpg';
import MarqueeFast from "react-fast-marquee"; 

const Marquee = () => {
  const marqueeImages = [marqueeImg1, marqueeImg2, marqueeImg3, marqueeImg4,marqueeImg5,marqueeImg6,marqueeImg7,marqueeImg8,marqueeImg9,marqueeImg10 ];
  return (
    <div className="w-11/12 mx-auto py-8">
      {/* Marquee Section */}
      <div className="mb-8">
        <MarqueeFast pauseOnHover={true} speed={50}>
          {marqueeImages.map((image, index) => (
            <div key={index} className="mx-4">
              <img
                src={image}
                alt={`Marquee Image ${index + 1}`}
                className="w-32 h-32 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </MarqueeFast>
      </div>
    </div>
  );
};

export default Marquee;