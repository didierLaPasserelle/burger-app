import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice, replaceFrenchCommaWithDot } from "../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";

export default function Header() {

  const { basket, menu} = useContext(OrderContext);

  const amountToPay = basket.reduce((total, basketItem) => {
    const menuItem = menu.find((item) => item.id === basketItem.id);
    if (menuItem) {
      total += replaceFrenchCommaWithDot(menuItem.price) * basketItem.quantity
    }
    return total;
  }, 0);

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
