import React from 'react'
import styled from 'styled-components'
import DishCard from './DishCard'
import { Burgers, Pizzas } from '../data'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`


const DishListDisplay = ({category}) =>{

  switch (category){
    case ("Pizza"):
      return (
        <Container>
          {Pizzas.map(item =>(
            <DishCard dish={item}/>
          ))}
        </Container>
      )

    case ("Burgers"):
      return (
        <Container>
          {Burgers.map(item =>(
            <DishCard dish={item}/>
          ))}
        </Container>
      )
  }
}

export default DishListDisplay