import { useContext, useState } from "react"
import OrderContext from "../../../../../../../context/OrderContext"
import { getInputTextsConfig } from "./inputTextConfig"
import { EMPTY_PRODUCT } from "../../../../../../enums/product"
import AdminForm from "./AdminForm"

export default function AddForm() {
  // state
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault()
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    }

    handleAdd(newProductToAdd)
    setNewProduct(EMPTY_PRODUCT)

    displaySuccessMessage()
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewProduct({ ...newProduct, [name]: value })
  }

  const displaySuccessMessage = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000)
  }
  const inputTexts = getInputTextsConfig(newProduct);


  // affichage
  return (
    <AdminForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      inputs={inputTexts}
      product={newProduct}
      isSubmitted={isSubmitted}/>
  )
}
