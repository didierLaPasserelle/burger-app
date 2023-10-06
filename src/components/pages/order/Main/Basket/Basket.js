import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import BasketContent from "./BasketContent";
import { isEmpty } from "../../../../utils/array";

export default function Basket() {
  const { basket, menu } = useContext(OrderContext);

  if (menu === undefined) return <span>Patience ! Ça arrive !</span>;

  const isEmptyBasket = isEmpty(basket);

  return (
    <BasketStyled>
      <Header />
      <BasketContent
        isEmptyBasket={isEmptyBasket}
        isLoadingContent={menu === undefined}
      />
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
