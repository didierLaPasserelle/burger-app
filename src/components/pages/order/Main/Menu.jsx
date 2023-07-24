import styled from "styled-components";
import { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu.js";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled className="menu">
      {menu?.map((product) => (
        <div className="produit" key={product.id}>
          {product.title}
        </div>
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: purple;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  grid-column-gap: 60px;
  padding: 50px 50px 150px;
  justify-content: center;

  .produit {
    background: red;
    width: 240px;
    height: 330px;
  }
`;
