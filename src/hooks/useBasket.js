import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone } from "../components/utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.SMALL);

  const handleAddToBasket = (itemToAdd) => {
    //Copie du state;
    const basketCopy = deepClone(basket);

    const isItemAlreadyInBasket = basketCopy.find((item) => item.id === itemToAdd.id) !== undefined

    //Manip' de la copie state:
    // 1er cas, le produit n'est pas déjà dans le basket
    if (!isItemAlreadyInBasket) {
      const newItemToAddToBasket = {
        ...itemToAdd,
        quantity: 1,
      };

      const basketUpdated = [newItemToAddToBasket, ...basket];

      //update du state
      setBasket(basketUpdated);

    } else {

      // 2è cas : le produit n'est pas dans le basket
      const indexOfBasketItemToIncrement = basketCopy.findIndex((item) => (item.id = itemToAdd.id))
      
      basketCopy[indexOfBasketItemToIncrement].quantity += 1 

      //3. update du state
      setBasket(basketCopy)
    }
  };

  return { basket, handleAddToBasket };
};
