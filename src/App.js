import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about/about";
import Articles from "./pages/articles/articles";
import DubiousDoctrines from "./pages/dubious-doctrines/dubiousDoctrines";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dubious-doctrines" element={<DubiousDoctrines />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
