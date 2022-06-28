import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "./style.css";

function Header() {
  return (
    <Container>
      <Row className="header">
        <Col lg={2} md={0} className="d-none d-md-block">
          &nbsp;
        </Col>
        <Col md={12} lg={8}>
          <Row>
            <Col lg={8} md={6}>
              <Row className="header-title">
                <Col className="d-flex">Struggling Christian</Col>
              </Row>
              <Row className="header-subtitle">
                <Col className="d-flex">
                  Discerning truth from falsehood, one doctrine at a time
                </Col>
              </Row>
            </Col>
            <Col lg={4} md={6} className="d-flex justify-content-md-end">
              <Navbar collapseOnSelect expand="md" variant="dark" bg="dark">
                <Container>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/dubious-doctrines">
                        Dubious Doctrines
                      </Nav.Link>
                      <Nav.Link href="/articles">Articles</Nav.Link>
                      <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Col>
        <Col lg={2} md={0} className="d-none d-md-block">
          &nbsp;
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
