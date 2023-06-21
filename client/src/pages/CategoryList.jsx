import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import DishListDisplay from '../components/DishListDisplay'
import { useLocation } from 'react-router-dom'

const Container = styled.div`
`

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`

const CategoryList = () => {
  const location = useLocation();

  const category = location.state.cardCattegory;
  
  return (
    <Container>
      <Navbar/>
      <Title>{category}</Title>
      <DishListDisplay category={category}/>
      
    </Container>
  )
}

export default CategoryList