import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ label, Icon, onClick, className }) {
  return (
    <TabStyled onClick={onClick} className={className}>
        <div className="icon">
            {Icon && Icon}
            {label && <span className="label">{label}</span>}
        </div> 
    </TabStyled>)
}

const TabStyled = styled.button`
  height: 43px;
  padding: 0 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: 1px;

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
    border-bottom: 2px solid ${theme.colors.white};
  }

  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .label {
    margin-left: 13px;
  }
`;
