import React from "react";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import { Inputs } from "./Inputs";

const AdminForm = React.forwardRef(
  ({ product, onSubmit, onChange, children, onFocus, onBlur }, ref) => {
    // affichage
    return (
      <AdminFormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <Inputs
          product={product}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={ref}
        />
        <div className="footer">{children}</div>
      </AdminFormStyled>
    );
  }
);

export default AdminForm;

const AdminFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 8px;
  height: 100%;
  width: 80%;

  .footer {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`;
