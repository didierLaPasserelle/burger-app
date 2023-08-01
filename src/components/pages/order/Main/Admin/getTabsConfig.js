import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabsConfig = () => [
    // { 
    //   index:"chevronUpDown",
    //   label: "",
    //   Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
    //   onClick: () => setIsCollapsed(!isCollapsed),
    //   className: "is-active"
    // },
    {
      index: "add",
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus />,
      // onClick: () => selectTab("add"),
      // className: isAddSelected ? "is-active" : "",
      // className: currentTabSelected === "add" ? "is-active" : "",
    },
    {
      index: "edit",
      label: "Editer un produit",
      Icon: <MdModeEditOutline />,
      // onClick: () => selectTab("edit"),
      // className: isEditSelected ? "is-active" : "",
      // className: currentTabSelected === "edit" ? "is-active" : "",
    }
  ];

  export const getTabSelected = (tabs, currentTabSelected) => tabs.find((tab) => tab.index === currentTabSelected)