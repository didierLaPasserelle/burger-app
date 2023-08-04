import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { FaHamburger } from 'react-icons/fa';

export default function AddForm() {
  return (
    <AddFormStyled>
      {/* <div className="image-preview">ImagePreview</div>
      <div className="input-fields">input-fields</div>
      <div className="submit-button">submit-button</div> */}
      {/* <div className="grid-container"> */}
      <img src="/images/burger5.png" alt="logo burger" />
      <form action="">
        
        
      {/* <FaHamburger /> */}
        <input
          className="input1"
          type="text"
          placeholder="Nom du produit (ex: Super Burger"
        />
        <input
          type="text"
          className="input2"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        />
        <input className="input3" type="text" placeholder="Prix :" />
        <input type="submit" value="Ajouter un nouveau produit au menu" />
      </form>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 1px solid black;
  display: grid;
  grid-template-columns: 30% 70%;

  img {
    border: 1px solid black;
    padding: 20px;
    width: 50%;
    object-fit: cover;
    place-self: center;
  }

  form {
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
    color: ${theme.colors.background_white}
  }
`;
