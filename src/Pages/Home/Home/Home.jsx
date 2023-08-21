import React, { Component } from 'react'
import HomeBanner from '../HomeBanner/HomeBanner'
import Category from '../Category/Category'
import PopularMenu from '../PopularMenu/PopularMenu'
import Featured from '../Featured/Featured'
import Testimonials from '../Testimonials/Testimonials'
import { Helmet } from 'react-helmet-async'
import Blog from '../Blog/Blog'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home | Creatique Commerce </title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
      <HomeBanner></HomeBanner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Blog></Blog>
        <Testimonials></Testimonials>
      
      </div>
    )
  }
}
