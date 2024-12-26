import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const MyReqPost = () => {
  const { user } = useContext(AuthContext);
  const [reqData, setReqData] = useState([]);


  useEffect(() => {
    if (user?.email) {
      const fetchData = async () => {
        const url = `https://server-side-rho-lemon.vercel.app/my-req-post?email=${user.email}`;
        try {
          const res = await fetch(url);
          const value = await res.json();
          setReqData(value);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [user?.email]);

  // useEffect(() => {
  //   if (user?.email) {
  //     axiosSecure
  //       .get(`/my-req-post?email=${user.email}`)
  //       .then((res) => setReqData(res.data))
  //       .catch((error) => console.error("Error fetching data:", error));
  //   }
  // }, [user?.email]);
  

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-side-rho-lemon.vercel.app/my-req-post/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to delete");
            }
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
                icon: "success",
              });

              // Update the state to reflect the deleted post
              const remainingCards = reqData.filter((card) => card._id !== _id);
              setReqData(remainingCards);
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire({
              title: "Error",
              text: "An error occurred while deleting the post.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 ">
      {reqData && reqData.length > 0 ? (
        <div>
          {/* Table for Large Devices */}
          <div className="hidden lg:block">
            <table className="min-w-full table-auto bg-white border-collapse shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-[#DEE5D9] text-black">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">No</th>
                  <th className="py-3 px-4 text-left font-semibold">Title</th>
                  <th className="py-3 px-4 text-left font-semibold">Category</th>
                  <th className="py-3 px-4 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reqData.map((card, index) => {
                  const { _id, title, category } = card;
                  return (
                    <tr key={_id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4 text-sm text-gray-800">
                        {index + 1}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-800">{title}</td>
                      <td className="py-4 px-4 text-sm text-gray-800">
                        {category}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-800">
                        <button
                          onClick={() => handleDelete(_id)}
                          className="btn bg-gradient-to-r from-red-600 to-red-800 text-white btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Cards for Small Devices */}
          <div className="grid gap-4 lg:hidden">
            {reqData.map((card, index) => {
              const { _id, title, category } = card;
              return (
                <div
                  key={_id}
                  className="p-4 border border-gray-300 rounded-lg shadow-md bg-white"
                >
                  <p className="text-sm text-gray-500">
                    <span className="font-bold">No:</span> {index + 1}
                  </p>
                  <p className="text-sm text-gray-800">
                    <span className="font-bold">Title:</span> {title}
                  </p>
                  <p className="text-sm text-gray-800">
                    <span className="font-bold">Category:</span> {category}
                  </p>
                  <div className="mt-4">
                    <button
                      onClick={() => handleDelete(_id)}
                      className="btn bg-gradient-to-r from-red-600 to-red-800 text-white btn-sm w-full"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-600 text-lg">
            No request found. Please add a request through the “Be volunteer
            button” on the all posts page.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyReqPost;
