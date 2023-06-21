import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import CategoriesDisplay from '../components/CategoriesDisplay'
import PopularDisplay from '../components/PopularDisplay'

export default function Home(){
  return (
    <div>
        <Navbar/>
        <Slider/>
        <CategoriesDisplay/>
        <PopularDisplay/>
    </div>
  )
}