import React from "react";
import styled from "styled-components";
import TextInput from "../../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextConfig";

const AdminForm = React.forwardRef(
  ({ product, onSubmit, onChange, children, onFocus, onBlur }, ref) => {
    const inputTexts = getInputTextsConfig(product);

    // affichage
    return (
      <AdminFormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <div className="input-fields">
          {inputTexts.map((input) => (
            <TextInput
              {...input}
              key={input.id}
              onChange={onChange}
              version="minimalist"
              ref={ref && input.name === "title" ? ref : null}
              onFocus={onFocus}
              onBlur={onBlur}
            />
            ))}
            <select name="isAvailable" className="is-available" id="3">
              <option value={true}>En stock</option>
              <option value={false}>En rupture</option>
            </select>
            <select name="isPublicised" className="is-publicised" id="4">
              <option value={true}>Sans Pub</option>
              <option value={false}>Avec pub</option>
            </select>
        </div>

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

  .input-fields {
    display: grid;
    grid-area: 1 / 2 / -2 / 3;
    grid-template-rows: (repeat(3, 1fr));
    grid-template-columns: (repeat(3, 1fr));
    grid-row-gap: 8px;
    grid-column-gap: 8px;
  }

  .title {
    grid-area: 1/1/2/4;
  }

  .image-source {
    grid-area: 2/1/3/4;
  }

  .price {
    grid-area: 3/1/4/2;
  }

  .footer {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`;
