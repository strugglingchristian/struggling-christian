import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about/about";
import Articles from "./pages/articles/articles";
import CulticDoctrines from "./pages/cultic-doctrines/culticDoctrines";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cultic-doctrines" element={<CulticDoctrines />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
