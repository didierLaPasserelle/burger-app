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
  const [username, setUsername] = useState("didier");
  // const [inputPassword, setInputPassword] = useState("password");
  const navigate = useNavigate();

  // comportements
  const handleSubmit = async (event) => {
    event.preventDefault();

    authenticateUsername(username)
    setUsername("");
    navigate(`order/${username}`);
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
      <Welcome />
      <div>
        <TextInput
          value={username}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle />}
          className="input-login"
          version="normal"
        />
        <Button label={"Accéder à mon espace"} Icon={<IoChevronForward />} />
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;


  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }

  .input-login {
    margin: 18px 0; // must be handled in Parent
  }
`;
