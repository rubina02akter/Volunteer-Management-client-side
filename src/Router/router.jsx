import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import LogIn from "../Authentication/LogIn";
import Register from "../Authentication/Register";
import AllPost from "../Pages/AllVolNeedPosts/AllPost";
import PostDetails from "../Pages/AllVolNeedPosts/PostDetails";



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
        path:'/add-vol-need-post',
        element:<AllPost></AllPost>,

      },
      {
        path:'/volunteer-need-post-details/:id',
        element:<PostDetails></PostDetails>,
        loader:({params})=>fetch(`http://localhost:5000/posts/${params.id}`)
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