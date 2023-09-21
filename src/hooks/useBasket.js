import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone } from "../components/utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.SMALL);

  const handleAddToBasket = (itemToAddToBasket) => {
    //Copie du state;
    const basketCopy = deepClone(basket);
    const isItemAlreadyInBasket = basketCopy.find(
      (item) => item.id === itemToAddToBasket
    );

    //Manip' du state:
    if (!isItemAlreadyInBasket) {
      const newItemToAddToBasket = {
        ...itemToAddToBasket,
        quantity: 1,
      };

      const basketUpdated = [newItemToAddToBasket, ...basket]

      setBasket(basketUpdated)
    }
    
  };

  return { basket, handleAddToBasket };
};
