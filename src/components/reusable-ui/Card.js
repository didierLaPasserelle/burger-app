import styled from "styled-components";
import { theme } from "../../theme";
import PrimaryButton from "./PrimaryButton";
import { TiDelete } from "react-icons/ti";

export default function Card({ title, imageSource, leftDescription, hasDeleteButton }) {
  return (
    <CardStyled className="produit">
      {hasDeleteButton && <button className="delete-btn" aria-label="delete-button">
        <TiDelete className="icon" />
      </button>}
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{leftDescription}</div>
          <div className="right-description">
            <PrimaryButton className="primary-button" label={"Ajouter"} />
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background: ${theme.colors.white};
  width: 240px;
  height: 330px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px 20px 10px;
  box-shadow: ${theme.shadows.medium};
  border-radius: ${theme.borderRadius.extraRound};
  position: relative;

  .delete-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    color: ${theme.colors.primary};
    border: none;
    background: none;
    /* z-index: 2;
    padding: 0; */

    .icon {
      width: 30px;
      height: 30px;

      :hover {
        color: ${theme.colors.red};
      }
      :active {
        color: ${theme.colors.primary};
      }
    }
  }

  .image {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      margin: auto 0;
      font-size: ${theme.fonts.size.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;

        align-items: center;
        font-size: ${theme.fonts.size.P1};

        .primary-button {
          font-size: ${theme.fonts.size.XS};
          cursor: pointer;
          padding: 12px;
        }
      }
    }
  }
`;
