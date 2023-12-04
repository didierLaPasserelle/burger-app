import React from "react";
import { BsPersonCircle, BsBasket } from "react-icons/bs";
import { RiArrowDropDownLine, RiAdminFill } from "react-icons/ri";

function getBoxesConfig(
  username,
  dropDownMenu,
  toggleBasketVisibility,
  displayToastNotification
) {
  return [
    {
      id: "1",
      icon: <RiAdminFill />,
      text: "Admin",
      buttonIcon: null,
      onClick: displayToastNotification,
    },
    {
      id: "2",
      icon: <BsPersonCircle />,
      text: username,
      buttonIcon: <RiArrowDropDownLine />,
      onClick: dropDownMenu,
    },
    {
      id: "3",
      icon: <BsBasket />,
      text: "Panier",
      buttonIcon: null,
      onClick: toggleBasketVisibility,
    },
  ];
}

export default getBoxesConfig;
