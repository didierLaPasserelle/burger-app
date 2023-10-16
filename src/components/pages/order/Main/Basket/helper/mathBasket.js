import { replaceFrenchCommaWithDot } from "../../../../../utils/maths";
import { convertStringToBoolean } from "../../../../../utils/string";

export const calculateAmountToPay = (basket, menu) =>
  basket.reduce((total, basketItem) => {
    const menuItem = menu.find((item) => item.id === basketItem.id);
    console.log('menuItem: ', menuItem)
    if (convertStringToBoolean(menuItem.isAvailable) === false || isNaN(menuItem.price)) return total;
    if (menuItem) {
      total +=
        replaceFrenchCommaWithDot(menuItem.price || 0) * basketItem.quantity;
    }
    return total;
  }, 0);
