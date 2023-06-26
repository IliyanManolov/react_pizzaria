import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 5px;
  max-height: 90vh; 
  justify-content: center;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
`
const InformationContainer = styled.div`
  display:flex;
  position: absolute;
  justify-content: center;
  justify-items: start;
  width: 100%;
  height: 10%;
  bottom: 0%;
`
const Title = styled.h1`
  text-align:center;
  width: auto;
  height: 50%;
`

const Button = styled.button`
  position: absolute;
  width: 100px;
  height: 20px;
  top: 60%;
  cursor: pointer;
  background-color: transparent;
  border-radius: 5px;
`

const CategoryCard = ({category}) => {
  const navigate = useNavigate();
  const cardCattegory = category.title;

  return (
    <Container>
      <Image src={category.picture}/>
      <InformationContainer>
        <Title>{category.title}</Title>
        
        <Button onClick={() => navigate(`../category/${category.title}`, 
        {
          state: {cardCattegory}
          })}>
            BROWSE
          </Button>

      </InformationContainer>
    </Container>
  )

}


export default CategoryCard