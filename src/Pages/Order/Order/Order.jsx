import { useState } from "react";
import { Helmet } from "react-helmet-async"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {

const [tabIndex, setTabIndex]= useState(0);

const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')


  return (
    <div>
          <Helmet>
              <title>Order | Creatique Commerce</title>
          </Helmet>
          <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/YkV9hVT/order.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Order</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
          <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
              <TabList>
                  <Tab>Salad</Tab>
                  <Tab> Pizza</Tab>
                  <Tab>Soup </Tab>
                  <Tab> Dessert</Tab>
                  <Tab> Drinks</Tab>
              </TabList>
            <TabPanel>
              <OrderTab items={salad}></OrderTab>
            </TabPanel>
           
              <TabPanel
              >
                  <OrderTab items={pizza}></OrderTab>
              
              </TabPanel>
              <TabPanel>
                  <OrderTab items={soup}></OrderTab>
              
              </TabPanel>
              <TabPanel>
                  <OrderTab items={dessert}></OrderTab>
              
              
              </TabPanel>
              <TabPanel>
                  <OrderTab items={drinks}></OrderTab>
              
              </TabPanel>
          </Tabs>
    
    </div>
  )
}

export default Order