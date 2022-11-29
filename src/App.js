import MainRoute from "./routes/main-route";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <MainRoute />
    </div>
  );
}

export default App;
