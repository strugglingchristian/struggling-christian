import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

function Header() {
  return (
    <Row className="header">
      <Container>
        <Row>
          <Col md={1}>&nbsp;</Col>
          <Col md={10}>
            <Row>
              <Row className="header-title">
                <Col class="d-flex">Struggling Christian</Col>
              </Row>
              <Row className="header-subtitle">
                <Col class="d-flex">
                  Discerning truth from falsehood, one doctrine at a time
                </Col>
              </Row>
            </Row>
          </Col>
          <Col md={1}>&nbsp;</Col>
        </Row>
      </Container>
    </Row>
  );
}

export default Header;
