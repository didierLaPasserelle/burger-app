import styled from "styled-components";
import { useContext } from "react";
import { theme } from "../../../../theme";
import Card from "../../../reusable-ui/Card.js";
import { formatPrice } from "../../../utils/maths.js";
import OrderContext from "../../../../context/OrderContext";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png"

export default function Menu() {

const { menu, isModeAdmin, handleDelete } = useContext(OrderContext)



  return (
    <MenuStyled className="menu">
      {menu?.map(({ id, title, imageSource, price }) => (
        <Card
          key={id}
          title={title}
          imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
          price={price}
          leftDescription={formatPrice(price)}
          hasDeleteButton={isModeAdmin}
          onDelete={() => handleDelete(id)}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  border: 1px solid blue;
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  grid-column-gap: 60px;
  padding: 50px 50px 150px;
  justify-content: center;
  box-shadow: ${theme.shadows.strong};
  overflow: scroll;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
