import styled from "styled-components";
import LeftSide from "./leftside/LeftSide";
import RightSide from "./rightside/RightSide";

export default function LoginPageBody() {
  return (
    <LoginPageBodyStyled>
      <LeftSide />
      <RightSide />
    </LoginPageBodyStyled>
  );
}

const LoginPageBodyStyled = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
`;
