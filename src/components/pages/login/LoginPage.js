import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo className={"logo-login-page"} />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url("/images/burger-and-fries-background.jpg") fixed center/cover rgba(0, 0, 0, 0.7);
  background-blend-mode: darken;

  .logo-login-page {
    transform: scale(2.5);
  }
`;
