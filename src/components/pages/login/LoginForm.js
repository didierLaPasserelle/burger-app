import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button";
import { theme } from "../../../theme";
import { authenticateUsername } from "../../../api/user";
import Welcome from "./Welcome";

export default function LoginForm() {
  // state
  const [username, setUsername] = useState("");
  // const [inputPassword, setInputPassword] = useState("password");
  const navigate = useNavigate();

  // comportements
  const handleSubmit = async (event) => {
    event.preventDefault();

    const userReceived = await authenticateUsername(username);

    setUsername("");
    navigate(`order/${userReceived.username}`);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  // const handleChangePassword = (e) => {
  //   setInputPassword(e.target.value);
  // };

  // affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div className="container">
        <h2>
          Chers Artisans, <br />
          connectez-vous
        </h2>
        <TextInput
          value={username}
          onChange={handleChange}
          placeholder={"Entrez le nom de votre entreprise"}
          required
          Icon={<BsPersonCircle />}
          className="input-login"
          version="normal"
        />
        <Button
          label={"Accéder à mon espace client"}
          Icon={<IoChevronForward />}
        />
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  border: 1px solid red;
  background: ${theme.colors.primary};
  text-align: center;

  margin: 0px auto;
  padding: 50px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

  .container {
    width: 90%;
  }

  .input-login {
    margin: 18px 0; // must be handled in Parent
  }

  h2 {
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.white};
    font-family: "Gilroy", sans-serif;
    font-style: italic;
    margin-bottom: 50px;
    /* border: 1px solid red; */
  }
`;
