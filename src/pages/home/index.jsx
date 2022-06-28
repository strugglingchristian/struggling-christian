import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import milleriteChart from "../../assets/images/1844-millerite-chart-old.jpg";
import egwPhoto from "../../assets/images/egw.jpg";
import newsClipping1843 from "../../assets/images/1843-news-clipping.jpg";
import "./style.css";

function FeaturedContent() {
  return (
    <div>
      <Row className="pb-md-5">
        <Container>
          <Row className="pb-md-4">
            <div className="preview-container">
              <a href="https://www.google.com">
                <div className="preview-image">
                  <img src={newsClipping1843} alt="1843 news" />
                </div>
              </a>
              <div className="preview-text">
                <div className="title">
                  <a href="https://www.google.com">
                    1844 Made Complicated (Part 1)
                  </a>
                </div>
                <div className="subtitle">
                  <a href="https://www.google.com">
                    Examining how 1844 could be the Second Coming, Cleansing of
                    the Heavenly Sanctuary or a Nonevent
                  </a>
                </div>
                <div className="teaser">
                  <a href="https://www.google.com">
                    In Douglas Adams&apos; popular sci-fi novel titled The
                    Hitchhiker&apos;s Guide to the Galaxy, a group of highly
                    intelligent beings developed a supercomputer named Deep
                    Thought, in order to determine the Answer to the Ultimate
                    Question of Life, the Universe and Everything. In the story,
                    it takes Deep Thought 7 ½ million years ...
                  </a>
                </div>
                <div className="read-more">
                  <Button variant="outline-dark" href="#">
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          </Row>
          <Row className="pb-md-4">
            <div className="preview-container">
              <a href="https://www.google.com">
                <div className="preview-image">
                  <img src={milleriteChart} alt="1843 news" />
                </div>
              </a>
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
                    intelligent beings developed a supercomputer named Deep
                    Thought, in order to determine the Answer to the Ultimate
                    Question of Life, the Universe and Everything. In the story,
                    it takes Deep Thought 7 ½ million years ...
                  </a>
                </div>
                <div className="read-more">
                  <Button variant="outline-dark" href="#">
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          </Row>
          <Row className="pb-md-4">
            <div className="preview-container">
              <a href="https://www.google.com">
                <div className="preview-image">
                  <img src={egwPhoto} alt="EGW" />
                </div>
              </a>
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
                    Adventists as a prophet. A modern-day Elijah or John the
                    Baptist who heralded the First Advent of the Messiah...
                  </a>
                </div>
                <div className="read-more">
                  <Button variant="outline-dark" href="#">
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          </Row>
        </Container>
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
