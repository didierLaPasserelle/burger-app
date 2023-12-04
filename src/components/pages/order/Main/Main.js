import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../../../../theme";
import Basket from "./Basket/Basket";
import MainLeftSide from "./MainLeftSide/MainLeftSide";
import OrderContext from "../../../../context/OrderContext";
import LoginPageFooter from "../../login/Footer/LoginPageFooter";

export default function Main() {
  const { isBasketVisible } = useContext(OrderContext);

  return (
    <MainStyled isBasketVisible={isBasketVisible}>
      <MainLeftSide />
      {isBasketVisible && <Basket />}
    </MainStyled>
  );
}


const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: 100vh;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;
  grid-template-columns: ${({ isBasketVisible }) =>
    isBasketVisible ? "75% 1fr" : "1fr"};
  overflow: hidden;
`;
