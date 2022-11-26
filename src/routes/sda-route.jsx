import { Routes, Route } from "react-router-dom";
import SDA from "../pages/dubious-doctrines/seventh-day-adventist";
import AuthorityOfEGW from "../pages/dubious-doctrines/seventh-day-adventist/authorityOfEGW";
import ComingSoon from "../pages/coming-soon";
import Page404 from "../pages/404";

function SdaRoute() {
  return (
    <Routes>
      <Route path="/" element={<SDA />} />
      <Route index element={<SDA />} />
      <Route path="authority-of-egw" element={<AuthorityOfEGW />} />
      <Route path="coming-soon" element={<ComingSoon />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default SdaRoute;
