import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import LogIn from "../Authentication/LogIn";
import Register from "../Authentication/Register";
import AllPost from "../Pages/AllVolNeedPosts/AllPost";
import PostDetails from "../Pages/AllVolNeedPosts/PostDetails";
import CardsDetail from "../Pages/Home/CardsDetail";
import AddPost from "../Pages/AddPost/AddPost";
import MyPosts from "../Pages/MyPosts/MyPosts";
import MyList from "../Pages/BeVolunteer/MyList";
import PrivateRoute from "./PrivateRoute";
import UpdateMyPost from "../Pages/MyPosts/UpdateMyPost";



const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayOut></MainLayOut>,
    errorElement:'',
    children: [
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/all-vol-need-post',
        element:<AllPost></AllPost>,

      },
      {
        path:'/add-volunteer-need-post',
        element:<PrivateRoute><AddPost></AddPost></PrivateRoute>,

      },
     
      {
        path:'/my-posts',
        element:<PrivateRoute><MyPosts /></PrivateRoute>,

      },
     
      {
        path:'/be-volunteer/:_id',
        element:<PrivateRoute><MyList /></PrivateRoute>,

      },
      {
        path:'/update-post/:_id',
        element:<PrivateRoute><UpdateMyPost></UpdateMyPost></PrivateRoute>,
        // loader: ({ params }) =>fetch(`https://server-side-rho-lemon.vercel.app/my-posts/${params._id}`)
      },
     
      {
        path:'/volunteer-need-post-details/:id',
        element:<PrivateRoute><PostDetails></PostDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://server-side-rho-lemon.vercel.app/posts/${params.id}`)
      },
      {
        path:'/upcoming-deadlines/:id',
        element:<PrivateRoute><CardsDetail></CardsDetail></PrivateRoute>,
        loader:({params})=>fetch(`https://server-side-rho-lemon.vercel.app/upcoming-deadlines/${params.id}`)
      },
      {
        path:'login',
        element:<LogIn></LogIn>,
      },
      {
        path:'register',
        element:<Register></Register>,
      },
    ]
  }
])
export default router;