import styled from "styled-components";
import { theme } from "../../../theme";
import { FaRegThumbsUp } from "react-icons/fa";

export default function Advantages() {
  return (
    <AdvantagesStyled>
      <h2>Pourquoi choisir Epicery ?</h2>
      <div className="container">
        <div className="card">
          <div className="logo-container">
            <FaRegThumbsUp className="logo" />
          </div>
          <h3>Choix</h3>
          <p>+1200 adresses, et toujours des nouveautés.</p>
        </div>

        <div className="card">
          <div className="logo-container">
            <FaRegThumbsUp className="logo" />{" "}
          </div>
          <h3>Local</h3>
          <p>Soutien à l’économie de proximité au prix juste</p>
        </div>

        <div className="card">
          <div className="logo-container">
            <FaRegThumbsUp className="logo" />{" "}
          </div>
          <h3>Service</h3>
          <p>L’équipe epicery à votre écoute 7 jours sur 7</p>
        </div>

        <div className="card">
          <div className="logo-container">
            <FaRegThumbsUp className="logo" />
          </div>
          <h3>Impact</h3>
          <p>Plateforme française et partenaires de livraison locaux</p>
        </div>
      </div>
    </AdvantagesStyled>
  );
}

const AdvantagesStyled = styled.div`
  width: 100%;
  background: whitesmoke;
  padding: 50px 0;
  border-radius: ${theme.borderRadius.round};
  margin-top: 25px;

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    gap: 18px;
  }

  .card {
    border: solid #12b981;
    border-radius: ${theme.borderRadius.extraRound};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  .logo-container {
    margin-bottom: 10px;
  }

  .logo {
    font-size: 40px;
  }

  h2 {
    color: #12b981;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    font-family: "Gilroy";
  }

  h3 {
    text-transform: uppercase;
    font-weight: 700;
    color: #12b981;
    margin-bottom: 5px;
  }

  p {
    width: 80%;
    margin: 10px auto 20px;
  }
`;
