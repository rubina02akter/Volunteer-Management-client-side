import { Link, useLoaderData } from "react-router-dom";

const CardsDetail = () => {
  const cardData = useLoaderData();
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
  } = cardData;

  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={thumbnail}
          alt={title}
          className="md:max-w-sm w-full rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6 text-lg text-gray-700">{description}</p>
          <div className="text-gray-800">
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Volunteers Needed:</strong> {volunteersNeeded}</p>
            <p><strong>Deadline:</strong> {deadline}</p>
            <p><strong>Organizer:</strong> {organizerName}</p>
            <p><strong>Email:</strong> {organizerEmail}</p>
          </div>
          <div className="card-actions  mt-4">
            <Link to="/" className="btn btn-primary">Go Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDetail;
