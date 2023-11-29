import React, { useContext } from "react";
import EmptyBasket from "./EmptyBasket";
import BasketItems from "./BasketItems";
import { isEmpty } from "../../../../../utils/array";
import OrderContext from "../../../../../../context/OrderContext";

export default function BasketContent() {
  const { basket, menu, isBasketVisible } = useContext(OrderContext);

  return (
    <>
      {isBasketVisible && isEmpty(basket) ? (
        <EmptyBasket isLoadingContent={menu === undefined} />
      ) : (
        <BasketItems />
      )}
    </>
  );
}
