import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone } from "../components/utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (itemToAdd) => {
    const basketCopy = deepClone(basket);
    const isItemAlreadyInBasket =
      basketCopy.find((item) => item.id === itemToAdd.id) !== undefined;

    // 1er cas, le produit n'est pas déjà dans le basket
    if (!isItemAlreadyInBasket) {
      createNewItemInBasket(itemToAdd, basket, setBasket);
      return;
    }

    // 2è cas : le produit est pas dans le basket
    incrementItemAlreadyInBasket(basketCopy, itemToAdd);
  };

  const handleDeleteBasketItem = (idOfItemToDelete) => {
    const basketCopy = deepClone(basket)
    const basketUpdated = basketCopy.filter((item) => item.id !== idOfItemToDelete)
    setBasket(basketUpdated)
  }

  //Gestionnaire de state qui appellent directement les setters dédiés
  const incrementItemAlreadyInBasket = (basketCopy, itemToAdd) => {
    const indexOfBasketItemToIncrement = basketCopy.findIndex(
      (item) => (item.id = itemToAdd.id)
    );
    basketCopy[indexOfBasketItemToIncrement].quantity += 1;
    setBasket(basketCopy);
  };

  //Gestionnaire de state qui appellent directement les setters dédiés
  function createNewItemInBasket(itemToAdd, basketCopy, setBasket) {
    const newItemToAddToBasket = {
      ...itemToAdd,
      quantity: 1,
    };

    const basketUpdated = [newItemToAddToBasket, ...basketCopy];

    setBasket(basketUpdated);
  }


  return { basket, handleAddToBasket, handleDeleteBasketItem };
};

//handleAddToBasket est un gros gestionnaire de state qui appelle des petits gestionnaires de state  