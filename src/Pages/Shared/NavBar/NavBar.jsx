import React, { Component, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/authProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';


const NavBar =()=>  {

    const { user, logOut } = useContext(AuthContext)

    const [cart] = useCart()


   const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
   }

    const allNav=  <>
    
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/order'>Order</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        {
            user ? <>
                <span>{user?.displayName}</span>
                <button onClick={handleLogOut} className="btn btn-warning">LogOut</button>
            </> : <>
                <li><Link to='/register'>Register</Link></li>
            </>
        }
        <li><Link to='/dashboard/mycart'>
     
            <button style={{marginTop: '-13px'}} className="btn">
                <FaShoppingCart></FaShoppingCart>
                <div class="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
        </Link></li>
       
    
    </>
    return (
      <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-600 rounded-box w-52">
                          {allNav}
  
                        </ul>
                    </div>
                    <Link to='/'>   Creatique Commerce</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {allNav}
                    </ul>
                </div>
            </div>
      
      </div>
    )

    
  
}
export default NavBar;