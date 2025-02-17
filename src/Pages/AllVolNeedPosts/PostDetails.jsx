import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const PostDetails = () => {
  const {theme} = useContext(AuthContext);
  const data = useLoaderData();
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
  } = data;

  return (
    <div className={`hero bg-[#DEE5D9] pb-20 ${theme === 'dark' ? 'text-white bg-gray-800': ''}`}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={thumbnail}
          alt={title}
          className="md:max-w-sm w-full rounded-lg shadow-2xl"
        />
        <div className={` ${theme === 'dark' ? 'text-white ': 'text-gray-800'}`}>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6 text-lg ">{description}</p>
          <div className="">
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Volunteers Needed:</strong> {volunteersNeeded}</p>
            <p><strong>Deadline:</strong> {deadline}</p>
            <p><strong>Organizer:</strong> {organizerName}</p>
            <p><strong>Email:</strong> {organizerEmail}</p>
          </div>
          <div className="card-actions  mt-4">
            <Link to={`/be-volunteer/${_id}`} className="btn  text-white bg-gradient-to-r from-[#228d79] to-[#148161]">
              Be a Volunteer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
