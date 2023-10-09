import { replaceFrenchCommaWithDot } from "../../../../../utils/maths";

export const calculateAmountToPay = (basket, menu) =>
  basket.reduce((total, basketItem) => {
    console.log("menu: ", menu);
    const menuItem = menu.find((item) => item.id === basketItem.id);
    console.log("menuItem: ", menuItem);
    if (isNaN(menuItem.price)) return total;
    if (menuItem) {
      total +=
        replaceFrenchCommaWithDot(menuItem.price || 0) * basketItem.quantity;
    }
    return total;
  }, 0);
