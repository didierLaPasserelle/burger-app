import { replaceFrenchCommaWithDot } from "../../../../../utils/maths";

export const calculateAmountToPay = (basket, menu) => basket.reduce((total, basketItem) => {
    const menuItem = menu.find((item) => item.id === basketItem.id);
    if(isNaN(menuItem.price)) return total
    if (menuItem) {
      total += replaceFrenchCommaWithDot(menuItem.price) * basketItem.quantity;
    }
    return total;
  }, 0);