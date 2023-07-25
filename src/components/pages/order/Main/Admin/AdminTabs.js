import React from 'react'
import styled from 'styled-components';
import Tab from '../../../../reusable-ui/Tab';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function AdminTabs() {
  return (
    <AdminStyled>
        <Tab Icon={<FiChevronDown />} />
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
  display: flex;
  padding: 0 20px;
`;