import React from "react";
import styled from "styled-components";

export default function SelectInput({ options, className, name, ...restProps}) { // Dans le restProps, je récupère l'id
  return (
    <SelectInputStyled name={name} className={className} {...restProps}>
      {options.map(({ value, label }) => (
        <option value={value}>{label}</option>
      ))}
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.select`
  border: 1px solid red;
`;
