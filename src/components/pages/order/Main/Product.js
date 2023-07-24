import styled from "styled-components";

export default function Product({ id, title, imageSource, price }) {
  return (
    <ProductStyled className="produit" key={id}>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="description">
          <div className="title">{title}</div>
          <div className="price">{price}</div>
          <button className="btn">Ajouter</button>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
 
    background: red;
    width: 240px;
    height: 330px;

    .image {
      width: 40%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

`;
