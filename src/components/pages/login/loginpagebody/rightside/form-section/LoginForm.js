import { linksConfig } from "../linksConfig";
import { CustomLink } from "../../../../../reusable-ui/CustomLink";
import DemoForm from "./DemoForm";
import ClientForm from "./ClientForm";
import Button from "../../../../../reusable-ui/Button";
import { BsArrowRight } from "react-icons/bs";
import { theme } from "../../../../../../theme";
import styled from "styled-components";
import { useState } from "react";

export default function LoginForm({ username, handleChange }) {
  const [isClicked, setIsClicked] = useState(true);

  const handleDemoFormClick = () => {
    setIsClicked(true);
  };

  const handleClientFormClick = () => {
    setIsClicked(false);
  };
  const linksTab = linksConfig({
    handleDemoFormClick,
    handleClientFormClick,
    isClicked,
  });

  const passwordMessage = linksTab.find(
    (link) => link.text === "J'accède à la démo" && isClicked
  );

  return (
    <LoginFormStyled>
      <div className="login-modes">
        {linksTab.map((link) => (
          <h2 key={link.id}>
            <CustomLink
              onClick={link.onClick}
              isActive={link.isActive}
              text={link.text}
              className={link.isActive ? "is-active" : ""}
            />
          </h2>
        ))}
        <span>{passwordMessage ? "Pas de mot de passe requis" : null}</span>
      </div>
      {isClicked ? (
        <DemoForm username={username} handleChange={handleChange} />
      ) : (
        <ClientForm username={username} handleChange={handleChange} />
      )}

      <Button label={"J'accède à mon espace"} Icon={<BsArrowRight />} />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
  width: 90%;
  min-height: 500px;
  box-shadow: 0 10px 15px 3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  padding: 50px;
  padding-top: 30px;
  border-radius: ${theme.borderRadius.extraRound};

  .login-modes {
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
    }

    span {
        font-size: ${theme.fonts.size.XS};
        color: ${theme.colors.greyDark};
        margin-top: -100px;
        align-self: center;
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

  h2 {
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.newDark};
    font-family: "Gilroy", sans-serif;
    margin-bottom: 50px;
  }

  .icon {
    font-size: ${theme.fonts.size.P2};
  }

`;
