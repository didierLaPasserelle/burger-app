import { createContext } from "react"

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  isEditSelected: false,
  setIsEditSelected: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {}
 })