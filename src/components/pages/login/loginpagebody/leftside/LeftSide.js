import styled from "styled-components";
import LogoEpicery from "../../../../reusable-ui/LogoEpicery";
import Welcome from "./Welcome";
import { theme } from "../../../../../theme";

export default function LeftSide() {
  return (
    <LetftSideStyled>
      <LogoEpicery color={theme.colors.primary} className={"logo-login-page"} />
      <Welcome />
    </LetftSideStyled>
  );
}

const LetftSideStyled = styled.div`
  background: url("/images/background-veggies3.jpg") center/cover no-repeat
    rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo-login-page {
    transform: scale(4);
    margin: 70px 0;
  }
`;
