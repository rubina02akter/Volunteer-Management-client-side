import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import LogIn from "../Authentication/LogIn";
import Register from "../Authentication/Register";
import AllPost from "../Pages/AllVolNeedPosts/AllPost";
import PostDetails from "../Pages/AllVolNeedPosts/PostDetails";
import CardsDetail from "../Pages/Home/CardsDetail";
import AddPost from "../Pages/AddPost/AddPost";
import PrivateRoute from "./PrivateRoute";
import UpdateMyPost from "../Pages/MyPosts/UpdateMyPost";
import Error from "../Components/Error";
import MyReqPost from "../Pages/MyReqPost/MyReqPost";
import MyList from "../Pages/beVolunteer/MyList";
import MyPosts from "../Pages/MyPosts/MyPosts";



const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayOut></MainLayOut>,
    errorElement:<Error></Error>,
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
        element:<PrivateRoute><MyPosts></MyPosts></PrivateRoute>,

      },
      {
        path:'/my-req-post',
        element:<PrivateRoute><MyReqPost></MyReqPost></PrivateRoute>,

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