import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import { getInputTextsConfig } from "./inputConfig";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import AdminForm from "./AdminForm";
import SubmitButton from "./SubmitButton";
import { useSuccessMessage } from "../../../../../../../hooks/useDisplaySuccesMessage";
import { replaceFrenchCommaWithDot } from "../../../../../../utils/maths";

export default function AddForm() {
  // state
  const { username, handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  
  const { isSubmitted, showSuccessMessage } = useSuccessMessage(3000);

  // Event handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
      price: replaceFrenchCommaWithDot(newProduct.price)
    };

    handleAdd(newProductToAdd, username);

    setNewProduct(EMPTY_PRODUCT);

    showSuccessMessage();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const inputTexts = getInputTextsConfig(newProduct);

  // affichage
  return (
    <AdminForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      inputs={inputTexts}
      product={newProduct}
      isSubmitted={isSubmitted}
    >
      <SubmitButton isSubmitted={isSubmitted} />
    </AdminForm>
  );
}
