import styled from "styled-components";
import Banner from "../../reusable-ui/Banner";
import Footer from "./Footer/LoginPageFooter";

import LoginPageBody from "./loginpagebody/LoginPageBody";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Banner />
      <LoginPageBody />
      <Footer />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  min-height: 100vh;
`;
