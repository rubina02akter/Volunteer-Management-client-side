import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";



const UpdateMyPost = () => {
  const { _id } = useParams();
  const [posts, setPosts] = useState();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    axios
      .get(`https://server-side-rho-lemon.vercel.app/update-post/${_id}`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data); 
      })
      .catch((error) => {
        console.log(error);
      });
  }, [_id]);

  const handleUpdatePost = (e) => {
    e.preventDefault();
    // const formData = new FormData(e.target);
    // const data = Object.fromEntries(formData.entries());
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const category = form.category.value;
    const deadline = form.deadline.value;
    const location = form.location.value;
    const volunteersNeeded = parseInt(form.volunteers_needed.value);
    const description = form.description.value;
    const organizerName = form.organizerName.value;
    const organizerEmail = form.organizerEmail.value;
    const newPost = {
      thumbnail,
      title,
      category,
      deadline,
      location,
      volunteersNeeded,
      description,
      organizerName,
      organizerEmail,
    };

    console.log(newPost);

    const fetchData = async () => {
      try {
        const response = await axios.patch(
          `https://server-side-rho-lemon.vercel.app/my-posts/${_id}`,
          newPost
        );
        console.log(response);
        Swal.fire({
          title: "Success!",
          text: "Your post has been updated successfully.",
          icon: "success",
          confirmButtonText: "Go to My Posts",
        }).then(() => {
          navigate("/my-posts");
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className="p-2 md:p-6 mx-auto bg-white rounded-md shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 capitalize">
          Update Volunteer Need Post
        </h2>

        <form onSubmit={handleUpdatePost}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700" htmlFor="thumbnail">
                Thumbnail URL
              </label>
              <input
                id="thumbnail"
                name="thumbnail"
                defaultValue={posts?.thumbnail}
                type="url"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="post_title">
                Post Title
              </label>
              <input
                id="post_title"
                name="title"
                defaultValue={posts?.title}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700">Deadline</label>
              <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                name="deadline"
                dateFormat="d/M/yy" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700" htmlFor="category">
                Category
              </label>
              <select
                name="category"
                defaultValue={posts?.category}
                id="category"
                className="border p-2 rounded-md"
              >
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Social Service">Social Service</option>
                <option value="Animal Welfare">Animal Welfare</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700" htmlFor="location">
                Location
              </label>
              <input
                id="location"
                name="location"
                defaultValue={posts?.location}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="volunteers_needed">
                No. of Volunteers Needed
              </label>
              <input
                id="volunteers_needed"
                name="volunteers_needed"
                defaultValue={posts?.volunteersNeeded}
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              name="description"
              defaultValue={posts?.description}
              id="description"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700" htmlFor="organizerName">
              Organizer Name
            </label>
            <input
              id="organizerName"
              name="organizerName"
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-200 rounded-md focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700" htmlFor="organizer_email">
              Organizer Email
            </label>
            <input
              id="organizer_email"
              name="organizerEmail"
              type="email"
              value={user?.email || ""}
              readOnly
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-200 rounded-md focus:outline-none"
            />
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Update Post
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateMyPost;
