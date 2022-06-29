import { Routes, Route } from "react-router-dom";
import Article1844Part1 from "../pages/articles/1844-made-complicated-part-1";
import Article1844Part2 from "../pages/articles/1844-made-complicated-part-2";
import EGWTrueProphet from "../pages/articles/egw-true-prophet";
import Articles from "../pages/articles";

function ArticlesRoute() {
  return (
    <Routes>
      <Route path="/" element={<Articles />} />
      <Route
        path="1844-made-complicated-part-1"
        element={<Article1844Part1 />}
      />
      <Route
        path="1844-made-complicated-part-2"
        element={<Article1844Part2 />}
      />
      <Route path="egw-true-prophet" element={<EGWTrueProphet />} />
    </Routes>
  );
}

export default ArticlesRoute;
