import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authenticateUsername } from "../../../../../api/user";
import Mentions from "./Mentions";
import LoginForm from "./form-section/LoginForm";
import { theme } from "../../../../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";

export default function RightSide() {
  // state
  const [username, setUsername] = useState({
    businessName: "",
    password: "",
  });

  const navigate = useNavigate();

  // comportements
  const handleSubmit = async (event) => {
    event.preventDefault();

    const userReceived = await authenticateUsername(username.businessName);

    setUsername({ businessName: "", password: "" });
    navigate(`order/${userReceived.username}`);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUsername({ ...username, [name]: value });
  };

  // affichage
  return (
    <RightSideStyled action="submit" onSubmit={handleSubmit}>
      <div className="notification-badge"></div> 
      <FontAwesomeIcon icon={faGift} size="lg" className="gift-icon" />

      <h2 className="title">Hello les artisans !</h2>
      <LoginForm
        username={username}
        setUsername={setUsername}
        handleChange={handleChange}
      />
      <Mentions />
    </RightSideStyled>
  );
}

const RightSideStyled = styled.form`
  background: #fafafb;
  text-align: center;

  margin: 0px auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.2) inset;

  position: relative;

  .gift-icon {
    cursor: pointer;
    position: absolute;
    top: 35px;
    right: 50px;
    color: ${theme.colors.newDark};
  }

  .notification-badge {
    position: absolute;
    top: 28px; 
    right: 45px; 
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: red; 
  }

  .title {
    padding: 70px 0 30px;
    color: ${theme.colors.newDark};
  }
  .input-login {
    margin: 18px 0; // must be handled in Parent
  }
`;
