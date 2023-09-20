import { useState } from "react";

export const useSuccessMessage = (timeDelay = 10000) => {
  // state
  const [isSubmitted, setIsSubmitted] = useState(false);

  //comportements
  const showSuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, timeDelay);
  };
  return { isSubmitted, showSuccessMessage };
};
