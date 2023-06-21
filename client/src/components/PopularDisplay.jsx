import React from 'react'
import styled from 'styled-components'
import { PopularDishes } from '../data'
import PopularDish from './PopularDish'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`

const PopularDisplay = () =>{
  return (
    <Container>
      {PopularDishes.map(item =>(
        <PopularDish dish={item}/>
      ))}
    </Container>
  )

}

export default PopularDisplay