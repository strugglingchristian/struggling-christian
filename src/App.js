import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import CulticDoctrines from "./pages/cultic-doctrines/culticDoctrines";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cultic-doctrines" element={<CulticDoctrines />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
