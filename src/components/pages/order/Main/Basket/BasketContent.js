import React from "react";
import EmptyBasket from "./EmptyBasket";
import BasketItems from "./BasketItems";

export default function BasketContent({
  isEmptyBasket,
  basket,
  handleDeleteBasketItem
}) {
  return (
    <>
      {isEmptyBasket ? (
        <EmptyBasket />
      ) : (
        <BasketItems
          basket={basket}
          handleDeleteBasketItem={handleDeleteBasketItem}
        />
      )}
    </>
  );
}
