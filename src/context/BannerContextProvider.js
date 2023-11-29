import { createContext, useState, useContext } from "react";

const BannerContext = createContext({
  isBannerVisible: true,
  setIsBannerVisible: () => {},
});

// creation du custom hook useBanner
const useBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleBannerDelete = () => {
    setIsBannerVisible(false);
  };

  return { isBannerVisible, setIsBannerVisible, handleBannerDelete };
};

export default function BannerContextProvider({ children }) {
  const { isBannerVisible, setIsBannerVisible, handleBannerDelete } =
    useBanner();

  const bannerContextValue = {
    isBannerVisible,
    setIsBannerVisible,
    handleBannerDelete,
  };

  return (
    <BannerContext.Provider value={bannerContextValue}>
      {children}
    </BannerContext.Provider>
  );
}

export const useBannerContext = () => useContext(BannerContext);
