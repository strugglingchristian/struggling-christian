import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import "./style.css";

function Layout() {
  return (
    <Container fluid>
      <Row className="header-row">
        <Header />
      </Row>
      <Row className="content-row">
        <Container fluid>
          <Row className="pb-3">
            <Col xl={2} xs={12} className="d-none d-xl-block">
              &nbsp;
            </Col>
            <Col xl={6} xs={12} className="px-0 mx-0">
              <Outlet />
            </Col>
            <Col xl={2} xs={12}>
              <Sidebar />
            </Col>
            <Col xl={2} xs={12} className="d-none d-xl-block">
              &nbsp;
            </Col>
          </Row>
        </Container>
      </Row>
      <Row className="footer-row">
        <Footer />
      </Row>
    </Container>
  );
}

export default Layout;
