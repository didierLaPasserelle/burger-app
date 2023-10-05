import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { useParams } from "react-router-dom";
import { getMenu } from "../../../api/product";
import { getLocalStorage } from "../../utils/window";

export default function OrderPage() {
  // state
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("edit");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [cardClickedOn, setCardClickedOn] = useState(EMPTY_PRODUCT);
  const [isLoading, setIsLoading] = useState(true);

  const { username } = useParams();
  const titleEditRef = useRef();

  const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu } =
    useMenu();
  const { basket, setBasket, handleAddToBasket, handleDeleteBasketItem } = useBasket();

  const handleItemSelected = async (cardId) => {
    const itemClickedOn = menu.find((item) => item.id === cardId);
    await setCardClickedOn(itemClickedOn);
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    titleEditRef.current.focus();
  };

  const initializeMenu = async () => {
    const menuReceived = await getMenu(username);
    setMenu(menuReceived);
    // console.log("menuReceived: ", menuReceived);
    setIsLoading(false)
  };

  const initializeBasket = () => { 
    const basketReceived = getLocalStorage(username);
    console.log('basketReceived: ', basketReceived)
    if (basketReceived)
    setBasket(basketReceived)
   }
  
  useEffect(() => {
    initializeMenu();
  }, []);
  
  useEffect(() => {
    initializeBasket()
  }, []);
  

  const orderContextValue = {
    username,
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
    handleEdit,
    newProduct,
    resetMenu,
    setNewProduct,
    cardClickedOn,
    setCardClickedOn,
    titleEditRef,
    basket,
    handleAddToBasket,
    handleDeleteBasketItem,
    handleItemSelected,
    isLoading,
    setIsLoading
  };

  //affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1300px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
