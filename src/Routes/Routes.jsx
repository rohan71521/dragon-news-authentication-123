
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login..Register/Login";
import Register from "../pages/Login..Register/Register";
import News from "../pages/News/News";
import PrivateRoute from "../pages/News/PrivateRoute";

  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
           path:"/",
           element:<Home></Home> 
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/:id",
          loader:()=> fetch('news.json'),
          element:<PrivateRoute><News></News></PrivateRoute>
        }
      ]
    },
  ]);

  export default router