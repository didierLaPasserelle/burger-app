import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Welcome() {
  return (
    <WelcomeStyled>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
    </WelcomeStyled>
  );
}

const WelcomeStyled = styled.div`
  margin: 30px 0;
  
  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
    margin-top: ${theme.gridUnit * 5}px;
  }
`;
