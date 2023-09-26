import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "./Header";
import { formatPrice, replaceFrenchCommaWithDot } from "../../../../utils/maths";
import Footer from "./Footer";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import BasketContent from "./BasketContent";

export default function Basket() {
  const { basket, handleDeleteBasketItem} = useContext(OrderContext);

  const isEmptyBasket = basket.length === 0;

  const amountToPay = basket.reduce((total, basketItem) => {
    const itemPrice = replaceFrenchCommaWithDot(basketItem.price)
    total += itemPrice * basketItem.quantity;
    return total;
  }, 0);
  
  return (
    <BasketStyled>
      <Header amount={formatPrice(amountToPay)} />
      <BasketContent  
        isEmptyBasket={isEmptyBasket}
        basket={basket}
        handleDeleteBasketItem={handleDeleteBasketItem} 
        />
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
