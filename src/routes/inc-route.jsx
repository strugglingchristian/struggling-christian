import { Routes, Route } from "react-router-dom";
import INC from "../pages/dubious-doctrines/iglesia-ni-cristo";
import ComingSoon from "../pages/coming-soon";
import Page404 from "../pages/404";

function IncRoute() {
  return (
    <Routes>
      <Route path="/" element={<INC />} />
      <Route index element={<INC />} />
      <Route path="coming-soon" element={<ComingSoon />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default IncRoute;
