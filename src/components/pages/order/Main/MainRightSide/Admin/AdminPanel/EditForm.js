import { useContext, useRef } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";
import { theme } from "../../../../../../../theme";
import EditInfoMessage from "./EditInfoMessage";

export default function EditForm() {
  const { cardClickedOn, setCardClickedOn, handleEdit, titleEditRef } =
    useContext(OrderContext);

  const inputTexts = getInputTextsConfig(cardClickedOn);

  const handleChange = (e) => {
    const productBeingUpdated = {
      ...cardClickedOn,
      [e.target.name]: e.target.value,
    };

    setCardClickedOn(productBeingUpdated); // Cela édite le form
    handleEdit(productBeingUpdated); // cette ligne update le menu
  };

  return (
    <EditFormStyled>
      <ImagePreview
        imageSource={cardClickedOn.imageSource}
        title={cardClickedOn.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={handleChange}
            version="minimalist"
            ref={input.name === "title" ? titleEditRef : null}
          />
        ))}
      </div>
      <div className="submit">
        <EditInfoMessage/>
      </div>
    </EditFormStyled>
  );
}

const EditFormStyled = styled.form`
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    /* background: blue; */
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    /* background: green; */
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`;
