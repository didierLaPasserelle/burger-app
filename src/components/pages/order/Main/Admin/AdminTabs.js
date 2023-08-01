import React, { useContext } from "react";
import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const selectTab = (tabSelected) => {
    setIsCollapsed(false);

    // if (tabSelected === "add") {
    //   setIsAddSelected(true);
    //   setIsEditSelected(false);
    // }

    // if (tabSelected === "edit") {
    //   setIsEditSelected(true);
    //   setIsAddSelected(false);
    // }

    setCurrentTabSelected(tabSelected)
  };

  const tabs = getTabsConfig(currentTabSelected)

  return (
    <AdminTabStyled>
      <Tab 
      Icon= {isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
      onClick= {() => setIsCollapsed(!isCollapsed)}
      className= {"is-active"}
      />
      {tabs.map((tab) => (
        <Tab 
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={tab.className}
          />
      ))}
    </AdminTabStyled>
  );
}

const AdminTabStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;
