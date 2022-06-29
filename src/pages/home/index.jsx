import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import milleriteChart from "../../assets/images/1844-millerite-chart-old.jpg";
import milleriteChartLandscape from "../../assets/images/miller-chart-landscape.png";
import egwPhoto from "../../assets/images/egw.jpg";
import egwPhotoLandscape from "../../assets/images/egw-landscape.png";
import newsClipping1843 from "../../assets/images/1843-news-clipping.jpg";
import newsClipping1843Landscape from "../../assets/images/1843-header-landscape.png";
import "./style.css";

function FeaturedContent() {
  return (
    <div>
      <Row className="pb-4">
        <Col
          lg={3}
          xs={12}
          className="d-flex justify-content-center p-md-0 p-sm-5"
        >
          <div className="preview-container">
            <a href="https://www.google.com">
              <div className="preview-image d-sm-block d-lg-none">
                <img src={newsClipping1843Landscape} alt="1843 news" />
              </div>
              <div className="preview-image d-none d-lg-block">
                <img src={newsClipping1843} alt="1843 news" />
              </div>
            </a>
          </div>
        </Col>
        <Col lg={9} xs={12} className="d-flex justify-content-evenly p-0">
          <div className="preview-text">
            <div className="title">
              <a href="https://www.google.com">
                1844 Made Complicated (Part 1)
              </a>
            </div>
            <div className="subtitle">
              <a href="https://www.google.com">
                Examining how 1844 could be the Second Coming, Cleansing of the
                Heavenly Sanctuary or a Nonevent
              </a>
            </div>
            <div className="teaser">
              <a href="https://www.google.com">
                In Douglas Adams&apos; popular sci-fi novel titled The
                Hitchhiker&apos;s Guide to the Galaxy, a group of highly
                intelligent beings developed a supercomputer named Deep Thought,
                in order to determine the Answer to the Ultimate Question of
                Life, the Universe and Everything. In the story, it takes Deep
                Thought 7 ½ million years to...
              </a>
            </div>
            <div className="read-more">
              <Button variant="outline-dark" href="#">
                Read more
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="pb-4 mt-sm-2">
        <Col
          lg={3}
          xs={12}
          className="d-flex justify-content-center p-md-0 p-sm-5"
        >
          <div className="preview-container">
            <a href="https://www.google.com">
              <div className="preview-image d-sm-block d-lg-none">
                <img src={milleriteChartLandscape} alt="Millerite Chart" />
              </div>
              <div className="preview-image d-none d-lg-block">
                <img src={milleriteChart} alt="Millerite Chart" />
              </div>
            </a>
          </div>
        </Col>
        <Col lg={9} xs={12} className="d-flex justify-content-evenly p-0">
          <div className="preview-text">
            <div className="title">
              <a href="https://www.google.com">
                1844 Made Complicated (Part 2)
              </a>
            </div>
            <div className="subtitle">
              <a href="https://www.google.com">Continued from Part 1</a>
            </div>
            <div className="teaser">
              <a href="https://www.google.com">
                In Douglas Adams&apos; popular sci-fi novel titled The
                Hitchhiker&apos;s Guide to the Galaxy, a group of highly
                intelligent beings developed a supercomputer named Deep Thought,
                in order to determine the Answer to the Ultimate Question of
                Life, the Universe and Everything. In the story, it takes Deep
                Thought 7 ½ million years ...
              </a>
            </div>
            <div className="read-more">
              <Button variant="outline-dark" href="#">
                Read more
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="pb-4 mt-sm-2">
        <Col
          lg={3}
          xs={12}
          className="d-flex justify-content-center p-md-0 p-sm-5"
        >
          <div className="preview-container">
            <a href="https://www.google.com">
              <div className="preview-image d-none d-lg-block">
                <img src={egwPhoto} alt="Ellen G. White" />
              </div>
              <div className="preview-image d-sm-block d-lg-none">
                <img src={egwPhotoLandscape} alt="Ellen G. White" />
              </div>
            </a>
          </div>
        </Col>
        <Col lg={9} xs={12} className="d-flex justify-content-evenly p-0">
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
                Ellen G. White is believed by majority of Seventh-day Adventists
                as a prophet. A modern-day Elijah or John the Baptist who
                heralded the First Advent of the Messiah...
              </a>
            </div>
            <div className="read-more">
              <Button variant="outline-dark" href="#">
                Read more
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

function Home() {
  return (
    <Container>
      <Row className="featured-content">
        <FeaturedContent />
      </Row>
    </Container>
  );
}

export default Home;
