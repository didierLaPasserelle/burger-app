import styled from "styled-components";
import { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu.js";
import { theme } from "../../../../theme";
import Card from "../../../reusable-ui/Card.js";
import { formatPrice } from "../../../utils/maths.js"

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled className="menu">
      {menu?.map(({ id, title, imageSource, price}) => (
        <Card 
          key={id} 
          title={title} 
          imageSource={imageSource}
          price={price}
          leftDescription={formatPrice(price)}
          />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  grid-column-gap: 60px;
  padding: 50px 50px 150px;
  justify-content: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

`;
