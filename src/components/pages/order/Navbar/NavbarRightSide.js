import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useContext } from "react";
import { FaUserSecret } from "react-icons/fa"
import { toast } from "react-toastify";
import AdminToast from "./AdminToast";
import OrderContext from "../../../../context/OrderContext";

export default function NavbarRightSide({ username }) {

  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext)
  
  const displayToastNotification = () => {
    
  let message = !isModeAdmin ? "Mode admin activé" : "Mode admin désactivé"

      toast.info(message, {
        icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    
    setIsModeAdmin(!isModeAdmin)
  }

  return (
    <NavbarRightSideStyled className="right-side">
      <ToggleButton 
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DESACTIVER LE MODE ADMIN"
        onToggle={displayToastNotification}
        isChecked={isModeAdmin}
        />
      <Profile username={username} className={"profile"} />
      <AdminToast />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
