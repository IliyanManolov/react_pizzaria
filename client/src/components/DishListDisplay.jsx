import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import DishCard from './DishCard'
import axios from 'axios'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`

const DishListDisplay = ({category}) =>{
  
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsURL = "http://localhost:5000/api/products";
        const response = await axios.get(productsURL);
        const sortedProducts = response.data.filter((item) => (
          item.category === category
        ));
        setProductsList(sortedProducts);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, [category]);

  return (
    <Container>
      {productsList.map(item => (
        <DishCard dish={item} key={item.id} />
      ))}
    </Container>
  );
}

export default DishListDisplay