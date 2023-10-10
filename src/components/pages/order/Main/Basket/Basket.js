import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "./Header";
import Footer from "./Footer";
import BasketContent from "../Basket/BasketBody/BasketContent"

export default function Basket() {
  
  return (
    <BasketStyled>
      <Header />
      <BasketContent/>
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;
  /* .head {
    position: sticky;
    top: 0;
  }

  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  } */
`;
