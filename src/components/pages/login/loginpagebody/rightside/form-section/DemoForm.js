import TextInput from "../../../../../reusable-ui/TextInput";
import { AiOutlineShop } from "react-icons/ai";

export default function DemoForm({ username, handleChange }) {
  return (
    <div>
      <TextInput
        value={username.businessName}
        onChange={handleChange}
        placeholder={"Entrez votre nom commerçant"}
        required
        Icon={<AiOutlineShop />}
        className="input-login"
        version="normal"
        name="businessName"
      />
    </div>
  );
}
