import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "./Header";
import Footer from "./Footer";
import BasketContent from "../Basket/BasketBody/BasketContent";

export default function Basket() {
  return (
    <BasketStyled>
      <Header />
      <BasketContent />
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
`;
