import {  useEffect, useState } from "react";
import AllPostCard from "./AllPostCard";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdTableRows } from "react-icons/md";


const AllPost = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [layout, setLayout] = useState("grid");
  const [expandedPostId, setExpandedPostId] = useState(null);
 

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleExpand = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId); // Toggle expanded view
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://server-side-rho-lemon.vercel.app/search?q=${searchQuery}`
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (searchQuery.trim()) {
      fetchPosts();
    } else {
      fetch("https://server-side-rho-lemon.vercel.app/posts")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        });
    }
  }, [searchQuery]);

  return (
    <div className="w-11/12 mx-auto">
      {/* Search and layout controls */}
      <div className="my-6 flex flex-col md:flex-row justify-between gap-1">
        <div className="md:w-8/12 w-full">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="flex md:justify-between justify-end items-center gap-4 px-8 rounded-lg">
          <BsGrid3X3GapFill
            className={`text-3xl cursor-pointer ${
              layout === "grid" ? "text-blue-500" : ""
            }`}
            onClick={() => setLayout("grid")}
          />
          <MdTableRows
            className={`text-3xl cursor-pointer ${
              layout === "table" ? "text-blue-500" : ""
            }`}
            onClick={() => setLayout("table")}
          />
        </div>
      </div>

      {/* Conditional rendering based on layout */}
      {layout === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {posts.map((post) => (
            <AllPostCard key={post._id} post={post}></AllPostCard>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className='bg-gray-200'>
                <th>Thumbnail</th>
                <th className="border border-gray-200 p-2">Title</th>
                <th className="border border-gray-200 p-2">Description</th>
                <th className="border border-gray-200 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <>
                  <tr key={post._id} className=' text-white hover:bg-gray-100'>
                    <td className="border border-gray-200 p-2">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={post.thumbnail}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="border text-black border-gray-200 p-2">{post.title}</td>
                    <td className="border text-black border-gray-200 p-2">
                      {post.description.slice(0, 50)}...
                    </td>
                    <td className="border border-gray-200 p-2">
                      <button
                        className='btn  btn-sm'
                        onClick={() => toggleExpand(post._id)}
                      >
                        {expandedPostId === post._id ? "Hide" : "View"}
                      </button>
                    </td>
                  </tr>
                  {expandedPostId === post._id && (
                    <tr>
                      <td colSpan="3" className="p-4">
                        {/* Render grid card in the table row */}
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                          <AllPostCard post={post} />
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllPost;
