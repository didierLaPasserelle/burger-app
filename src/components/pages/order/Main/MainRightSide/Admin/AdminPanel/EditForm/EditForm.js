import { useContext, useState } from "react";
import OrderContext from "../../../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import AdminForm from "../Form/AdminForm";
import SavingMessage from "./SavingMessage";
import { useSuccessMessage } from "../../../../../../../../hooks/useDisplaySuccesMessage";

export default function EditForm() {
  const {
    username,
    cardClickedOn,
    setCardClickedOn,
    handleEdit,
    titleEditRef,
  } = useContext(OrderContext);

  const [valueOnFocus, setValueOnFocus] = useState();

  const { isSubmitted: isSaved, showSuccessMessage } = useSuccessMessage();

  const handleChange = (e) => {
    let defaultValue = e.target.value;
    const inputPrice = e.target.name === "price";

    if (inputPrice) {
      defaultValue = e.target.value.replace(",", ".");
    }

    const productBeingUpdated = {
      ...cardClickedOn,
      [e.target.name]: defaultValue,
    };

    setCardClickedOn(productBeingUpdated); // Cela édite le form
    handleEdit(productBeingUpdated, username); // cette ligne update le menu et la BDD
  };

  const handleOnFocus = (e) => {
    const inputValueOnFocus = e.target.value;
    setValueOnFocus(inputValueOnFocus);
  };

  const handleOnBlur = (e) => {
    const blurOnValue = e.target.value;
    if (valueOnFocus !== blurOnValue) {
      showSuccessMessage();
    }
  };

  return (
    <AdminForm
      product={cardClickedOn}
      onChange={handleChange}
      ref={titleEditRef}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      {isSaved ? <SavingMessage /> : <EditInfoMessage />}
    </AdminForm>
  );
}
