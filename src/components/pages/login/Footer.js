import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Footer() {
  return (
    <FooterStyled>
      {/* <p>
        Pour votre santé, mangez au moins cinq fruits et légumes par jour, plus
        d’infos sur www.mangerbouger.fr L’abus d’alcool est dangereux pour la
        santé. À consommer avec modération
      </p> */}
      <div className="author">Didier Delaplacette © (Copyright) 2023</div>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  /* background: ${theme.colors.dark}; */
  position: absolute;
  bottom: 0;
  color: ${theme.colors.white};
  padding: 20px 30px;
  margin-top: 50px;

  .author {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
