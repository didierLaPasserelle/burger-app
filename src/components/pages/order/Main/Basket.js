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
   background: grey;
  }

  .body{
    background: blue;
  }

  .footer{ 
    background: green;
  }
`;
