import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import '../../App.css';
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/all-vol-need-post">All Posts</Link>
      </li>
      {!user && (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}

       {user && (
      <li className="dropdown2">
        <button className="dropdown-button">My Profile</button>
        <ul className="dropdown-menu">
          
          <li>
            <Link to="/add-volunteer-need-post">Add Post</Link>
          </li>
          <li>
            <Link to="/my-posts">Manage My Posts</Link>
          </li>
        </ul>
      </li>
    )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm container  mx-auto mb-12">
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">  
          <span className="font-bold">VolunLink</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{links}</ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box md:w-52 w-32 text-xs"
            >
            {links}
             
              <li className='mt-2'>
                <button
                  onClick={signOutUser}
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
