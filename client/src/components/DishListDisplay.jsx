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
  
  useEffect(() => {

    const getProducts = async () => {
      try{
        const productsURL = "http://localhost:5000/api/products";  
        await axios.get(productsURL).then((res) => {
          SortProducts(res.data);
        });
      }catch (err) {console.log(err)}
    }

    const products = [getProducts()];
    const productsList = [];

    async function SortProducts(list) {
      list.forEach(item => {
        if (item.category === category){
          productsList.push(item);
        }
      })
      console.log(productsList)
    }    
  }, []); 


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