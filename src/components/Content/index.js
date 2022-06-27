import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import newsClipping1843 from "../../assets/images/1843-news-clipping.jpg";
import milleriteChart from "../../assets/images/1844-millerite-chart-old.jpg";
import egwPhoto from "../../assets/images/egw.jpg";
import "./style.css";

function Content() {
  return (
    <Container>
      <div className="main-content">
        <Container>
          <Row className="pb-3">
            <Col md={9} xs={12} className="d-flex justify-content-start">
              <Container>
                <Row className="pb-3">
                  <div className="preview-container">
                    <div className="preview-text">
                      <div className="title">
                        <a href="https://www.google.com">
                          1844 Made Complicated (Part 1)
                        </a>
                      </div>
                      <div className="subtitle">
                        <a href="https://www.google.com">
                          Examining how 1844 could be the Second Coming,
                          Cleansing of the Heavenly Sanctuary or a Nonevent
                        </a>
                      </div>
                      <div className="teaser">
                        <a href="https://www.google.com">
                          In Douglas Adams&apos; popular sci-fi novel titled The
                          Hitchhiker&apos;s Guide to the Galaxy, a group of
                          highly intelligent beings developed a supercomputer
                          named Deep Thought, in order to determine the Answer
                          to the Ultimate Question of Life, the Universe and
                          Everything. In the story, it takes Deep Thought 7 ½
                          million years ...
                        </a>
                      </div>
                      <div className="read-more">
                        <Button variant="outline-dark" href="#">
                          Read more
                        </Button>
                      </div>
                    </div>
                    <a href="https://www.google.com">
                      <div className="preview-image">
                        <img src={newsClipping1843} alt="1843 news" />
                      </div>
                    </a>
                  </div>
                </Row>
                <Row className="pb-3">
                  <div className="preview-container">
                    <div className="preview-text">
                      <div className="title">
                        <a href="https://www.google.com">
                          1844 Made Complicated (Part 2)
                        </a>
                      </div>
                      <div className="subtitle">
                        <a href="https://www.google.com">
                          Continued from Part 1
                        </a>
                      </div>
                      <div className="teaser">
                        <a href="https://www.google.com">
                          In Douglas Adams&apos; popular sci-fi novel titled The
                          Hitchhiker&apos;s Guide to the Galaxy, a group of
                          highly intelligent beings developed a supercomputer
                          named Deep Thought, in order to determine the Answer
                          to the Ultimate Question of Life, the Universe and
                          Everything. In the story, it takes Deep Thought 7 ½
                          million years ...
                        </a>
                      </div>
                      <div className="read-more">
                        <Button variant="outline-dark" href="#">
                          Read more
                        </Button>
                      </div>
                    </div>
                    <a href="https://www.google.com">
                      <div className="preview-image">
                        <img src={milleriteChart} alt="1843 news" />
                      </div>
                    </a>
                  </div>
                </Row>
                <Row className="pb-3">
                  <div className="preview-container">
                    <div className="preview-text">
                      <div className="title">
                        <a href="https://www.google.com">
                          Is Ellen G. White A True Prophet?
                        </a>
                      </div>
                      <div className="subtitle">
                        <a href="https://www.google.com">
                          Lunatic, Liar or Lord&apos;s Prophet
                        </a>
                      </div>
                      <div className="teaser">
                        <a href="https://www.google.com">
                          Ellen G. White is believed by majority of Seventh-day
                          Adventists as a prophet. A modern-day Elijah or John
                          the Baptist who heralded the First Advent of the
                          Messiah...
                        </a>
                      </div>
                      <div className="read-more">
                        <Button variant="outline-dark" href="#">
                          Read more
                        </Button>
                      </div>
                    </div>
                    <a href="https://www.google.com">
                      <div className="preview-image">
                        <img src={egwPhoto} alt="EGW" />
                      </div>
                    </a>
                  </div>
                </Row>
              </Container>
            </Col>
            <Col
              md={3}
              xs={12}
              className="d-flex justify-content-start row-border"
            >
              <Container>
                <Row className="sidebar-row-group">
                  <div className="sidebar-header">DUBIOUS DOCTRINES</div>
                  <div className="sidebar-title">Jehovah&apos; Witnesses</div>
                  <div className="sidebar-title">Seventh-day Adventists</div>
                  <div className="sidebar-title">Latter-day Saints</div>
                  <div className="sidebar-title">Iglesia Ni Cristo</div>
                  <div className="sidebar-title">Kingdom Of Jesus Christ</div>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default Content;
