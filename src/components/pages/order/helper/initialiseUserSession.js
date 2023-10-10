import { getMenu } from "../../../../api/product";
import { getLocalStorage } from "../../../utils/window";

const initializeMenu = async (username, setMenu, setIsLoading) => {
  const menuReceived = await getMenu(username);
  setMenu(menuReceived);
  setIsLoading(false);
};

const initializeBasket = (username, setBasket) => {
  const basketReceived = getLocalStorage(username);
  if (basketReceived) setBasket(basketReceived);
};

// L'idée est que initializeBasket() soit appelé après que initializeMenu() ait terminé.
export const initialiseUserSession = async (
  username,
  setMenu,
  setBasket,
  setIsLoading
) => {
  await initializeMenu(username, setMenu, setIsLoading); // Le basket a besoin des données du menu, donc un await devant l'appel de la fonction
  initializeBasket(username, setBasket);
};
