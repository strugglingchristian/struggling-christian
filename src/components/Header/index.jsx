import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "./style.css";

function Header() {
  return (
    <Container>
      <Row className="header">
        <Col sm={1} md={2}>
          &nbsp;
        </Col>
        <Col sm={9} md={8}>
          <Row>
            <Row className="header-title">
              <Col className="d-flex">Struggling Christian</Col>
            </Row>
            <Row className="header-subtitle">
              <Col className="d-flex">
                Discerning truth from falsehood, one doctrine at a time
              </Col>
            </Row>
            <Row>
              <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
                <Container fluid className="px-0">
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/cultic-doctrines">
                        Dubious Doctrines
                      </Nav.Link>
                      <Nav.Link href="/articles">Articles</Nav.Link>
                      <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Row>
          </Row>
        </Col>
        <Col sm={1} md={1}>
          &nbsp;
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
