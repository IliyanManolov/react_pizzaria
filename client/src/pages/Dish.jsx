import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Container = styled.div`
  
`
const Wrapper = styled.div`
  display: flex;
  padding: 30px;
`

const ImageContainer = styled.div`
  flex: 1;
  margin: 0px 15px;
`
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`

const InformationContainer = styled.div`
  flex: 2;
  position: relative;
  font-size: 20px;
`
const Title = styled.h1`
  font-weight: 250;
  margin-left: 10px;
`
const Description = styled.p`
  margin: 12px 0px;
`
const Ingredients = styled.ul`
  list-style-type: circle;
  margin-left: 16px;
`

const PriceInfoContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  width: 30%;
  justify-content: space-evenly;
`

const Price = styled.span`
  font-size: 35px;
`

const Button = styled.button`
  background-color: transparent;
  width: 150px;
  cursor: pointer;
  font-size: 20px;

  :hover{
    background-color: #F8F4F4;
  }
`

const Dish = () =>{
  const location = useLocation();

  console.log(location.state)
  const dish = location.state.currentDish
  const IngredientsList = dish.ingredients.map((ingr) =>
  <li>{ingr}</li> )

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addProduct({product:dish, quantity: 1})
    )
  };

  return (
    <Container>
      <Navbar/>
      <Wrapper>
        <ImageContainer>
          <Image src={dish.picture}/>
        </ImageContainer>

        <InformationContainer>
          <Title>
            {dish.title}
          </Title>

          <Description>
            Ingredients:
            <Ingredients>
              {IngredientsList}
            </Ingredients>
          </Description>

          <PriceInfoContainer>
            <Price>{dish.price}</Price>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </PriceInfoContainer>
          
        </InformationContainer>
      </Wrapper>
    </Container>
  )
}

export default Dish