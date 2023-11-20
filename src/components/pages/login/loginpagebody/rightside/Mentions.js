import React from "react";
import { theme } from "../../../../../theme";
import styled from "styled-components";

export default function Mentions() {
  return (
    <MentionsStyled>
      Vos données personnelles sont traitées par la société EPICERY pour la
      gestion de votre inscription sur le site web EPICERY. Pour en savoir plus,
      consultez notre Politique de confidentialité.
    </MentionsStyled>
  );
}

const MentionsStyled = styled.div`
  font-size: ${theme.fonts.size.XS};
  color: ${theme.colors.greyBlue};
  margin-top: 10px;
  width: 90%;
`;
