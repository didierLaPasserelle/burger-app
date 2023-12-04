import React, { useContext } from "react";
import styled from "styled-components/macro";
import BasketCard from "../BasketCard";
import {
  BASKET_MESSAGE,
  IMAGE_BY_DEFAULT,
} from "../../../../../../enums/product";
import OrderContext from "../../../../../../context/OrderContext";
import { checkIfProductIsClicked } from "../../MainLeftSide/Menu/helper";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketAnimation } from "../../../../../../theme/animations";
import { formatPrice } from "../../../../../utils/maths";
import { convertStringToBoolean } from "../../../../../utils/string";
import Sticker from "../../../../../reusable-ui/Sticker";

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
            (menuItem) => menuItem.id === basketItem.id
          );
          return (
            <CSSTransition
              classNames="animation-basket"
              key={menuItem.id}
              timeout={300}
              appear={true}
            >
              <div className="card-container">
                {convertStringToBoolean(menuItem.isPublicised) && (
                  <Sticker className="badge" />
                )}
                <BasketCard
                  {...menuItem}
                  className="card"
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
                  price={
                    convertStringToBoolean(menuItem.isAvailable)
                      ? formatPrice(menuItem.price)
                      : BASKET_MESSAGE.OUT_OF_STOCK
                  }
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
    position: relative;
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    :first-child {
      margin-top: 20px;
    }
    :last-child {
      margin-bottom: 20px;
    }

    .badge {
      position: absolute;
      z-index: 1;
      bottom: 16%;
      left: 23%;
    }
  }

  ${basketAnimation}
`;
