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
        element:<AddPost></AddPost>,

      },
     
      {
        path:'/my-posts',
        element:<MyPosts></MyPosts>,

      },
     
      {
        path:'/volunteer-need-post-details/:id',
        element:<PostDetails></PostDetails>,
        loader:({params})=>fetch(`https://server-side-rho-lemon.vercel.app/posts/${params.id}`)
      },
      {
        path:'/upcoming-deadlines/:id',
        element:<CardsDetail></CardsDetail>,
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