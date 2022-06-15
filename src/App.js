import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Content from "./components/Content";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Header />
        <Content />
      </Container>
    </div>
  );
}

export default App;
