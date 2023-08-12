import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home/Home";
import PopularMenu from "../Pages/Home/PopularMenu/PopularMenu";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import DashBoard from "../DashBoard/DashBoard/DashBoard";
import MyCart from "../DashBoard/MyCart/MyCart";

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
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
        ]


    },
// DashBoard Main and Children Routes Comes Here For
    {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        children: [
           
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
        ]
    }

]);

export default router;