import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../DashBoard/DashBoard/DashBoard";
import MyCart from "../DashBoard/MyCart/MyCart";
import AllUsers from "../DashBoard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../DashBoard/AddItem/AddItem";
import ManageItems from "../DashBoard/ManageItems/ManageItems";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [


            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
           
        ]


    },
// DashBoard Main and Children Routes Comes Here For
    {
        path: 'dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
           
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'additem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageitems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
        ]
    }

]);

export default router;