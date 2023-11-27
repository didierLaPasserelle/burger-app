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
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;
`;
