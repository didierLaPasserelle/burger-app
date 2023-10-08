import { useContext } from "react";
import styled, { css } from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import Admin from "./Admin/Admin";
import Menu from "./Menu/Menu";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { adminAnimation } from "../../../../../theme/animations";

export default function MainRightSide() {
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <MainRightSideStyled>
      <Menu />
      {isModeAdmin && (
        <TransitionGroup className="transition-group">
          <CSSTransition appear={true} classNames="admin" timeout={3000}>
            <Admin />
          </CSSTransition>
        </TransitionGroup>
      )}
    </MainRightSideStyled>
  );
}


const MainRightSideStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  ${adminAnimation}
`;
