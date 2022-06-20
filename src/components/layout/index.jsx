import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "./style.css";

function Layout() {
  return (
    <Container fluid>
      <Row className="header-row">
        <Header />
      </Row>
      <Row className="content-row">
        <Outlet />
      </Row>
      <Row className="footer-row">
        <Footer />
      </Row>
    </Container>
  );
}

export default Layout;
