import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import LogoEpicery from "../../../../reusable-ui/LogoEpicery";

export default function Footer() {
  return (
    <FooterStyled>
      <LogoEpicery />
    </FooterStyled>
  );
}

const FooterStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  background: ${theme.colors.background_dark};
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.P2};
  font-family: ${theme.fonts.families.stylish};
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.white};
  padding: 0px 16px;
`;
