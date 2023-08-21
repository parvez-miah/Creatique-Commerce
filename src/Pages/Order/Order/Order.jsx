import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import './Order.css'

const Order = () => {
  const [menu] = useMenu();
  const [isMobile, setIsMobile] = useState(false);


  // Pagination

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;


  // Mobile 


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Organize menu items into categories
  const categories = {
    salad: "Salad",
    pizza: "Pizza",
    soup: "Soup",
    dessert: "Dessert",
    drinks: "Drinks"
  };

  // Create an object to hold the filtered items for each category
  const filteredItems = {};
  Object.keys(categories).forEach(category => {
    filteredItems[category] = menu.filter(item => item.category === category);
  });

  return (
    <div>
      <Helmet>
        <title>Order | Creatique Commerce</title>
      </Helmet>
      {isMobile ? (
        <section className="order-food-section">

          <div className="order-food-image">
            <img src="https://i.ibb.co/PNXmjGF/Food-Delivery-Scooter-PNG-High-Quality-Image.png" alt="Food" />
          </div>
          <div className="order-food-content">
            <h2 style={{ marginTop: '12px' , textAlign:'left' , fontSize:'25px', fontWeight:'700'}}>Order Your Food</h2>
            <p style={{textAlign:'left'}}>Explore our delicious menu and place your order.</p>
          </div>
        </section>
      ) : (
        <div className="orderTab">
          <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/YkV9hVT/order.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Order</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Tabs variant='soft-rounded' colorScheme='green' marginTop='20px'>
        <TabList >
          {Object.values(categories).map(category => (
            isMobile ? <><Tab style={{ fontSize: '13px' }} key={category}>{category}</Tab></> : <><Tab key={category}>{category}</Tab></>
          ))}
        </TabList>
        <TabPanels>
          {Object.keys(categories).map(category => (
            <TabPanel key={category}>
              <OrderTab items={filteredItems[category].slice(startIndex, endIndex)} />
              <div className="pagination">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage * itemsPerPage >= filteredItems[category].length}
                >
                  Next
                </button>
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Order;