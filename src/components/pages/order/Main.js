import styled from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  return <MainStyled>Main</MainStyled>;
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1; // pour prendre le reste de la page

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
