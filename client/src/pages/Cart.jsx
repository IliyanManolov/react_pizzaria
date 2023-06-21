import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import CartDisplay from '../components/CartDisplay'


const Container = styled.div`
  
`

const Cart = () => {
  return(
    <Container>
      <Navbar/>
      <CartDisplay/>
    </Container>
  )

}

export default Cart 