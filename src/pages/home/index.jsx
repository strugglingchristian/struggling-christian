import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import milleriteChart from "../../assets/images/1844-millerite-chart-old.jpg";
import milleriteChartLandscape from "../../assets/images/miller-chart-landscape.png";
import egwPhoto from "../../assets/images/egw.jpg";
import egwPhotoLandscape from "../../assets/images/egw-landscape.png";
import newsClipping1843 from "../../assets/images/1843-news-clipping.jpg";
import newsClipping1843Landscape from "../../assets/images/1843-header-landscape.png";
import "./style.css";

function FeaturedContent() {
  return (
    <>
      <Row className="pb-4">
        <Col
          xxl={3}
          xs={12}
          className="d-flex justify-content-center p-md-0 p-sm-5"
        >
          <div className="preview-container">
            <Link to="/articles/1844-made-complicated-part-1">
              <div className="preview-image d-sm-block d-lg-none">
                <img src={newsClipping1843Landscape} alt="1843 news" />
              </div>
              <div className="preview-image d-none d-lg-block">
                <img src={newsClipping1843} alt="1843 news" />
              </div>
            </Link>
          </div>
        </Col>
        <Col xxl={9} xs={12} className="d-flex justify-content-evenly p-0">
          <div className="preview-text">
            <div className="title">
              <Link to="/articles/1844-made-complicated-part-1">
                1844 Made Complicated (Part 1)
              </Link>
            </div>
            <div className="subtitle">
              <Link to="/articles/1844-made-complicated-part-1">
                Examining how 1844 could be the Second Coming, Cleansing of the
                Heavenly Sanctuary or a Nonevent
              </Link>
            </div>
            <div className="teaser">
              <Link to="/articles/1844-made-complicated-part-1">
                In Douglas Adams&apos; popular sci-fi novel titled The
                Hitchhiker&apos;s Guide to the Galaxy, a group of highly
                intelligent beings developed a supercomputer named Deep Thought,
                in order to determine the Answer to the Ultimate Question of
                Life, the Universe and Everything. In the story, it takes Deep
                Thought 7 ½ million years to...
              </Link>
            </div>
            <div className="read-more">
              <Button
                variant="success"
                href="/articles/1844-made-complicated-part-1"
              >
                Read more
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="pb-4 mt-sm-2">
        <Col
          xxl={3}
          xs={12}
          className="d-flex justify-content-center p-md-0 p-sm-5"
        >
          <div className="preview-container">
            <Link to="/articles/1844-made-complicated-part-2">
              <div className="preview-image d-sm-block d-lg-none">
                <img src={milleriteChartLandscape} alt="Millerite Chart" />
              </div>
              <div className="preview-image d-none d-lg-block">
                <img src={milleriteChart} alt="Millerite Chart" />
              </div>
            </Link>
          </div>
        </Col>
        <Col xxl={9} xs={12} className="d-flex justify-content-evenly p-0">
          <div className="preview-text">
            <div className="title">
              <Link to="/articles/1844-made-complicated-part-2">
                1844 Made Complicated (Part 2)
              </Link>
            </div>
            <div className="subtitle">
              <Link to="/articles/1844-made-complicated-part-2">
                Continued from Part 1
              </Link>
            </div>
            <div className="teaser">
              <Link to="/articles/1844-made-complicated-part-2">
                The 1844 doctrine or Sanctuary doctrine of the Seventh-day
                Adventists underwent several iterations from the time of Miller
                before reaching its final form as Seventh-day Adventists know it
                today. Let&apos;s now take a quick look ...
              </Link>
            </div>
            <div className="read-more">
              <Button
                variant="success"
                href="/articles/1844-made-complicated-part-2"
              >
                Read more
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="pb-4 mt-sm-2">
        <Col
          xxl={3}
          xs={12}
          className="d-flex justify-content-center p-md-0 p-sm-5"
        >
          <div className="preview-container">
            <Link to="/articles/egw-true-prophet">
              <div className="preview-image d-none d-lg-block">
                <img src={egwPhoto} alt="Ellen G. White" />
              </div>
              <div className="preview-image d-sm-block d-lg-none">
                <img src={egwPhotoLandscape} alt="Ellen G. White" />
              </div>
            </Link>
          </div>
        </Col>
        <Col xxl={9} xs={12} className="d-flex justify-content-evenly p-0">
          <div className="preview-text">
            <div className="title">
              <Link to="/articles/egw-true-prophet">
                Is Ellen G. White A True Prophet?
              </Link>
            </div>
            <div className="subtitle">
              <Link to="/articles/egw-true-prophet">
                Lunatic, Liar or Lord&apos;s Prophet
              </Link>
            </div>
            <div className="teaser">
              <Link to="/articles/egw-true-prophet">
                Ellen G. White is believed by majority of Seventh-day Adventists
                as a prophet. She is liked to a modern-day Elijah or John the
                Baptist who heralded the First Advent of the Messiah...
              </Link>
            </div>
            <div className="read-more">
              <Button variant="success" href="/articles/egw-true-prophet">
                Read more
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

function Home() {
  return (
    <div id="home">
      <Container fluid>
        <Row className="featured-content pt-0 px-0">
          <FeaturedContent />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
