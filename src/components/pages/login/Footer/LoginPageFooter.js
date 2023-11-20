import styled from "styled-components";
import { theme } from "../../../../theme";
import SocialMedia from "../SocialMedia";

export default function LoginPageFooter() {
  return (
    <FooterStyled>
      <div className="author">
        Didier Delaplacette © (Copyright) 2023 - Tous droits réservés.
      </div>
      <SocialMedia />
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  background: ${theme.colors.dark};
  width: 100%;
  color: ${theme.colors.white};
  padding: 20px 30px 10px;

  .author {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
