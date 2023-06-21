import { Search, ShoppingCart } from '@material-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
  height:60px;
`
const Wrapper = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items:center;
  justify-content: space-between;
`

const LeftSide = styled.div`
  flex: 1;
  display:flex;
  align-items:center;
`
const SearchContainer = styled.div`
  border: 1px solid grey;
  display:flex;
  align-items:center;
  padding: 3px;
`
const SearchInput = styled.input`
  border:none;
`

const Centre = styled.div`
  flex: 1;
  text-align:center;
`
const Name = styled.h1`
  font-weight: bold;
`

const RightSide = styled.div`
  flex: 1;
  display:flex;
  align-items:center;
  justify-content:end;
`
const MenuOption = styled.div`
  cursor:pointer;
`

export default function Navbar (){
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <LeftSide>
          
          <SearchContainer>
            <SearchInput/>
            <Search/>
          </SearchContainer>
          
        </LeftSide>
        
        <Centre>
          <Name>
            GENERIC PIZZARIA
          </Name>
        </Centre>

        <RightSide>
          <MenuOption onClick={() => navigate('../cart')}><ShoppingCart/></MenuOption>
        </RightSide>
      </Wrapper>
    </Container>
  )
}