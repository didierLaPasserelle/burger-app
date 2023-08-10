import { useParams } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import { theme } from "../../../theme";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu"


export default function OrderPage() {
  // state
  const { username } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.EMPTY);

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
    setMenu(fakeMenu.SMALL)
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
    resetMenu
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
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
