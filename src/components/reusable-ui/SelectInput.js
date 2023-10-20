import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function SelectInput({
  options,
  value,
  name,
  Icon,
  className,
  onChange,
  onFocus,
  onBlur
}) {
  return (
    <SelectInputStyled className={className}>
      {Icon && <div className="icon">{Icon}</div>}
      <select
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {options.map(({ optionValue, label }) => (
          <option key={label} value={optionValue}>
            {label}
          </option>
        ))}
      </select>
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.div`
  background: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 8px 16px;
  /* border: none; */

  .icon {
    font-size: ${theme.fonts.P1};
    margin-right: 13px;
    color: ${theme.colors.greyBlue};
    display: flex;
  }

  select {
    background: ${theme.colors.background_white};
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;
  
    &:hover{
      cursor: pointer;
    }
  }
`;

/* 
Attention à deux props "value"
1. value dans <select/> (valeur sélectionnée) => onChange est lié à cette value
  C'est la même value que l'on va retrouver sur un input.
2. value dans <option/> valeur disponible
const options= [
  { optionValue: "", label; "", selected: true},
  { optionValue: "", label; "", selected: false},
]
*/
