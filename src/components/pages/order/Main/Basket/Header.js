import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import CasinoEffect from "../../../../reusable-ui/CasinoEffect";

export default function Header() {
  const { basket } = useContext(OrderContext);

  const totalQuantity = basket.reduce((totalQuantity, basketItem) => {
    totalQuantity += basketItem.quantity;
    return totalQuantity;
  }, 0);

  return (
    <HeaderStyled>
      <span>
        <span className="title">Mon panier</span> |{" "}
        <span className="article">
          <CasinoEffect count={totalQuantity} />
          <span className="label"> article(s)</span>
        </span>
      </span>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Gilroy", sans-serif;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.P2};
  font-weight: ${theme.fonts.weights.regular};
  padding: 15px 14px;

  .title {
    font-weight: ${theme.fonts.weights.bold};
  }

  .article {
    display: inline-flex;
    font-size: ${theme.fonts.size.P0};

    .label {
      margin-left: 3px;
    }
  }

  button {
    background: transparent;
    border: none;
    color: ${theme.colors.white};
    margin-right: 8px;
    cursor: pointer;
  }
`;
