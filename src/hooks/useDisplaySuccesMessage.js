import { useState } from "react";

export const useSuccessMessage = (timeDelay = 10000) => {
  // state
  const [isSubmitted, setIsSubmitted] = useState(false);

  //comportements
  const SuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, timeDelay);
  };
  return { isSubmitted, SuccessMessage };
};
