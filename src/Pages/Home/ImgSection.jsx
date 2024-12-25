import img1 from '../../assets/sectionImg/Screenshot 2024-12-25 at 11.30.39 PM.png';
import img2 from '../../assets/sectionImg/Screenshot 2024-12-25 at 11.35.04 PM.png';
import img3 from '../../assets/sectionImg/Screenshot 2024-12-25 at 11.38.26 PM.png';
import img4 from '../../assets/sectionImg/Screenshot 2024-12-25 at 11.38.45 PM.png';


const ImgSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-11/12 mx-auto">
      {/* Card 1 */}
      <div className="relative">
        <div className="badge absolute top-2 left-2 bg-neutral text-white py-1 px-3 rounded-none text-sm">
          Animal Welfare
        </div>
        <div className="absolute top-2 left-2 text-lg text-white">
          
        </div>
        <img
          className="h-[200px] w-full object-cover rounded-lg sm:rounded-l-lg"
          src={img1}
          alt="Image 1"
        />
      </div>

      {/* Card 2 */}
      <div className="relative">
        <div className="badge absolute top-2 left-2 bg-neutral text-white py-1 px-3 rounded-none text-sm">
         Educational Purpose
        </div>
        <div className="absolute top-2 left-2 text-lg text-white">
          
        </div>
        <img
          className="h-[200px] w-full object-cover rounded-lg"
          src={img2}
          alt="Image 2"
        />
      </div>

      {/* Card 3 */}
      <div className="relative">
        <div className="badge absolute top-2 left-2 bg-neutral text-white py-1 px-3 rounded-none text-sm">
          Health Care
        </div>
        <div className="absolute top-2 left-2 text-lg text-white">
         
        </div>
        <img
          className="h-[200px] w-full object-cover rounded-lg"
          src={img3}
          alt="Image 3"
        />
      </div>

      {/* Card 4 */}
      <div className="relative">
        <div className="badge absolute top-2 left-2 bg-neutral text-white py-1  rounded-none text-sm">
        Social Service
        </div>
        <div className="absolute top-2 left-2 text-lg text-white">
         
        </div>
        <img
          className="h-[200px] w-full object-cover rounded-lg sm:rounded-r-lg"
          src={img4}
          alt="Image 4"
        />
      </div>
    </div>
  );
};

export default ImgSection;
