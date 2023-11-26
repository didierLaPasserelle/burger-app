import TextInput from "../../../../../reusable-ui/TextInput";
import { AiOutlineShop } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";

export default function ClientForm({ username, handleChange }) {
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
      <TextInput
        value={username.password}
        onChange={handleChange}
        placeholder={"Entrez votre mot de passe"}
        required
        Icon={<GiPadlock />}
        className="input-login"
        version="normal"
        name="password"
      />
    </div>
  );
}
