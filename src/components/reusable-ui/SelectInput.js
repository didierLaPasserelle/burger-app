import React from "react";
import styled from "styled-components";

export default function SelectInput({
  value,
  options,
  className,
  name,
  id,
  onChange,
  onFocus,
  onBlur,
}) {
  return (
    <SelectInputStyled
      value={value}
      name={name}
      className={className}
      id={id}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {options.map(({ value, label }) => (
        <option key={label} value={value}>
          {label}
        </option>
      ))}
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.select`
  border: 1px solid red;
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
