import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineShop } from "react-icons/ai";
import TextInput from "../../../reusable-ui/TextInput";
import Button from "../../../reusable-ui/Button";
import { theme } from "../../../../theme";
import { authenticateUsername } from "../../../../api/user";
import { BsArrowRight } from "react-icons/bs";
import { GiPadlock } from "react-icons/gi";

export default function RightSide() {
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

  // affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h2>Espace Artisans</h2>
      <div className="container">
        <div className="login-mode">
          <div className="version-demo">
            <h2>J'accède à la démo</h2>
            <span>( aucun mot de passe requis )</span>
          </div>
          <h2 className="version-client">J'ai déjà un compte</h2>
        </div>
        <TextInput
          value={username}
          onChange={handleChange}
          placeholder={"Entrez votre nom commerçant"}
          required
          Icon={<AiOutlineShop />}
          className="input-login"
          version="normal"
        />
        <TextInput
          value={username}
          onChange={handleChange}
          placeholder={"Entrez votre nom commerçant"}
          required
          Icon={<GiPadlock />}
          className="input-login"
          version="normal"
        />
        <Button label={"J'accède à mon espace"} Icon={<BsArrowRight />} />
      </div>
      <span className="mentions">
        Vos données personnelles sont traitées par la société EPICERY pour la
        gestion de votre inscription sur le site web EPICERY. Pour en savoir
        plus, consultez notre Politique de confidentialité.
      </span>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
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

  .container {
    width: 90%;
    /* box-shadow: ${theme.shadows.subtle}; */
    box-shadow: 0 10px 15px 3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);

    padding: 50px;
    padding-top: 30px;
    border-radius: ${theme.borderRadius.extraRound};

    .login-mode {
      display: grid;
      grid-template-columns: 50% 50%;
      border-bottom: 1px solid ${theme.colors.greyLight};
      margin-bottom: 0;
      .version-demo {
        display: flex;
        flex-direction: column;
        h2 {
          margin: 0;
          padding-bottom: 5px;
        }
        span {
          font-size: ${theme.fonts.size.XS};
          color: ${theme.colors.greyBlue};
          min-width: 200px;
          align-self: center;
        }
      }
      .version-client {
        color: ${theme.colors.primary};
      }
      h2 {
        font-size: ${theme.fonts.size.P2};
        padding: 20px 10px;
        font-style: normal;
        line-height: 32px;
      }
      margin-bottom: 40px;
    }
  }

  .input-login {
    margin: 18px 0; // must be handled in Parent
  }

  h2 {
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.newDark};
    font-family: "Gilroy", sans-serif;
    margin-bottom: 50px;
    /* border: 1px solid red; */
  }

  .icon {
    font-size: ${theme.fonts.size.P2};
  }

  .mentions {
    font-size: ${theme.fonts.size.XS};
    color: ${theme.colors.greyBlue};
    margin-top: 10px;
    width: 90%;
  }
`;
