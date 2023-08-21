import React from 'react';
import 'daisyui/dist/full.css';
import './AdminHome.css'; // Custom CSS for styling
import useCart from '../../hooks/useCart';
import { useMenu } from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AdminHome = () => {

  const [allitems, setAllItems] = useState([]);
  const [payment, setPayment] = useState([]);
const {user} = useAuth();



  const [axiosSecure] = useAxiosSecure()

  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await useAxiosSecure.get('https://creatique-commerce-server.vercel.app/users')
    return res.data;

  });

  useEffect(() => {
    fetch('https://creatique-commerce-server.vercel.app/allitems')
      .then(res => res.json())
      .then(data => setAllItems(data))
  }, []);


  useEffect(()=>{
    fetch('https://creatique-commerce-server.vercel.app/payments')
    .then(res=> res.json())
    .then(data=> setPayment(data))
  },[]);

 

  const total = payment.reduce((sum,item)=> sum+item.price*100/100,0 )
  

  return (
    <div className="admin-home">
      <Helmet>
        <title>Admin Dashboard | Creatique Commerce </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1 className="home-title">Admin Dashboard</h1>

      <div className="home-sections">
        <div className="home-section">
          <h2 className="section-title">
            <i className="mr-2 bx bx-cart"></i>Welcome back!
          </h2>
          <p className="section-value">{user?.displayName || 'Anonymous'}</p>
        </div>

       <Link to="/dashboard/manageitems">
          <div className="home-section">
            <h2 className="section-title">
              <i className="mr-2 bx bx-list-ul"></i>Manage All Products
            </h2>
            <p className="section-value">{allitems.length}</p>

            {/* Your product management UI here */}
          </div>
       </Link>

       <Link to="/dashboard/payment-history">
          <div className="home-section">
            <h2 className="section-title">
              <i className="mr-2 bx bx-credit-card"></i>Revenue
            </h2>
            <p className="section-value">${total}</p>
          </div>
       </Link>
      </div>
    </div>
  );
};

export default AdminHome;
