import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

function Footer() {
  return (
    <Container>
      <Row className="footer-container">
        <Col xl={2} md={0} className="d-none d-md-block">
          &nbsp;
        </Col>
        <Col md={12} xl={8} xs={12} className="footer-text">
          <Row className="py-0 mt-xl-3 mb-xl-3">
            <Col xl={6} md={6} xs={8}>
              <Row className="header-title">
                <Col className="d-flex">
                  <Link to="/">Struggling Christian</Link>
                </Col>
              </Row>
            </Col>
            <Col
              xl={3}
              md={3}
              xs={2}
              className="d-flex justify-content-center "
            >
              <ul className="footer-links">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/dubious-doctrines">DUBIOUS DOCTRINES</Link>
                </li>
                <li>
                  <Link to="/articles">ARTICLES</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
              </ul>
            </Col>
            <Col
              xl={3}
              md={3}
              xs={2}
              className="d-flex justify-content-center"
            />
          </Row>
          <Row className="mt-3 mb-3 mt-xl-5 mb-xl-5 d-flex justify-content-center">
            © 2022 STRUGGLING CHRISTIAN
          </Row>
        </Col>
        <Col xl={2} md={0} className="d-none d-md-block">
          &nbsp;
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
