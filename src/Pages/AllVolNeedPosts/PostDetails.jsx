
import { useLoaderData } from "react-router-dom";



const PostDetails = () => {
 
  const data = useLoaderData();
 

  console.log(data);

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
    <div className="card lg:card-side bg-base-100 shadow-xl max-w-screen-md mx-auto my-4">
      <figure className="w-full lg:w-1/3">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full lg:rounded-l-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg lg:text-xl font-bold">{title}</h2>
        <p className="text-sm lg:text-base text-gray-600">{description}</p>
        <div className="mt-2 text-gray-800">
          <p>Category: {category}</p>
          <p>Location: {location}</p>
          <p>Volunteers Needed: {volunteersNeeded}</p>
          <p>Deadline: {deadline}</p>
          <p>Organizer: {organizerName}</p>
          <p>Email: {organizerEmail}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            Be a Volunteer
          </button>
        </div>
      </div>
    </div>
  );
};


export default PostDetails;
