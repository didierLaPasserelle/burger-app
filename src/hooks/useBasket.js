import { useState } from "react";
import { deepClone } from "../components/utils/array";
import { setLocalStorage } from "./../components/utils/window"

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (idItemToAdd, username) => {
    const basketCopy = deepClone(basket);
    const ItemAlreadyInBasket = basketCopy.find(
      (item) => item.id === idItemToAdd
    );

    if (ItemAlreadyInBasket) {
      incrementItemAlreadyInBasket(idItemToAdd, basketCopy, username);
      return;
    }

    createNewBasketItem(idItemToAdd, basketCopy, setBasket, username);
  };

  //Gestionnaire de state qui appelle directement les setters dédiés
  const incrementItemAlreadyInBasket = (idItemToAdd, basketCopy, username) => {
    const indexOfBasketItemToIncrement = basketCopy.findIndex(
      (item) => item.id === idItemToAdd
    );
    basketCopy[indexOfBasketItemToIncrement].quantity += 1;
    setBasket(basketCopy);
    setLocalStorage(username, basketCopy)
  };

  //Gestionnaire de state qui appellent directement les setters dédiés
  const createNewBasketItem = (idItemToAdd, basketCopy, setBasket, username) => {
    const newBasketItem = { id: idItemToAdd, quantity: 1 };
    const newBasket = [newBasketItem, ...basketCopy];
    setBasket(newBasket);
    setLocalStorage(username, newBasket)

  };

  const handleDeleteBasketItem = (idOfItemToDelete, username) => {
    const basketCopy = deepClone(basket);
    const basketUpdated = basketCopy.filter(
      (item) => item.id !== idOfItemToDelete
    );
    setBasket(basketUpdated);
    setLocalStorage(username, basketUpdated)
  };

  return { basket, setBasket, handleAddToBasket, handleDeleteBasketItem };
};
