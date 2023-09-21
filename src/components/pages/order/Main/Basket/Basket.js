import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "./Header";
import { formatPrice } from "../../../../utils/maths";
import Footer from "./Footer";
import BasketItems from "./BasketItems";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";

export default function Basket() {
  const { basket } = useContext(OrderContext);

  const isEmptyBasket = basket.length === 0;

  const amountToPay = basket.reduce((total, basketItem) => {
    return total + (basketItem.price * basketItem.quantity)
  }, 0)

  console.log('sumToPay: ', amountToPay)


  return (
    <BasketStyled>
      <Header amount={formatPrice(amountToPay)} />
      {isEmptyBasket ? <EmptyBasket /> : <BasketItems basket={basket} />}
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  font-family: ${theme.fonts.families.stylish};
  /* height: 85vh; */

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
