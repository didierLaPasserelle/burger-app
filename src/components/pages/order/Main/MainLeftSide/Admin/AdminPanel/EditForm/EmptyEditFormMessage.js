import React from "react";
import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../../../../../../theme";

export default function EmptyEditFormMessage() {
  return (
    <EmptyEditFormMessageStyled>
      <span>Cliquez sur un produit pour le modifier</span>
      <HiCursorClick />
    </EmptyEditFormMessageStyled>
  );
}

const EmptyEditFormMessageStyled = styled.div`
  position: absolute;
  top: 81px;
  left: 71px;
  max-width: 1258px;
  font-family: ${theme.fonts.families.stylish};
  font-size: ${theme.fonts.size.P3};
  color: ${theme.colors.greyBlue};

  span {
    margin-right: 10px;
  }
`;
