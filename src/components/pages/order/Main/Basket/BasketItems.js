import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketItems() {
  return (
  <BasketItemsStyled>
    Votre commande est vide.
  </BasketItemsStyled>
  )
}

const BasketItemsStyled = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.white};
  color: ${theme.colors.greyBlue};
  box-shadow: ${theme.shadows.basket};
  font-size: ${theme.fonts.size.P4};
  line-height: 2;
`;
