import { Link } from "react-router-dom";

const AllPostCard = ({ post }) => {
  const {
    _id,
    thumbnail,
    title,
    description,
    category,
    location,
    volunteersNeeded,
    deadline,
    organizerName,
    organizerEmail,
  } = post;

  return (
    <div className="card card-compact bg-[#DEE5D9]   border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <figure>
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>

        {/* Details */}
        <div className="mt-4 text-sm space-y-2 font-semibold">
          <p>Category: {category}</p>
          <p>Location: {location}</p>
          <p>Volunteers Needed: {volunteersNeeded}</p>
          <p>Deadline: {deadline}</p>
          <p>Organizer: {organizerName}</p>
        </div>

        {/* Actions */}
        <div className="card-actions mt-4 justify-end">
          <Link to={`/volunteer-need-post-details/${_id}`}>
            <button className="btn text-white bg-gradient-to-r from-[#228d79] to-[#148161]">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllPostCard;
