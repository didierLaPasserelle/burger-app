import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { authenticateUsername } from "../../../../../api/user";
import Mentions from "./Mentions";
import LoginForm from "./form-section/LoginForm";

export default function RightSide() {
  // state
  const [username, setUsername] = useState({
    businessName:"",
    password:""
  });

  const navigate = useNavigate();

  // comportements
  const handleSubmit = async (event) => {
    event.preventDefault();

    const userReceived = await authenticateUsername(username.businessName);

    setUsername({ businessName: "", password: "" });;
    navigate(`order/${userReceived.username}`);
  };

  const handleChange = (e) => {
    const { value, name} = e.target;
    setUsername({...username, [name]:value})
  };

  // affichage
  return (
    <RightSideStyled action="submit" onSubmit={handleSubmit}>
      <h2>Espace Artisans</h2>
      <LoginForm username={username} handleChange={handleChange} />
      <Mentions />
    </RightSideStyled>
  );
}

const RightSideStyled = styled.form`
  background: #fafafb;
  text-align: center;

  margin: 0px auto;
  padding: 50px ${theme.spacing.lg};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.2) inset;

  .input-login {
    margin: 18px 0; // must be handled in Parent
  }
`;
