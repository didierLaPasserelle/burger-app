import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../components/utils/array";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  // comportements
  const handleAdd = (newProduct) => {
    // 1. copie du tableau
    const menuCopy = deepClone(menu);

    // 2. manip de la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy];

    // 3. update du state
    setMenu(menuUpdated);
  };

  const handleDelete = (idOfProductToDelete) => {
    //1. copy du state
    const menuCopy = deepClone(menu);

    //2. manip de la copie state
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );
  
    //3. update du state
    setMenu(menuUpdated);
  };

  const handleEdit = (productBeingEdited) => {
    //1. copy du state
    const menuCopy = deepClone(menu);

    //2. manip de la copie state
    const indexOfProductToEdit = menu.findIndex(
      (product) => product.id === productBeingEdited.id
    );

    menuCopy[indexOfProductToEdit] = productBeingEdited;

    //3. update du state
    setMenu(menuCopy);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  return { menu, setMenu,handleAdd, handleDelete, handleEdit, resetMenu };
};
