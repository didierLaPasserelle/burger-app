import React from "react";
import { theme } from "../../theme";
import styled from "styled-components";

export const CustomLink = ({ onClick, className, text }) => {
  return (
    <CustomLinkStyled onClick={onClick} className={className}>
      {text}
    </CustomLinkStyled>
  );
};

const CustomLinkStyled = styled.div`
  color: ${theme.colors.newDark};
  text-decoration: none;

  &.is-active {
    color: ${theme.colors.primary};
  }

  &:hover{
    cursor: pointer;
  }

`;
