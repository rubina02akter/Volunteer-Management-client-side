import { Link } from "react-router-dom";

const HomeCards = ({ card }) => {
  const {
    _id,
    thumbnail,
    title,
    description,
    category,
    location,
    volunteersNeeded,
    deadline,organizerName
  } = card;

  return (
    <div className="card  border rounded-lg shadow-lg p-4 bg-[#DEE5D9]">
     <div className="h-36">
       {/* Category Badge */}
       <div className="mb-2">
        <span className="badge text-white bg-gradient-to-r from-[#228d79] to-[#d43fcf] px-3 py-1 rounded-md">
          {category}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{description}</p>
     </div>

      {/* Thumbnail */}
      <div className="mb-4">
        <img
          src={thumbnail}
          className="w-full h-[180px] object-cover rounded-lg"
          alt={title}
        />
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="font-semibold text-gray-600">
            Volunteers Needed: {volunteersNeeded}
          </span>
        </div>
        <div className="w-full bg-white rounded-full h-2.5">
          <div
            className="bg-[#228d79] h-2.5 rounded-full"
            style={{ width: `${(volunteersNeeded / 10) * 100}%` }} // Adjust percentage dynamically if needed
          ></div>
        </div>
      </div>

      {/* Goal Information */}
      <div className="text-sm font-medium text-gray-600 mb-4">
        Deadline: <span className="text-black">{deadline}</span>
      </div>

      {/* Location and Organizer */}
      <div className="flex justify-between text-sm font-medium text-gray-600 mb-4">
        <span>Location: {location}</span>
        <span>Organizer: {organizerName}</span>
      </div>

      {/* View Details Button */}
      <Link to={`/upcoming-deadlines/${_id}`}>
        <button className="btn w-full bg-gradient-to-r from-[#228d79] to-[#186c5b] text-white font-medium py-2 rounded-lg hover:from-[#186c5b] hover:to-[#228d79]">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default HomeCards;
