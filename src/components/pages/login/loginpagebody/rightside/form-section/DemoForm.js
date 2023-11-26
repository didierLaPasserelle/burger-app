import TextInput from "../../../../../reusable-ui/TextInput";
import { AiOutlineShop } from "react-icons/ai";

export default function DemoForm({ username, handleChange }) {
  return (
    <div>
      <TextInput
        value={username.businessName}
        onChange={handleChange}
        placeholder={"Entrez le nom de votre enseigne"}
        required
        Icon={<AiOutlineShop />}
        className="input-login"
        version="normal"
        name="businessName"
      />
    </div>
  );
}
