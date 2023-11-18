import styled from "styled-components";
import LogoEpicery from "../../reusable-ui/LogoEpicery";
import LoginForm from "./LoginForm";
import Welcome from "./Welcome";
import Banner from "../../reusable-ui/Banner";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Banner />
      <div className="main">
        <div className="left-side">
          <LogoEpicery className={"logo-login-page"} />
          <Welcome />
        </div>
        <LoginForm />
      </div>
      <Footer />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  min-height: 100vh;
  .main {
    display: grid;
    grid-template-columns: 65% 35%;
    /* border: 1px solid red; */
  }

  background: url("https://www.epicery.com/images/homepage/header-background-refonte.jpg")
    fixed center/cover rgba(0, 0, 0, 0.3);
  background-blend-mode: darken;

  .logo-login-page {
    transform: scale(4);
    margin: 70px 0;
  }

  .left-side {
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px;
  }
`;
