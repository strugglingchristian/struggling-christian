import { Container, Row, Col } from "react-bootstrap";
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
          </Row>
        </Col>
        <Col md={1}>&nbsp;</Col>
      </Row>
    </Container>
  );
}

export default Header;
