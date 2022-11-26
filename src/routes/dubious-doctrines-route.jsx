import { Routes, Route } from "react-router-dom";
import DubiousDoctrines from "../pages/dubious-doctrines";
import SdaRoute from "./sda-route";
import JwRoute from "./jw-route";
import LdsRoute from "./lds-route";
import IncRoute from "./inc-route";
import Page404 from "../pages/404";

function DubiousDoctrinesRoute() {
  return (
    <Routes>
      <Route path="/" element={<DubiousDoctrines />} />
      <Route index element={<DubiousDoctrines />} />
      <Route path="sda/*" element={<SdaRoute />} />
      <Route path="inc/*" element={<IncRoute />} />
      <Route path="jw/*" element={<JwRoute />} />
      <Route path="lds/*" element={<LdsRoute />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default DubiousDoctrinesRoute;
