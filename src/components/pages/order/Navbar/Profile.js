import { BsPersonCircle } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import styled from "styled-components";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
import { useContext, useState } from "react";
import { dropDownFadeIn } from "../../../../theme/animations";

export default function Profile() {
  const { username } = useContext(OrderContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropDownMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ProfileStyled>
      <BsPersonCircle />
      <p>{username}</p>
      <button onClick={dropDownMenu}>
        <RiArrowDropDownLine />
      </button>

      {isMenuOpen && (
        <div className="dropdown-content">
          <a href="#">Mes informations</a>
          <a href="/">Déconnexion</a>
        </div>
      )}
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  border: 1px solid ${theme.colors.newDark};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px 10px;
  border-radius: 10px;
  position: relative;

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
