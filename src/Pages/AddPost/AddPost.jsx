import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddPost = () => {
  const { user,theme } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());

  const handlePost = (e) => {
    e.preventDefault();
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

    //send data to the server
    fetch("https://server-side-rho-lemon.vercel.app/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          console.log("successfully added");
          Swal.fire({
            title: "Success!",
            text: "Post added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };

  return (
    <>
    <Helmet>
    <title>Volunteer-Hub|AddPost</title>
    <meta name="description" content="Helmet application"></meta>
  </Helmet>

    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12 ">
      <section className={`p-2 md:p-6 mx-auto bg-[#DEE5D9] rounded-md shadow-md ${theme === 'dark' ? 'text-white bg-gray-800': ''}`}>
        <h2 className={`text-lg font-semibold text-gray-700 capitalize ${theme === 'dark' ? 'text-white': ''}`}>
          Add Volunteer Need Post
        </h2>

        <form onSubmit={handlePost}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className={`${theme === 'dark' ? 'text-white ': 'text-gray-800'}`} htmlFor="thumbnail">
                Thumbnail URL
              </label>
              <input
                id="thumbnail"
                name="thumbnail"
                type="url"
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${theme === 'dark'? 'bg-gray-800 text-white': ''}`}
              />
            </div>

            <div>
              <label className={`${theme === 'dark' ? 'text-white bg-gray-800': 'text-gray-800'}`} htmlFor="post_title">
                Post Title
              </label>
              <input
                id="post_title"
                name="title"
                type="text"
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${theme === 'dark'? 'bg-gray-800 text-white': ''}`}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className={`${theme === 'dark' ? 'text-white bg-gray-800': 'text-gray-800'}`}>Deadline</label>
              <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                name="deadline"
                dateFormat="d/M/yy"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className={`${theme === 'dark' ? 'text-white bg-gray-800': 'text-gray-800'}`} htmlFor="category">
                Category
              </label>
              <select
                name="category"
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
              <label className={`${theme === 'dark' ? 'text-white bg-gray-800': 'text-gray-800'}`} htmlFor="location">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${theme === 'dark'? 'bg-gray-800 text-white': ''}`}
              />
            </div>

            <div>
              <label className={`${theme === 'dark' ? 'text-white bg-gray-800': 'text-gray-800'}`} htmlFor="volunteers_needed">
                No. of Volunteers Needed
              </label>
              <input
                id="volunteers_needed"
                name="volunteers_needed"
                type="number"
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${theme === 'dark'? 'bg-gray-800 text-white': ''}`}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className={`${theme === 'dark' ? 'text-white bg-gray-800': 'text-gray-800'}`} htmlFor="description">
              Description
            </label>
            <textarea
              className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${theme === 'dark'? 'bg-gray-800 text-white': ''}`}
              name="description"
              id="description"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className={`${theme === 'dark' ? 'text-white bg-gray-800': 'text-gray-800'}`} htmlFor="organizerName">
              Organizer Name
            </label>
            <input
              id="organizerName"
              name="organizerName"
              type="text"
              value={user?.displayName || "user"}
              readOnly
              className="block w-full px-4 py-2 mt-2 text-gray-700  border border-gray-200 rounded-md focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className={`${theme === 'dark' ? 'text-white bg-gray-800': 'text-gray-800'}`} htmlFor="organizer_email">
              Organizer Email
            </label>
            <input
              id="organizer_email"
              name="organizerEmail"
              type="email"
              value={user?.email || ""}
              readOnly
              className="block w-full px-4 py-2 mt-2 text-gray-700  border border-gray-200 rounded-md focus:outline-none"
            />
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 btn btn-block"
            >
              Add Post
            </button>
          </div>
        </form>
      </section>
    </div>
    </>
  );
};

export default AddPost;
