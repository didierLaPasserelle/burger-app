import React from "react";
import EmptyBasket from "./EmptyBasket";
import BasketItems from "./BasketItems";

export default function BasketContent({
  isEmptyBasket,
  basket,
  handleDeleteBasketItem,
  isLoadingContent
}) {

  return (
    <>
      {isEmptyBasket ? (
        <EmptyBasket isLoadingContent={isLoadingContent}/>
      ) : (
        <BasketItems
          basket={basket}
          handleDeleteBasketItem={handleDeleteBasketItem}
        />
      )}
    </>
  );
}
