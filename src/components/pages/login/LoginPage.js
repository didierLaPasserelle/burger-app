import styled from "styled-components";
import Banner from "../../reusable-ui/Banner";
import Footer from "./Footer/LoginPageFooter";

import LoginPageBody from "./loginpagebody/LoginPageBody";
import { useState } from "react";

export default function LoginPage() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleDelete = () => { 
    setIsBannerVisible(false)
   }

  return (
    <LoginPageStyled>
      {isBannerVisible && <Banner onClick={handleDelete} />}
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
