import HomeBanner from '../HomeBanner/HomeBanner'
import Category from '../Category/Category'
import PopularMenu from '../PopularMenu/PopularMenu'
import Featured from '../Featured/Featured'
import Testimonials from '../Testimonials/Testimonials'
import { Helmet } from 'react-helmet-async'
import Blog from '../Blog/Blog'
import { useState } from 'react'
import { useEffect } from 'react'
import Loader from '../../Shared/Loader/Loader'


const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

   
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
    
      <Helmet>
        <title>Home | Creatique Commerce </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {
        isLoading ? <><Loader></Loader></> : <><HomeBanner></HomeBanner>
          <Category></Category>
          <PopularMenu></PopularMenu>
          <Blog></Blog>
          <Testimonials></Testimonials></>
      }

    </div>
  )
}

export default Home