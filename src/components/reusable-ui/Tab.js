import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ Icon }) {
  return (
    <TabStyled>
        <div className="icon">
            {Icon && Icon}
        </div> 
    </TabStyled>)
}

const TabStyled = styled.button`
  border: 1px solid blue;
  height: 43px;
  padding: 0 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  left: 5%;

  cursor: pointer;

  //fonts
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};

  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};

  //border-radius
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-radius: ${theme.borderRadius.round};

  &:hover {
    border-radius: ${theme.colors.white};
  }

  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
