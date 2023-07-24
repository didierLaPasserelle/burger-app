import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

export default function Menu() {

const [products, setProducts] = useState([])

  return (
    <MenuStyled>Menu</MenuStyled>
  )
}

const MenuStyled = styled.div`
  
    background: purple;
  
`;