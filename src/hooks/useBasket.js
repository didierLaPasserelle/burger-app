import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone } from "../components/utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (idItemToAdd) => {
    const basketCopy = deepClone(basket);
    const ItemAlreadyInBasket = basketCopy.find(
      (item) => item.id === idItemToAdd
    );

    if (ItemAlreadyInBasket) {
      incrementItemAlreadyInBasket(idItemToAdd, basketCopy);
      return;
    }

    createNewBasketItem(idItemToAdd, basketCopy, setBasket);
  };

  //Gestionnaire de state qui appelle directement les setters dédiés
  const incrementItemAlreadyInBasket = (idItemToAdd, basketCopy) => {
    const indexOfBasketItemToIncrement = basketCopy.findIndex(
      (item) => item.id === idItemToAdd
    );
    basketCopy[indexOfBasketItemToIncrement].quantity += 1;
    setBasket(basketCopy);
  };

  //Gestionnaire de state qui appellent directement les setters dédiés
  const createNewBasketItem = (idItemToAdd, basketCopy, setBasket) => {
    const newBasketItem = { id: idItemToAdd, quantity: 1 };
    const newBasket = [newBasketItem, ...basketCopy];
    setBasket(newBasket);
  };

  const handleDeleteBasketItem = (idOfItemToDelete) => {
    const basketCopy = deepClone(basket);
    const basketUpdated = basketCopy.filter(
      (item) => item.id !== idOfItemToDelete
    );
    setBasket(basketUpdated);
  };

  return { basket, handleAddToBasket, handleDeleteBasketItem };
};
