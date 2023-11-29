import { useState } from "react";
import { deepClone } from "../components/utils/array";
import { setLocalStorage } from "./../components/utils/window";

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

  const handleRemoveFromBasket = (idItemToAdd, username) => {
    const basketCopy = deepClone(basket);
    const ItemAlreadyInBasket = basketCopy.find(
      (item) => item.id === idItemToAdd
    );

    if (ItemAlreadyInBasket) {
      handleQuantityDecrementation(idItemToAdd, basketCopy, username);
    }
  };

  const handleDelete = (idOfItemToDelete, username) => {
    const basketCopy = deepClone(basket);
    const basketUpdated = basketCopy.filter(
      (item) => item.id !== idOfItemToDelete
    );
    setBasket(basketUpdated);
    setLocalStorage(username, basketUpdated);
  };

  const handleDeleteBasketItem = (idOfItemToDelete, username) => {
    // decrementQuantity(idOfItemToDecrement, basketCopy, username);
    handleDelete(idOfItemToDelete, username);
  };

  //Gestionnaire de state qui appellent directement les setters dédiés
  const createNewBasketItem = (
    idItemToAdd,
    basketCopy,
    setBasket,
    username
  ) => {
    const newBasketItem = { id: idItemToAdd, quantity: 1 };
    const newBasket = [newBasketItem, ...basketCopy];
    setBasket(newBasket);
    setLocalStorage(username, newBasket);
  };

  const incrementItemAlreadyInBasket = (idItemToAdd, basketCopy, username) => {
    const indexOfBasketItemToIncrement = basketCopy.findIndex(
      (item) => item.id === idItemToAdd
    );
    if (basketCopy[indexOfBasketItemToIncrement].quantity >= 50) {
      displayStopOrderMessage();
    } else {
      basketCopy[indexOfBasketItemToIncrement].quantity += 1;
      setBasket(basketCopy);
      setLocalStorage(username, basketCopy);
    }
  };

  const handleQuantityDecrementation = (idItemToAdd, basketCopy, username) => {
    const indexOfBasketItemToDecrement = basketCopy.findIndex(
      (item) => item.id === idItemToAdd
    );
    const isItemAlreadyInBasket =
      basketCopy[indexOfBasketItemToDecrement].quantity > 1;

    if (isItemAlreadyInBasket) {
      basketCopy[indexOfBasketItemToDecrement].quantity -= 1;
      setBasket(basketCopy);
      setLocalStorage(username, basketCopy);
    }
    // handleDelete(idItemToAdd);
  };

  const displayStopOrderMessage = () => {
    alert("Quel appétit ! Mais tu ne peux pas commander davantage !");
  };

  return {
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteBasketItem,
    handleRemoveFromBasket,
  };
};

