import { useParams } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import { theme } from "../../../theme";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu"
import { EMPTY_PRODUCT } from "./Main/Admin/AdminPanel/AddForm";


export default function OrderPage() {
  // state
  const { username } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

  const handleAdd = (newProduct) => { 
    const menuCopy = [...menu];
    const menuCopyUpdated = [newProduct, ...menuCopy];
    setMenu(menuCopyUpdated);
  };

  const handleDelete = (productId) => {
    const menuCopy = [...menu]
    const menuUpdatedCopy = menuCopy.filter((product) => product.id !== productId )
    setMenu(menuUpdatedCopy)
    console.log(menuUpdatedCopy);
  }

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM)
  }

  // comportements
  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct
  };

  //affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar username={username} />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  /* background: orange; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    /* background: red; */
    height: 100vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
