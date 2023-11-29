import styled from "styled-components";
import Profile from "./Profile";
import { useContext } from "react";
import ToastAdmin from "./ToastAdmin";
import { toast } from "react-toastify";
import OrderContext from "../../../../context/OrderContext";
import { GoBell } from "react-icons/go";

export default function NavbarRightSide() {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavbarRightSideStyled>
      <GoBell size={25} className="icon"/>
      <Profile displayToastNotification={displayToastNotification} />
      <ToastAdmin />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;

  .icon {
    margin-left: 50px;
  }
`;
