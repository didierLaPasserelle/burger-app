import React, { useContext } from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { IMAGE_BY_DEFAULT } from "../../../../enums/product";
import OrderContext from "../../../../../context/OrderContext";

export default function BasketItems({ basket, handleDeleteBasketItem}) {

  const { isModeAdmin } = useContext(OrderContext); 

  return (
    <BasketItemsStyled>
      {basket.map((item) => (
        <div key={item.id} className="basket-card">
          <BasketCard
            {...item}
            imageSource={item.imageSource ? item.imageSource : IMAGE_BY_DEFAULT}
            onDelete={()=> handleDeleteBasketItem(item.id)}
            isClickable={isModeAdmin}
          />
        </div>
      ))}
    </BasketItemsStyled>
  );
}

const BasketItemsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scroll-behavior: smooth;
  
  .basket-card {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    :first-child {
      margin-top: 20px;
    }
    :last-child {
      margin-bottom: 20px;
    }
  }
`;
