import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>EPICERY</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    line-height: 1rem;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Gilroy", "sans serif"
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px; // for Safari and Firefox
    margin: 0 ${theme.gridUnit / 2}px;
  }
`;
