import React from "react";
import EmptyBasket from "./EmptyBasket";
import BasketItems from "./BasketItems";

export default function BasketContent({
  isEmptyBasket,
  isLoadingContent,
}) {

  return (
    <>
      {isEmptyBasket ? (
        <EmptyBasket isLoadingContent={isLoadingContent} />
      ) : (
        <BasketItems />
      )}
    </>
  );
}
