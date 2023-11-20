import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import Admin from "./Admin/Admin";
import Menu from "./Menu/Menu";
import { adminAnimation } from "../../../../../theme/animations";

export default function MainLeftSide() {
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <MainLeftSideStyled>
      <Menu />
      {isModeAdmin && <Admin />}
    </MainLeftSideStyled>
  );
}

const MainLeftSideStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  ${adminAnimation}
`;
