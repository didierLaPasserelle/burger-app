import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import CasinoEffect from "../../../../reusable-ui/CasinoEffect";
import { calculateAmountToPay } from "./helper/mathBasket";
import { formatPrice } from "../../../../utils/maths";
import Button from "../../../../reusable-ui/Button";

export default function Footer() {
  const { basket, menu } = useContext(OrderContext);

  const amountToPay = calculateAmountToPay(basket, menu);
  return (
    <FooterStyled>
      <div className="container">
        <span>
          Total <span className="no-delivery"> (sans livraison)</span>
        </span>
        <CasinoEffect count={formatPrice(amountToPay)} />
      </div>
      <div className="btn-container">
        <Button version="normal" label="Valider mon panier" />
      </div>
    </FooterStyled>
  );
}

const FooterStyled = styled.span`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.white};
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.P0};
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.white};
  font-family: "Gilroy" "sans serif";
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};


  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.newDark};
    margin: 20px;
  }

  .no-delivery{
    font-weight: ${theme.fonts.weights.ultraLight};
    font-size: ${theme.fonts.size.XS}
  }

  .btn-container {
    margin: 0 50px;
    padding-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
