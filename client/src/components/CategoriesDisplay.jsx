import React from 'react'
import styled from 'styled-components'
import { FoodCategories } from '../data'
import CategoryCard from './CategoryCard'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width:100%;
  height:100vh;
  padding: 20px;
  justify-content: space-between;
`

const CategoriesDisplay = () => {
  return (
    <Container>
      {FoodCategories.map(item =>(
        <CategoryCard category={item}/>
      ))}

    </Container>
  )

}


export default CategoriesDisplay