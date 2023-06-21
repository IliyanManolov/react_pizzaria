import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import {Slides} from '../data'


const Container = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  position:relative;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  top: 0;
  bottom: 0;
  margin: auto;

  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};

  cursor:pointer;
  opacity: 0.7;
  background-color: blue;
`


const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`
const DisplayContainer = styled.div`
  display: flex;
  align-items:center;
  width: 100%;
  height: 100vh;

`
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;

`
const InformationContainer = styled.div`
  flex: 1;
  padding: 50px;

`

const Image = styled.img`
  height:90%;
  width:100%;
`

const Title = styled.h1`
  font-size: 50px;
`

const Description = styled.p`
  margin-top: 20px;
  font-size: 20px;
`


const Slider = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  function switchToPrevious(){
    
    if (currentIndex === 0)
      setCurrentIndex(Slides.length - 1)

    else
      setCurrentIndex(currentIndex - 1)
  }

  function switchToNext(){
    if (currentIndex === Slides.length - 1)
      setCurrentIndex(0)
    else
      setCurrentIndex(currentIndex + 1)
  }

  return(
    <Container>
      <Arrow direction="left" onClick={switchToPrevious}>
        <ArrowBackIos></ArrowBackIos>
      </Arrow>

      <Wrapper>
        <DisplayContainer>
          <ImageContainer>
            <Image src={Slides[currentIndex].url}/>
          </ImageContainer>

          <InformationContainer>
            <Title>{Slides[currentIndex].title}</Title>
            <Description>{Slides[currentIndex].desc}</Description>
          </InformationContainer>          
        </DisplayContainer>
      </Wrapper>

      <Arrow direction="right" onClick={switchToNext}>
        <ArrowForwardIos></ArrowForwardIos>
      </Arrow>
    </Container>
  )
}

export default Slider;