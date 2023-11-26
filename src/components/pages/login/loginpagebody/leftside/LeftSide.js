import styled from "styled-components";
import LogoEpicery from "../../../../reusable-ui/LogoEpicery";
import Welcome from "./Welcome";

export default function LeftSide() {
  return (
    <LetftSideStyled>
      <LogoEpicery color={"#12b981"} className={"logo-login-page"} />
      <Welcome />
    </LetftSideStyled>
  );
}

const LetftSideStyled = styled.div`
  background: url("/images/background-xmas.jpg") center/cover no-repeat
    rgba(0, 0, 0, 0.3);
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
