import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const MyList = () => {
  const {user} = useContext(AuthContext);
  const [addLists, setAddLists] = useState([]);


  useEffect(() => {
    if (user.email) {
      fetch(`https://server-side-rho-lemon.vercel.app/be-volunteer?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setAddLists(data));
    }
  }, [user?.email]);

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
  } = addLists;

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
     
    </div>
  </div>
  );
};

export default MyList;