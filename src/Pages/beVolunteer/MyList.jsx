import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [addLists, setAddLists] = useState([]);
  const { displayName, email } = user;
  const [loadData, setLoadData] = useState();
  const { _id } = useParams();

  useEffect(() => {
    axios
      .get(`https://server-side-rho-lemon.vercel.app/volunteer-data/${_id}`)
      .then((res) => {
        setLoadData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [_id]);

  const handleReq = (e) => {
    e.preventDefault();
    const suggestion = e.target.suggestion.value;
    const status = "requested";

    fetch("https://server-side-rho-lemon.vercel.app/be-volunteer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...loadData,
        suggestion,
        status,
        email, // Send the user's email
        _id, // Include the ID of the specific post
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            title: "Request Sent!",
            text: "Your request has been successfully submitted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Could not process your request once more.",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error",
          text: "An error occurred. Please try again later.",
          icon: "error",
        });
      });
  };

  useEffect(() => {
    if (user.email) {
      fetch(
        `https://server-side-rho-lemon.vercel.app/be-volunteer?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setAddLists(data));
    }
  }, [user?.email]);

  if (!loadData) {
    return <h2>Loading....</h2>;
  }

  const {
    thumbnail,
    title,
    description,
    category,
    location,
    volunteersNeeded,
    deadline,
    organizerName,
    organizerEmail,
  } = loadData;

  return (
    <div className="max-w-4xl my-12 mx-auto bg-[#DEE5D9] shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Be a Volunteer</h1>
      <form onSubmit={handleReq}>
        {/* Post Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Thumbnail</span>
            </label>
            <img
              src={thumbnail}
              alt="Post Thumbnail"
              className="w-full h-40 object-cover rounded-md border"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Post Title</span>
            </label>
            <input
              type="text"
              value={title}
              className="input input-bordered w-full"
              readOnly
            />
          </div>

          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text font-medium">Description</span>
            </label>
            <textarea
              value={description}
              className="textarea textarea-bordered w-full"
              readOnly
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Category</span>
            </label>
            <input
              type="text"
              value={category}
              className="input input-bordered w-full"
              readOnly
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Location</span>
            </label>
            <input
              type="text"
              value={location}
              className="input input-bordered w-full"
              readOnly
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Volunteers Needed</span>
            </label>
            <input
              type="number"
              value={volunteersNeeded}
              className="input input-bordered w-full"
              readOnly
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Deadline</span>
            </label>
            <input
              type="date"
              value={deadline}
              className="input input-bordered w-full"
              readOnly
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Organizer Name</span>
            </label>
            <input
              type="text"
              value={organizerName}
              className="input input-bordered w-full"
              readOnly
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Organizer Email</span>
            </label>
            <input
              type="email"
              value={organizerEmail}
              className="input input-bordered w-full"
              readOnly
            />
          </div>
        </div>

        {/* Volunteer Information */}
        <div className="mt-6 border-t pt-6">
          <h2 className="text-lg font-semibold mb-4">Your Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Volunteer Name</span>
              </label>
              <input
                type="text"
                value={displayName}
                className="input input-bordered w-full"
                readOnly
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Volunteer Email</span>
              </label>
              <input
                type="email"
                value={email}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
          </div>

          {/* Suggestion */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text font-medium">Suggestion</span>
            </label>
            <textarea
              name="suggestion"
              className="textarea textarea-bordered w-full"
              placeholder="Your suggestion..."
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button type="submit" className="btn text-white bg-gradient-to-r from-[#228d79] to-[#148161] w-full">
            Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyList;
