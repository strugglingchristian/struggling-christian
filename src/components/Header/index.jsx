import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <Container>
      <Row className="header">
        <Col md={1}>&nbsp;</Col>
        <Col md={10}>
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
              <div className="nav-links-container">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/cultic-doctrines">
                  Cultic Doctrines
                </Link>
                <Link className="nav-link" to="/articles">
                  Articles
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </div>
            </Row>
          </Row>
        </Col>
        <Col md={1}>&nbsp;</Col>
      </Row>
    </Container>
  );
}

export default Header;
