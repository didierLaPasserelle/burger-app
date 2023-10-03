import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../../reusable-ui/Card";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import { EMPTY_PRODUCT, IMAGE_BY_DEFAULT } from "../../../../../enums/product";
import { isEmpty } from "../../../../../utils/array";
import Loader from "./Loader";

export default function Menu() {
  const {
    username,
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    cardClickedOn,
    setCardClickedOn,
    handleAddToBasket,
    handleDeleteBasketItem,  
    handleItemSelected,
    isLoading
  } = useContext(OrderContext);
  // state

  // gestionnaire d'évent ou event handlers
  const handleCardClicked = (cardId) => {
    if (!isModeAdmin) return;
    handleItemSelected(cardId)
  };

  const handleCardDelete = (e, idProductToDelete) => {
    e.stopPropagation();
    handleDelete(idProductToDelete, username);
    handleDeleteBasketItem(idProductToDelete) // Lors de la suppression d'une Card dans menu, cela supprime en même temps la card dans basketItems.
   
    if (idProductToDelete === cardClickedOn.id) {
      setCardClickedOn(EMPTY_PRODUCT);
    }
};

  const handleAddButton = (e, idItemToAdd) => {
    e.stopPropagation();
    // const itemToAddToBasket = menu.find((item) => item.id === idItemToAdd)    
    handleAddToBasket(idItemToAdd);
  };


  if (isLoading) {
    return <Loader />;
  }

  // affichage
  if (isEmpty(menu)) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={()=>resetMenu(username)} />;
  }

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={(e) => handleCardDelete(e, id)}
            onClick={() => handleCardClicked(id)}
            isHoverable={isModeAdmin}
            // isSelected={id === cardClickedOn.id}
            isSelected={checkIfProductIsClicked(id, cardClickedOn.id)}
            onAdd={(e) => handleAddButton(e, id)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

`;
