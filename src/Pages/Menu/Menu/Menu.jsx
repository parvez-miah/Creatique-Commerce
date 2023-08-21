import React from 'react'
import { Helmet } from 'react-helmet-async'
import featuredbg from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../../hooks/useMenu'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle'
import MenuCategory from '../MenuCategory/MenuCategory'
import Cover from '../Cover/Cover'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { useState } from 'react'

const Menu = () => {


  const [menu] = useMenu();
  const [isMobile, setIsMobile] = useState(false);

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
      <Cover className="coverImg" img={featuredbg} title="our-menu"></Cover>

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
          <Button marginBottom="20px" marginLeft="12px" colorScheme='telegram'>Order Now</Button>
        </Link></div>
    </div>
  )
}

export default Menu