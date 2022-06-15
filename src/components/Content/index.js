import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

function Content() {
  return (
    <Container>
      <div className="main-content">
        <Container>
          <Row>
            <Col md={9} className="d-flex justify-content-start">
              <Row>
                <Col>
                  <div className="preview-container">
                    <div className="title">1844 Made Complicated</div>
                    <div className="subtitle">
                      Examining how 1844 could be the Second Coming, Cleansing
                      of the Heavenly Sanctuary or a Nonevent
                    </div>
                    <div className="teaser">
                      In Douglas Adams&apos; popular sci-fi novel titled The
                      Hitchhiker&apos;s Guide to the Galaxy, a group of highly
                      intelligent beings developed a supercomputer named Deep
                      Thought, in order to determine the Answer to the Ultimate
                      Question of Life, the Universe and Everything. In the
                      story, it takes Deep Thought 7 ½ million years to compute
                      the answer which just happens to be a seemingly random
                      number, 42. If only the answer to all the questions about
                      life is this simple and can be calculated by a computer,
                      it would certainly solve a lot of our problems.
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={3} className="d-flex justify-content-start">
              left column
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default Content;
