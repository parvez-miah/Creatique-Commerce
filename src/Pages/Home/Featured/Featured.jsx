import React, { Component } from 'react'
import FeaturedImage from '../../../assets/home/featured.jpg'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle'
import './Featured.css'

export default class Featured extends Component {
  render() {
    return (
      <section className='featured mt-10 pt-10 bg-fixed'>
      <SectionTitle
      subHeading="check it out"
      heading="From our Menu"
    
      >
      </SectionTitle>

            <div className='md:flex p-10 mb-10  bg-slate-500 bg-opacity-60
'>
      <div>
                    <img className='mb-10' src={FeaturedImage} alt="" />
      </div>

      <div className='md:ml-8 md:my-12'>
      <p>23 JANUARY 2023</p>
      <h3 className='uppercase'>Where i can go?</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quis ipsum numquam reprehenderit fugiat, veritatis, perspiciatis dolorum officia iusto blanditiis hic placeat voluptatem. Facere, quidem veritatis eos facilis sit et perspiciatis nostrum dicta labore iusto molestias quod pariatur tempora nesciunt at aspernatur vero sint, ad quas beatae eum sunt! Vero!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-8">Order Now</button>
      </div>
      </div>
      </section>
    )
  }
}
