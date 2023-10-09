import React, { useContext } from "react";
import styled from "styled-components";
import BasketCard from "../BasketCard"
import { IMAGE_BY_DEFAULT } from "../../../../../enums/product";
import OrderContext from "../../../../../../context/OrderContext"
import { checkIfProductIsClicked } from "../../MainRightSide/Menu/helper"
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketAnimation } from "../../../../../../theme/animations"

export default function BasketItems() {
  const {
    username,
    isModeAdmin,
    basket,
    handleDeleteBasketItem,
    menu,
    handleItemSelected,
    cardClickedOn,
  } = useContext(OrderContext);

  const handleCardClickedInBasket = (cardId) => {
    if (!isModeAdmin) return;
    handleItemSelected(cardId);
  };

  const handleOnDelete = (e, id) => {
    e.stopPropagation();
    handleDeleteBasketItem(id, username);
  };

  return (
    <BasketItemsStyled>
      <TransitionGroup>
        {basket.map((basketItem) => {
          const menuItem = menu.find(
            (menuItem) => menuItem.id === basketItem.id);
          return (
            <CSSTransition
              classNames={"animation-basket"}
              key={menuItem.id}
              timeout={300}
              appear={true}
            >
              <div className="card-container">
                <BasketCard
                  {...menuItem}
                  imageSource={
                    menuItem.imageSource
                      ? menuItem.imageSource
                      : IMAGE_BY_DEFAULT
                  }
                  quantity={basketItem.quantity}
                  onDelete={(e) => handleOnDelete(e, basketItem.id)}
                  isSelected={checkIfProductIsClicked(
                    basketItem.id,
                    cardClickedOn.id
                  )}
                  isClickable={isModeAdmin}
                  onClick={() => handleCardClickedInBasket(menuItem.id)}
                  className={"card"}
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </BasketItemsStyled>
  );
}

const BasketItemsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scroll-behavior: smooth;

  .card-container {
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

  ${basketAnimation}
`;
