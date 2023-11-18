import styled, { css } from "styled-components";
import { theme } from "../../theme";
import React from "react";

const TextInput = React.forwardRef(
  ({ onChange, Icon, className, version = "normal", ...extraProps }, ref) => {
    return (
      <TextInputStyled className={className} version={version}>
        <div className="icon">{Icon && Icon}</div>
        <input ref={ref} onChange={onChange} type="text" {...extraProps} />
      </TextInputStyled>
    );
  }
);

export default TextInput;

const TextInputStyled = styled.div`
  border-radius: ${theme.borderRadius.roundedFull};
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.greyMedium};

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    display: flex; // to center icon vertically
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }

    &:focus {
      outline: none;
    }
  }

  /* ${(props) => {
    if (props.version === "normal") return extraStyleNormal;
    if (props.version === "minimalist") return extraStyleMinimalist;
  }} */

  ${({ version }) => extraStyle[version]}
`;

const extraStyleNormal = css`
  background-color: #fafafa;
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};
    width: 100%;

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`;

const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 28px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};

    &:focus {
      outline: 0;
    }
  }
`;

const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
};
