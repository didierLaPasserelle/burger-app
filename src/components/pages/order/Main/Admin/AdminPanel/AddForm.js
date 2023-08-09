import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { FaHamburger } from "react-icons/fa";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";

export default function AddForm() {

  const { handleAdd } = useContext(OrderContext);

  const newProduct = {
    id: new Date().getTime(),
    title: "Nouveau Produit",
    imageSource: "",
    price: 2.5,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newProduct)
    console.log(e);
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <img src="/images/burger5.png" alt="logo burger" />
      <div className="input-container">
        {/* <FaHamburger /> */}
        <input
          className="input1"
          type="text"
          placeholder="Nom du produit (ex: Super Burger)"
        />
        <input
          type="text"
          className="input2"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        />
        <input className="input3" type="text" placeholder="Prix :" />
        <input type="submit" value="Ajouter un nouveau produit au menu" />
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 1px solid black;
  display: grid;
  grid-template-columns: 30% 70%;
  max-width: 1000px;

  img {
    border: 1px solid black;
    padding: 20px;
    width: 50%;
    object-fit: cover;
    place-self: center;
  }

  .input-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "i1 i1"
      "i2 i2"
      "i3 i3"
      "bt vi";
  }

  input {
    margin: 5px;
    border: 1px solid darkblue;
    padding: 5px;
    font-size: 1rem;
    border-radius: 5px;
    width: 80%;
    height: 40px;
    max-width: 900px;
    text-overflow: ellipsis;
  }

  .input1 {
    grid-area: i1;
  }

  .input2 {
    grid-area: i2;
  }

  .input3 {
    grid-area: i3;
  }

  input[type="submit"] {
    background: ${theme.colors.green};
    color: ${theme.colors.background_white};
    cursor: pointer;
    /* white-space: nowrap; */
    overflow: hidden;
    /* text-overflow: ellipsis; */
  }
`;
  