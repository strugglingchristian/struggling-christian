import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "./style.css";

function Header() {
  return (
    <Container>
      <Row className="header">
        <Col xxl={2} md={0} className="d-none d-md-block">
          &nbsp;
        </Col>
        <Col md={12} xxl={8} xs={12}>
          <Row className="py-0 my-0">
            <Col xxl={8} md={6} xs={8}>
              <Row className="header-title">
                <Col className="d-flex">Struggling Christian</Col>
              </Row>
              <Row className="header-subtitle">
                <Col className="d-flex">
                  Discerning truth from falsehood, one doctrine at a time
                </Col>
              </Row>
            </Col>
            <Col
              xxl={4}
              md={6}
              xs={4}
              className="d-flex justify-content-end p-0"
            >
              <Navbar
                className="color-nav p-0"
                collapseOnSelect
                expand="md"
                variant="dark"
                bg="dark"
              >
                <Container>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="dropdown-menu-end px-0">
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
        <Col xxl={2} md={0} className="d-none d-md-block">
          &nbsp;
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
