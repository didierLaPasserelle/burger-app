import styled from "styled-components";
import Footer from "./Footer/LoginPageFooter";
import LoginPageBody from "./loginpagebody/LoginPageBody";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <LoginPageBody />
      <Footer />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 87% 1fr;
`;
