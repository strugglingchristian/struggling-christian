import { Routes, Route } from "react-router-dom";
import LDS from "../pages/dubious-doctrines/mormon";
import ComingSoon from "../pages/coming-soon";
import Page404 from "../pages/404";

function LdsRoute() {
  return (
    <Routes>
      <Route path="/" element={<LDS />} />
      <Route index element={<LDS />} />
      <Route path="coming-soon" element={<ComingSoon />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default LdsRoute;
