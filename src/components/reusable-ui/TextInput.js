import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function TextInput({
  onChange,
  Icon,
  className,
  version = "normal",
  ...extraProps
}) {
  return (
    <TextInputStyled className={className} version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input onChange={onChange} type="text" {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  /* padding: 18px 24px; */

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin: 0 8px 0 10px;
    color: ${theme.colors.greySemiDark};
    /* min-width: 1em; // that way, the icon size is NOT affected by width of the entire component. */
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;
    /* display: flex; */

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }

  ${(props) => {
    if (props.version === "normal") return extraStyleNormal;
    if (props.version === "minimalist") return extraStyleMinimalist;
  }}
`;

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  /* padding: 18px 28px; */
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`;

const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  /* padding: 8px 16px; */
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white}; ////+
    color: ${theme.colors.dark};

    &:focus {
      outline: 0; //// add outline
    }
  }
`;
