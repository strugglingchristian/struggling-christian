import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import About from "../pages/about/about";
import DubiousDoctrinesRoute from "./dubious-doctrines-route";
import ArticlesRoute from "./articles-route";
import Page404 from "../pages/404";

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/dubious-doctrines/*"
          element={<DubiousDoctrinesRoute />}
        />
        <Route path="/articles/*" element={<ArticlesRoute />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default MainRoute;
