import { Link } from "react-router-dom";

const AllPostCard = ({post}) => {
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
    organizerEmail
  } = post;
  

  return (
    <div className="card card-compact bg-base-100  shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
    {/* Image */}
    <figure>
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover"
      />
    </figure>

    {/* Card Body */}
    <div className="card-body">
      <h2 className="card-title text-xl font-bold">{title}</h2>
      <p className="text-sm text-gray-500">{description}</p>

      {/* Details */}
      <div className="mt-4 text-sm space-y-2">
        <p>
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p>
          <span className="font-semibold">Location:</span> {location}
        </p>
        <p>
          <span className="font-semibold">Volunteers Needed:</span> {volunteersNeeded}
        </p>
        <p>
          <span className="font-semibold">Deadline:</span> {deadline}
        </p>
        <p>
          <span className="font-semibold">Organizer:</span> {organizerName}
        </p>
      </div>

      {/* Actions */}
      <div className="card-actions mt-4 justify-end">
        <Link to={`/volunteer-need-post-details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
      </div>
    </div>
  </div>
  );
};

export default AllPostCard;