import React, {useEffect} from 'react'
import styled from 'styled-components'
import DishCard from './DishCard'
import { Burgers, Pizzas } from '../data'
import axios from 'axios'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`

const DishListDisplay = ({category}) =>{
  
  const getProducts = async () => {
    try{
      const productsURL = "http://localhost:5000/api/products";

      const response = await axios.get(productsURL);
      console.log(response.data)
      return response.data;
    }catch (err) {console.log(err)}
  }

  const products = getProducts();

  //TO-DO: sort through the products and only used the needed category

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