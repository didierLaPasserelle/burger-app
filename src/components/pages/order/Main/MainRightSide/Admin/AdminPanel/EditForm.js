import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import AdminForm from "./AdminForm";

export default function EditForm() {
  const { cardClickedOn, setCardClickedOn, handleEdit, titleEditRef } =
    useContext(OrderContext);

  // const handleChange = (e) => {

  //   const inputPrice = e.target.name === "price"
  //   let newValue = inputPrice.replace(',', '.');
   
  //   const productBeingUpdated = {
  //     ...cardClickedOn,
  //     [e.target.name]: e.target.value,  
  //   };

  //   setCardClickedOn(productBeingUpdated); // Cela édite le form
  //   handleEdit(productBeingUpdated); // cette ligne update le menu
  // };

  const handleChange = (e) => {
    let defaultValue = e.target.value;
    const inputPrice = e.target.name === "price";
  
    if (inputPrice) {
      defaultValue = e.target.value.replace(',', '.');
    }
     
    const productBeingUpdated = {
      ...cardClickedOn,
      [e.target.name]: defaultValue,  
    };
  
    setCardClickedOn(productBeingUpdated); // Cela édite le form
    handleEdit(productBeingUpdated); // cette ligne update le menu
  };
  

  return (
    <AdminForm
      product={cardClickedOn}
      onChange={handleChange}
      ref={titleEditRef}
    >
      <EditInfoMessage />
    </AdminForm>
  );
}
