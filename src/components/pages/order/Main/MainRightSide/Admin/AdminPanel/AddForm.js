import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import { getInputTextsConfig } from "./inputTextConfig";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import AdminForm from "./AdminForm";
import SubmitButton from "./SubmitButton";
import { useSuccessMessage } from "../../../../../../../hooks/useDisplaySuccesMessage";

export default function AddForm() {
  // state
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage(3000);

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);

    displaySuccessMessage();
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
