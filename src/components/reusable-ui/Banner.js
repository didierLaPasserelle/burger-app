import React from "react";
import { MdOutlinePedalBike } from "react-icons/md";
import { theme } from "../../theme";
import styled from "styled-components";

export default function Banner() {

  const handleDelete = () => {
    const banner = document.querySelector(".banner");
    if (banner) banner.remove();
    
  };
  return (
    <BannerStyled className="banner">
      <div className="message">
        <MdOutlinePedalBike color={theme.colors.greyBlue} />
        <span>
          Rappel pour vos nouveaux clients : livraison offerte dès 60€ d'achat*
        </span>
      </div>
      <span className="closing-cross" onClick={handleDelete}>X</span>
    </BannerStyled>
  );
}

const BannerStyled = styled.div`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.SM};
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;

  .icon {
    color: ${theme.colors.greyMedium};
  }

  .message {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    span {
      margin-left: 5px;
    }
  }

  .closing-cross {
    cursor: pointer;
    text-align: right;
  }
`;
