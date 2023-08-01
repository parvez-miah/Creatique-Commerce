import React from 'react'
import OurMenu from '../Cover/Cover'
import { Helmet } from 'react-helmet-async'
import featuredbg from '../../../assets/menu/dessert-bg.jpeg'
import dessertimg from '../../../assets/menu/dessert-bg.jpeg'
import soupimg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle'
import MenuCategory from '../MenuCategory/MenuCategory'
import Cover from '../Cover/Cover'
import { Link } from 'react-router-dom'

const Menu = () => {


  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const pizza = menu.filter(item => item.category === 'pizza')
  const salad = menu.filter(item => item.category === 'salad')
  const offred = menu.filter(item => item.category === 'offered')


  return (
    <div>
      <Helmet>
        <title>Menu | Creatique Commerce</title>  
      </Helmet>
      <Cover img={featuredbg} title="our-menu"></Cover>

      <SectionTitle
      
      subHeading="Dont miss"
      heading="Today's offer"
      >
      
      </SectionTitle>

      <MenuCategory items={offred}
      >
      
      </MenuCategory>
      <div className='items-center'>
      
      
        <Link to='/order'>
          <button className="btn btn-outline border-0 border-b-4 mt-8">Order Now</button>

        </Link></div>
    </div>
  )
}

export default Menu