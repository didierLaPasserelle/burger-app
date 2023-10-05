import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import { calculateAmountToPay } from "./helper/mathBasket";

export default function Header() {
  const { basket, menu } = useContext(OrderContext);

  console.log('basket: ', basket)
  const amountToPay = calculateAmountToPay(basket, menu);

  return (
    <HeaderStyled>
      <span>Total</span>
      <span>{formatPrice(amountToPay)}</span>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${theme.fonts.families.stylish};
  background: ${theme.colors.background_dark};
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  padding: 0px 16px;
  height: 70px;
`;
