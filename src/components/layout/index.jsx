import { Container, Row, Col } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import BreadCrumb from "../BreadCrumb";
import "../../styles/layout.css";

function Layout() {
  const location = useLocation();
  return (
    <Container fluid>
      <Row className="header-row">
        <Header />
      </Row>
      {location.pathname !== "/" && (
        <Row className="breadcrumb-row">
          <Container fluid>
            <Row className="pt-2 pt-lg-3 pb-0">
              <Col xl={2} xs={12} className="d-none d-xl-block">
                &nbsp;
              </Col>
              <Col xl={6} xs={12} className="px-0 mx-0">
                <BreadCrumb />
              </Col>
              <Col xl={4} xs={12}>
                &nbsp;
              </Col>
            </Row>
          </Container>
        </Row>
      )}

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
