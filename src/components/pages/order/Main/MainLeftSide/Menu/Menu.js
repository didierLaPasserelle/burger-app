import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../../reusable-ui/Card/Card";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import {
  EMPTY_PRODUCT,
  IMAGE_BY_DEFAULT,
  IMAGE_OUT_OF_STOCK,
} from "../../../../../../enums/product";
import { isEmpty } from "../../../../../utils/array";
import Loader from "./Loader";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { menuAnimation } from "../../../../../../theme/animations";
import { convertStringToBoolean } from "../../../../../utils/string";
import RibbonAnimated, { ribbonAnimation } from "./RibbonAnimated";

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
    isLoading,
    handleRemoveFromBasket,
    basket,
  } = useContext(OrderContext);
  // state

  // gestionnaire d'évent ou event handlers
  const handleCardClicked = (cardId) => {
    if (!isModeAdmin) return;
    handleItemSelected(cardId);
  };

  const handleCardDelete = (e, idProductToDelete) => {
    e.stopPropagation();
    handleDelete(idProductToDelete, username);
    handleDeleteBasketItem(idProductToDelete, username); // Lors de la suppression d'une Card dans menu, cela supprime en même temps la card dans basketItems.

    if (idProductToDelete === cardClickedOn.id) {
      setCardClickedOn(EMPTY_PRODUCT);
    }
  };

  const handleAddButton = (e, idItemToAdd) => {
    e.stopPropagation();
    // const itemToAddToBasket = menu.find((item) => item.id === idItemToAdd)
    handleAddToBasket(idItemToAdd, username);
  };

  const handleRemoveButton = (e, idOfItemToRemove) => {
    handleRemoveFromBasket(idOfItemToRemove);
  };

  let cardContainerClassName = isModeAdmin
    ? "card-container is-hoverable"
    : "card-container";

  //Affichage
  if (isLoading) return <Loader />;

  // affichage
  if (isEmpty(menu)) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={() => resetMenu(username)} />;
  }

  return (
    <TransitionGroup component={MenuStyled} className="menu">
      {menu.map(
        ({ id, title, imageSource, price, isAvailable, isPublicised }) => {
          const basketItem = basket.find((item) => item.id === id);
          const basketQuantity = basketItem ? basketItem.quantity : 0;
          return (
            <CSSTransition classNames={"menu-animation"} key={id} timeout={300}>
              <div className={cardContainerClassName}>
                {convertStringToBoolean(isPublicised) && <RibbonAnimated />}
                <Card
                  title={title}
                  imageSource={imageSource || IMAGE_BY_DEFAULT}
                  leftDescription={formatPrice(price)}
                  hasDeleteButton={isModeAdmin}
                  onDelete={(e) => handleCardDelete(e, id)}
                  onClick={() => handleCardClicked(id)}
                  isHoverable={isModeAdmin}
                  isSelected={checkIfProductIsClicked(id, cardClickedOn.id)}
                  onAdd={(e) => handleAddButton(e, id)}
                  onRemove={(e) => handleRemoveButton(e, id)}
                  overlapImageSource={IMAGE_OUT_OF_STOCK}
                  isOverlapImageVisible={
                    convertStringToBoolean(isAvailable) === false
                  }
                  quantity={basketQuantity}
                />
              </div>
            </CSSTransition>
          );
        }
      )}
    </TransitionGroup>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  background: url("/images/background-bread.jpg") center/cover no-repeat
    rgba(0, 0, 0, 0.5);
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;

  ${menuAnimation}

  .card-container {
    position: relative;
    height: 330px; // pour éviter une zone de click verticale bizarre qu'on voit qu'au pointeur de l'outil inspect du navigateur
    border-radius: ${theme.borderRadius.extraRound};

    &.is-hoverable {
      :hover {
        transform: scale(1.05);
        transition: ease-out 0.4s;
      }
    }
  }

  .ribbon {
    z-index: 2;
  }
  ${ribbonAnimation}
`;
