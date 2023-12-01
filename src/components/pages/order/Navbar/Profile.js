import styled from "styled-components";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
import { useContext, useState } from "react";
import { dropDownFadeIn } from "../../../../theme/animations";
import getBoxesConfig from "./navbarRightSideConfig";

export default function Profile({ displayToastNotification }) {
  const { username, toggleBasketVisibility } = useContext(OrderContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropDownMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarBoxes = getBoxesConfig(
    username,
    dropDownMenu,
    toggleBasketVisibility,
    displayToastNotification
  );

  return (
    <ProfileStyled>
      {navbarBoxes.map((box) => {
        const boxStyle =
          box.text === "Admin"
            ? "box-style admin"
            : box.text === "Panier"
            ? "box-style panier"
            : "box-style";

        return (
          <div key={box.id}>

            <div className={boxStyle} onClick={box.onClick}>
              {box.icon}
              <p>{box.text}</p>
              <button onClick={box.onClick}>
                {box.buttonIcon ? box.buttonIcon : ""}
              </button>
            </div>

            {box.text === username && isMenuOpen && (
              <div className="dropdown-content">
                <a href="#">Mes informations</a>
                <a href="/">Déconnexion</a>
              </div>
            )}
            
          </div>
        );
      })}
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  position: relative;
  display: flex;
  gap: 15px;

  .gift-icon {
    cursor: pointer;
    position: absolute;
    top: 35px;
    right: 50px;
    color: ${theme.colors.newDark};
  }

  .notification-badge {
    position: absolute;
    top: 28px;
    right: 45px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: red;
  }

  .box-style {
    border: 1px solid ${theme.colors.newDark};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px 10px;
    border-radius: 10px;
    cursor: pointer;

    &.admin {
      background: ${theme.colors.newDark};
      color: ${theme.colors.primary};

      :hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
        transition: 200ms ease-out;
      }
      :active {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.white};
      }
    }
    &.panier {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      border: ${theme.colors.primary};

      :hover {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.primary};
        transition: 200ms ease-out;
      }
      :active {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
      }
    }
  }

  p {
    font-weight: ${theme.fonts.weights.bold};
  }

  button {
    cursor: pointer;
    border: none;
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    font-size: ${theme.fonts.size.P2};
  }

  .dropdown-content {
    z-index: 5;
    display: block;
    position: absolute;
    white-space: nowrap;
    top: 44px;
    right: 2;
    background-color: ${theme.colors.white};
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    animation: ${dropDownFadeIn} 0.3s ease-in-out;
  }

  .dropdown-content a {
    color: ${theme.colors.newDark};
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    transition: background-color 0.3s;

    &:hover {
      background: ${theme.colors.greyLight};
    }
  }
`;
