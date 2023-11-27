import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { useParams } from "react-router-dom";
import { initialiseUserSession } from "./helper/initialiseUserSession";
import Banner from "../../reusable-ui/Banner";

export default function OrderPage() {
  // state
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("edit");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [cardClickedOn, setCardClickedOn] = useState(EMPTY_PRODUCT);
  const [isLoading, setIsLoading] = useState(true);
  const [isBasketVisible, setIsBasketVisible] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const { username } = useParams();
  const titleEditRef = useRef();

  const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu } =
    useMenu();
  const { basket, setBasket, handleAddToBasket, handleDeleteBasketItem } =
    useBasket();

  const handleItemSelected = async (cardId) => {
    const itemClickedOn = menu.find((item) => item.id === cardId);
    await setCardClickedOn(itemClickedOn);
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    titleEditRef.current.focus();
  };

  const handleBannerDelete = () => {
    setIsBannerVisible(false);
  };

  const toggleBasketVisibility = () => {
    setIsBasketVisible(!isBasketVisible);
  };

  useEffect(() => {
    initialiseUserSession(username, setMenu, setBasket, setIsLoading);
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
    setIsLoading,
    isBasketVisible,
    setIsBasketVisible,
    toggleBasketVisibility,
  };

  //affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        {isBannerVisible && <Banner onClick={handleBannerDelete} />}
        <Navbar />
        <Main />
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.primary};
  min-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
