import { Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 5px 0px;
  height: 15%;
  width: 100%;

  display: flex;
`

const ImageContainer = styled.div`
  width: 10%;
  height: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const InformationContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 10px;
  position: relative;
  background-color: #E2D3D0;
`

const Title = styled.div`
  height: 50%;
  width:50%;
  text-align:left;
`

const PriceContainer = styled.div`
  height: 50%;
  width: 50%;
  position: relative;
`

const Price = styled.span`
  position: absolute;
  left: 2%;
  bottom: 5%;
`

const Icon = styled.div`
  height: 30px;
  width: 30px;
  position: absolute;
  right: 1%;
  bottom: 70%;

  cursor: pointer;
`

const CartItem = ({item}) => {

  return(
    <Container>
      <ImageContainer>
        <Image src={item.picture}/>
      </ImageContainer>

      <InformationContainer>
        <Title>{item.title}</Title>
        <PriceContainer>
          <Price>{item.price}</Price>
        </PriceContainer>
        <Icon> 
            <Search/>
        </Icon>
      </InformationContainer>

    </Container>
  )
}

export default CartItem