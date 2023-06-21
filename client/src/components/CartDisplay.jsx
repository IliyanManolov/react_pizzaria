import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem';
import { TestDish } from '../data';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width:100%;
  height:100vh;
  padding: 20px;
`

const CartDisplay = () =>{
  const ItemsInCart = [TestDish, TestDish];
  return(
    <Container>
      {ItemsInCart.map(item =>(
        <CartItem item={item}/>
      ))}
    </Container>
  )
}

export default CartDisplay