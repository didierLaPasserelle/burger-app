import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Header({ amount }) {
  return (
    <HeaderStyled>
      <span>Total</span>
      <span>{amount}</span>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background: ${theme.colors.background_dark};
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.P4};
  padding: 0px 16px;
`;
