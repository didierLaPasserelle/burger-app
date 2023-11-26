import { MdOutlinePedalBike } from "react-icons/md";
import { theme } from "../../theme";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";

export default function Banner({ onClick }) {
  return (
    <BannerStyled className="banner">
      <div className="message">
        <MdOutlinePedalBike color={theme.colors.greyBlue} />
        <span>
          Rappel pour vos nouveaux clients : livraison offerte dès 60€ d'achat*
        </span>
      </div>
      <button onClick={onClick}>
        <RxCross1 />
      </button>
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
  z-index: 3;

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

  button {
    background: transparent;
    border: none;
    color: ${theme.colors.white};
    margin-right: 15px;
    cursor: pointer;
  }
`;
