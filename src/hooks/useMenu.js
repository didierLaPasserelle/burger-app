import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../components/utils/array";
import { synchBothMenus } from "../api/product";

export const useMenu = () => {
  const [menu, setMenu] = useState();

  // comportements
  const handleAdd = (newProduct, username) => {
    // 1. copie du tableau
    const menuCopy = deepClone(menu);

    // 2. manip de la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy];

    // 3. update du state
    setMenu(menuUpdated);
    synchBothMenus(username, menuUpdated);
  };

  const handleDelete = (idOfProductToDelete, username) => {
    //1. copy du state
    const menuCopy = deepClone(menu);

    //2. manip de la copie state
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );

    //3. update du state
    setMenu(menuUpdated);
    synchBothMenus(username, menuUpdated);
  };

  const handleEdit = (productBeingEdited, username) => {
    //1. copy du state
    const menuCopy = deepClone(menu);

    //2. manip de la copie state
    const indexOfProductToEdit = menu.findIndex(
      (product) => product.id === productBeingEdited.id
    );

    menuCopy[indexOfProductToEdit] = productBeingEdited;

    //3. update du state
    setMenu(menuCopy);
    synchBothMenus(username, menuCopy);
  };

  const resetMenu = (username) => {
    setMenu(fakeMenu.MEDIUM);
    synchBothMenus(username, fakeMenu.MEDIUM);
  };

  return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu };
};
