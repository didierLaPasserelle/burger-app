import { useContext } from "react";
import OrderContext from "../context/OrderContext";

export const useOrderContext = () => {
  const orderValue = useContext(OrderContext);
  return orderValue;
};

