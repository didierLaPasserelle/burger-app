import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="header">
        <p>Total</p>
        <p>0,00</p>
      </div>

      <div className="body">Body</div>
      <div className="footer">Footer</div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;

  .header {
    height: 70px;
    padding: 0px, 16px, 0px, 16px;
    background: ${theme.colors.background_dark};
  }

  .body {
    flex: 1;
    background: ${theme.colors.white};
  }

  .footer {
    background: green;
    height: 70px;
    background: ${theme.colors.background_dark};
  }
`;
