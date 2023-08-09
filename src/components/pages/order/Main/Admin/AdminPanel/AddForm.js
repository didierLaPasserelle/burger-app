import { useState, useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { FaHamburger } from "react-icons/fa";

const EMPTY_PRODUCT = {
  title: "",
  imageSource: "",
  price: "",
};

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID()
      // id: new Date().getTime(),
      // title: newProduct.title,
      // imageSource: newProduct.imageSource,
      // price: newProduct.price,
    };

    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT)
  };

  const handleChange = (e) => {
    const { name, value} = e.target
    setNewProduct({
      ...newProduct, [name]: value
    });
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      {newProduct.imageSource ? (
        <img src={newProduct.imageSource} alt={newProduct.title} />
      ) : (
       <p>Aucune image</p>
      )}
      <div className="input-container">
        {/* <FaHamburger /> */}
        <input
          name="title"
          value={newProduct.title}
          className="input1"
          type="text"
          placeholder="Nom du produit (ex: Super Burger)"
          onChange={handleChange}
        />
        <input
          name="imageSource"
          type="text"
          className="input2"
          value={newProduct.imageSource}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          onChange={handleChange}
        />
        <input
          name="price"
          value={newProduct.price}
          className="input3"
          type="text"
          placeholder="Prix : "
          onChange={handleChange}
        />
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

  img, p{
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
