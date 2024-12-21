import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import LogIn from "../Authentication/LogIn";
import Register from "../Authentication/Register";
import AllPost from "../Pages/AllPosta/AllPost";


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
        path:'/allPost',
        element:<AllPost></AllPost>,
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