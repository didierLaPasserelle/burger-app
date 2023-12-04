import "./App.css";
import LoginPage from "./components/pages/login/LoginPage";
import { Route, Routes } from "react-router-dom";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import BannerContextProvider from "./context/BannerContextProvider";

function App() {
  return (
    <BannerContextProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:username" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BannerContextProvider>
  );
}

export default App;
