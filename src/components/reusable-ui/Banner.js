import React from "react";
import { MdOutlinePedalBike } from "react-icons/md";
import { theme } from "../../theme";
import styled from "styled-components";
import Footer from "../pages/login/Footer";

export default function Banner() {
  return (
    <BannerStyled>
      <MdOutlinePedalBike color={theme.colors.greyBlue} />
      <span>
        Rappel pour vos nouveaux clients : livraison offerte dès 60€ d'achat*
      </span>
    </BannerStyled>
  );
}

const BannerStyled = styled.div`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.SM};
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  .icon {
    color: ${theme.colors.greyMedium};
  }
`;
