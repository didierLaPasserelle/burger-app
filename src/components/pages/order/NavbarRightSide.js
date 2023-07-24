import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled className="right-side">
      <div className="admin-button">Admin button</div>
     <Profile />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  background: purple;
  display: flex;
  align-items: center;

  /* .admin-button {
    background: lightcyan;
  } */

  .profile {
    background: yellow;
  }
`;
