import img from "../../assets/images/Wildlife_protection_amendment_bill_3f9aa71cb1.jpg";

const Section = () => {
  return (
    <div className="w-11/12 mx-auto">
      {/* <h2> What we do</h2>
      <h2>Various things we help in whole world</h2> */}
      <div className="grid grid-cols-3">
        <div className="card bg-[#11362E] image-full  shadow-xl">
          <figure>
            <img src={img} alt="Volunteer Recruitment" />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title text-lg md:text-xl font-bold">
              Volunteer Recruitment
            </h2>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              VolunteerHub makes it easy to recruit volunteers who are
              passionate about your cause. Our volunteer recruitment features
              streamline the process for your coordinator and volunteers.
            </p>
            <div className="card-actions justify-end">
              <a
                href="#"
                className="p-2 rounded-lg bg-white text-[#11362E] hover:bg-gray-200 hover:text-[#0b2a22]"
              >
                Recruit Volunteers
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
