import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FaBars, FaBorderAll, FaCalendarAlt, FaHome, FaShoppingCart, FaWallet, } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'


const DashBoard = () => {
    
    return (
        <div className="drawer lg:drawer-open">
            <Helmet>
                <title>DashBoard | Creatique Commerce </title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link><FaHome></FaHome> User Home</Link></li>
                    <li><Link to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart</Link></li>
                    <li><Link><FaWallet></FaWallet> Payment History</Link></li>
                    <li><Link><FaCalendarAlt></FaCalendarAlt> Reservation</Link></li>
                    <div className="divider"></div>
                    <li><Link to="/"><FaHome></FaHome>Home</Link></li>
                    <li><Link to='/menu'><FaBars></FaBars> Menu</Link></li>
                    <li><Link to='/order'> <FaBorderAll></FaBorderAll>Order</Link></li>

                </ul>

            </div>
        </div>
    )
}

export default DashBoard