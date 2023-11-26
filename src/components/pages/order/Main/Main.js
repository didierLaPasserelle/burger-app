import styled from "styled-components";
import { theme } from "../../../../theme";
import Basket from "./Basket/Basket";
import MainLeftSide from "./MainLeftSide/MainLeftSide";

export default function Main() {
  return (
    <MainStyled>
      <MainLeftSide />
      <Basket />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: 100vh;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;
  grid-template-columns: 75% 1fr;
  overflow: hidden;
`;
