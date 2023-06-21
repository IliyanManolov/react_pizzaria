import { AddShoppingCart } from '@material-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  margin: 5px;
  min-width: 280px;
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
const PopularCategory = styled.div`
  position: absolute;
  top: 3%;
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 30px;
`

const PopularName = styled.div`
  position: absolute;
  bottom: 2%;
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

const PopularDish = ({dish}) =>{
  const navigate = useNavigate();

  return (
    <Container>
      <Image src={dish.picture}/>

      <InformationContainer>
        <PopularCategory>{dish.category}</PopularCategory>
        <PopularName>{dish.title}</PopularName>
        <Icon>
          <AddShoppingCart/>
        </Icon>
      </InformationContainer>
    </Container>
  )
}

export default PopularDish