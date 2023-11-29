import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { BASKET_MESSAGE } from "../../../../../../enums/product";

export default function EmptyBasket({ isLoadingContent }) {
  return (
    <EmptyBasketStyled>
      <span className="empty-message">
        {isLoadingContent ? BASKET_MESSAGE.LOADING : BASKET_MESSAGE.EMPTY}
      </span>
    </EmptyBasketStyled>
  );
}

const EmptyBasketStyled = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-content: center;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};

  .empty-message {
    align-self: center;
    line-height: 2;
    font-family: ${theme.fonts.families.gilroy};
    font-size: ${theme.fonts.size.P3};
    color: ${theme.colors.greyBlue};
  }
`;
