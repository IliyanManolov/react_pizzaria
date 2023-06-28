import { AddShoppingCart } from '@material-ui/icons'
import React from 'react'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  margin: 5px;
  min-width: 280px;
  max-width: 500px;
  height: 450px;
  align-items: center;
  justify-content: center;
  background-color: #D9E3D6;

`
const Image = styled.img`
  height: 80%;
  width: 90%;
`

const InformationContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const DishName = styled.div`
  position: absolute;
  top: 2%;
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 28px;
`

const Icon = styled.div`
  position: absolute;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  bottom: 2%;
  right: 2%;
`

const Button = styled.button`
  position: absolute;
  bottom: 2%;
  background-color: transparent;
  width: 40%;
  height: 7%;
  left: 30%;
  cursor: pointer;
`

const DishCard = ({dish}) =>{
  const navigate = useNavigate();
  const currentDish = dish;

  const dispatch = useDispatch();

  const handleClick = () =>{
    dispatch(
      addProduct({product: dish, quantity: 1})
    )
  };

  return (
    <Container>
      <Image src={dish.picture}/>
      <InformationContainer>
        <DishName>{dish.title}</DishName>
        <Button onClick={() => navigate(`../dish/${dish.title}`, 
        {
          state: {currentDish}
          })}
          >
          DETAILS
        </Button>
        <Icon>
          <AddShoppingCart onClick={handleClick}/>
        </Icon>
      </InformationContainer>
    </Container>
  )
}

export default DishCard