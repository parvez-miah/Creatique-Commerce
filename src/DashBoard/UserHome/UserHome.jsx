import React from 'react';
import 'daisyui/dist/full.css';
import useCart from '../../hooks/useCart';
import { useMenu } from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import './UserHome.css'
import useAuth from '../../hooks/useAuth';
import usePayment from '../../hooks/usePayment';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const UserHome = () => {

  const [cart] = useCart();
  const {user} = useAuth()


  const [payment] = usePayment()
  const total = payment.reduce((sum, item) => sum + item.price * 100 / 100, 0)



  



  return (
    <div className="admin-home">
      <Helmet>
        <title>User DashBoard | Creatique Commerce </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1 className="home-title ">User Dashboard</h1>

      <div className="home-sections">
        <div className="home-section">
          <h2 className="section-title">
            <i className="mr-2 bx bx-cart"></i>Welcome
          </h2>
          <p className="section-value">{user?.displayName || 'Anonymous'}</p>
        </div>

        <Link to="/dashboard/pay"> <div className="home-section">
          <h2 className="section-title">
            <i className="mr-2 bx bx-list-ul"></i>Ready to Pay
          </h2>
          <p className="section-value">{cart.length}</p>

          {/* Your product management UI here */}
        </div></Link>

        <div className="home-section">
          <h2 className="section-title">
            <i className="mr-2 bx bx-credit-card"></i>Total Cost
          </h2>
          <p className="section-value">${total}</p>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
