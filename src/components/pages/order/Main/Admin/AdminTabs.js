import React, { useState } from 'react'
import styled from 'styled-components';
import Tab from '../../../../reusable-ui/Tab';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from '../../../../../theme';

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {

  return (
    <AdminTabStyled>
        <Tab 
            Icon={isCollapsed ? <FiChevronUp/> : <FiChevronDown/>}
            onClick={()=> setIsCollapsed(!isCollapsed)}
            className={isCollapsed ? "is-active" : ""} />
    </AdminTabStyled>
  )
}

const AdminTabStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .is-active{
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};;
    color: ${theme.colors.white};
  }
`;