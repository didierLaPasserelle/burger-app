import React, { useContext } from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { IMAGE_BY_DEFAULT } from "../../../../enums/product";
import OrderContext from "../../../../../context/OrderContext";
import { checkIfProductIsClicked } from "../MainRightSide/Menu/helper";

export default function BasketItems() {
  const {
    isModeAdmin,
    basket,
    handleDeleteBasketItem,
    menu,
    handleItemSelected,
    cardClickedOn,
  } = useContext(OrderContext);

  const handleOnDelete = (e, id) => {
    e.stopPropagation();
    handleDeleteBasketItem(id);
  };

  return (
    <BasketItemsStyled>
      {basket.map((basketItem) => {
        const menuItem = menu.find((Item) => Item.id === basketItem.id);
        return (
          <div key={menuItem.id} className="basket-card">
            <BasketCard
              {...menuItem}
              imageSource={
                menuItem.imageSource ? menuItem.imageSource : IMAGE_BY_DEFAULT
              }
              quantity={basketItem.quantity}
              onDelete={(e) => handleOnDelete(e, basketItem.id)}
              isSelected={checkIfProductIsClicked(
                basketItem.id,
                cardClickedOn.id
              )}
              isClickable={isModeAdmin}
              onClick={
                isModeAdmin ? () => handleItemSelected(menuItem.id) : null
              }
            />
          </div>
        );
      })}
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
