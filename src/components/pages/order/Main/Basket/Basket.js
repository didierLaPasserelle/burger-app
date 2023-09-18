import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "./Header";
import { formatPrice } from "../../../../utils/maths"

export default function Basket() {
  return (
    <BasketStyled>
      <Header amount={formatPrice(0)}/>

      <div className="body">
        <p>Votre commande est vide</p>
      </div>
      <div className="footer">Footer</div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  font-family: "Amatic SC", cursive;

  .body {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.white};
    text-transform: uppercase;
    font-size: 36px;
    line-height: 72px;
    font-weight: 400;
    box-shadow: ${theme.shadows.basket};
  
  }

  .footer {
    height: 70px;
    background: ${theme.colors.background_dark};
    color: ${theme.colors.primary};
  }
`;
