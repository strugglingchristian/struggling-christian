import { Routes, Route } from "react-router-dom";
import JW from "../pages/dubious-doctrines/jehovah-witnesses";
import ComingSoon from "../pages/coming-soon";
import Page404 from "../pages/404";

function JwRoute() {
  return (
    <Routes>
      <Route path="/" element={<JW />} />
      <Route index element={<JW />} />
      <Route path="coming-soon" element={<ComingSoon />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default JwRoute;
