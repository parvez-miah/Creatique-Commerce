import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FaBars, FaBorderAll, FaRegListAlt, FaHome, FaShoppingCart, FaWallet, FaUtensilSpoon, FaUsers } from 'react-icons/fa'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './DashBoard.css'
import useAdmin from '../../hooks/useAdmin'
import useAuth from '../../hooks/useAuth'
import { Button, ButtonGroup } from '@chakra-ui/react'

const DashBoard = () => {

    // const isAdmin = true;

    const [isAdmin] = useAdmin();
    const { logOut } = useAuth();
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            navigate('/')
    }

    return (

        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="drawer-button lg:hidden , drawerButton">Menu </label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><Link to="/dashboard/admin-home"><FaHome></FaHome> Admin Home</Link></li>
                            <li><Link to="/"><FaHome></FaHome>Home</Link></li>
                            <li><Link to="/dashboard/payment-history"><FaWallet></FaWallet> Payment History</Link></li>
                            <li><Link to='/dashboard/additem'><FaUtensilSpoon></FaUtensilSpoon> Add Item</Link></li>
                            <li><Link to='/dashboard/manageitems'><FaRegListAlt></FaRegListAlt> Manage Items</Link></li>
                            <li><Link to='/menu'><FaBars></FaBars> Menu</Link></li>
                            <div className="divider"></div>
                            <li>  <Button onClick={handleLogOut} colorScheme='teal' size='xs'>
                                LogOut
                            </Button></li>


                        </> :

                            <>
                                <li><Link to="/dashboard/user-home"><FaHome></FaHome> User Home</Link></li>
                                <li><Link to="/"><FaHome></FaHome>Home</Link></li>
                                <li><Link to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart</Link></li>
                                <li><Link to='/order'> <FaBorderAll></FaBorderAll>Order</Link></li>
                                <li><Link to='/menu'><FaBars></FaBars> Menu</Link></li>
                                <div className="divider"></div>
                                <li>  <Button onClick={handleLogOut} colorScheme='teal' size='xs'>
                                    LogOut
                                </Button></li>
                            </>
                    }

                </ul>

            </div>
        </div>
    )
}

export default DashBoard