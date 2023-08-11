import { useState, useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { FiCheckCircle } from "react-icons/fi";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import TextInput from "../../../../../reusable-ui/TextInput";
import Button from "../../../../../reusable-ui/Button";

const EMPTY_PRODUCT = {
  title: "",
  imageSource: "",
  price: "",
};

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
      // id: new Date().getTime(),
      // title: newProduct.title,
      // imageSource: newProduct.imageSource,
      // price: newProduct.price,
    };

    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    displaySucessMessage();
  };

  const displaySucessMessage = () => {
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      {newProduct.imageSource ? (
        <img src={newProduct.imageSource} alt={newProduct.title} />
      ) : (
        <div className="image-preview">
          <p>Aucune image</p>
        </div>
      )}
      <div className="input-fields">
        <TextInput
          name="title"
          value={newProduct.title}
          className="input1"
          type="text"
          placeholder="Nom du produit (ex: Super Burger)"
          onChange={handleChange}
          Icon={<FaHamburger />}
          version="minimalist"
        />
        <TextInput
          name="imageSource"
          type="text"
          className="input2"
          value={newProduct.imageSource}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          onChange={handleChange}
          Icon={<BsFillCameraFill />}
          version="minimalist"
        />
        <TextInput
          name="price"
          value={newProduct.price}
          className="input3"
          type="text"
          placeholder="Prix : "
          onChange={handleChange}
          Icon={<MdOutlineEuro />}
          version="minimalist"
        />
        <Button
          className={"submit-button"}
          label={"Ajouter un nouveau produit"}
          version="success"
        />

        {isSubmitted && (
          <div className="success-icon">
            <FiCheckCircle />
            <span>Ajouté avec succès !</span>
          </div>
        )}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    /* background: blue; */
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    /* background: green; */
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    .submit-button {
      /* width: 50%; */
      height: 100%;
    }
  }
`;
