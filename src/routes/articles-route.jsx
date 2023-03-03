import { Routes, Route } from "react-router-dom";
import Articles from "../pages/articles";
import Article1844Part1 from "../pages/articles/article1844Part1";
import Article1844Part2 from "../pages/articles/article1844Part2";
import ArticleMichaelPart1 from "../pages/articles/articleMichaelPart1";
import ArticleMichaelPart2 from "../pages/articles/articleMichaelPart2";
import ArticleEGWTrueProphet from "../pages/articles/articleEGWTrueProphet";
import ComingSoon from "../pages/coming-soon";
import Page404 from "../pages/404";

function ArticlesRoute() {
  return (
    <Routes>
      <Route path="/" element={<Articles />} />
      <Route index element={<Articles />} />
      <Route
        path="1844-made-complicated-part-1"
        element={<Article1844Part1 />}
      />
      <Route
        path="1844-made-complicated-part-2"
        element={<Article1844Part2 />}
      />
      <Route path="michael-stand-up-part-1" element={<ArticleMichaelPart1 />} />
      <Route path="michael-stand-up-part-2" element={<ArticleMichaelPart2 />} />
      <Route path="egw-true-prophet" element={<ArticleEGWTrueProphet />} />
      <Route path="coming-soon" element={<ComingSoon />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default ArticlesRoute;
