import styled from "styled-components"
import NavbarRightSide from "./NavbarRightSide"
import Logo from "../../../reusable-ui/Logo"
import { theme } from "../../../../theme"
import { refreshPage } from "../../../utils/window"
import LogoEpicery from "../../../reusable-ui/LogoEpicery"

export default function Navbar() {
  return (
  //   <NavbarStyled>
  //     <Logo className="logo-order-page" onClick={() => refreshPage()} />
  //     <NavbarRightSide />
  //   </NavbarStyled>
  // )
  <NavbarStyled>
  <LogoEpicery className="logo-order-page" onClick={() => refreshPage()} />
  <NavbarRightSide />
</NavbarStyled>
)
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo-order-page {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-content: center;
    font-family: "Gilroy", "sansserif";
  }
`
