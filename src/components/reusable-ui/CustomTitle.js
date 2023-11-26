import React from "react";
import { theme } from "../../theme";
import styled from "styled-components";

export const CustomTitle = ({ onClick, className, text }) => {
  return (
    <CustomTitleStyled onClick={onClick} className={className}>
      {text}
    </CustomTitleStyled>
  );
};

const CustomTitleStyled = styled.div`
  color: ${theme.colors.greyMedium};
  text-decoration: none;

  &.is-active {
    color: ${theme.colors.newDark};
  }

  &:hover{
    cursor: pointer;
  }

`;
