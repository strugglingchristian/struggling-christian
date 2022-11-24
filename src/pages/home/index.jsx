/* eslint-disable */
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Images from "../../assets/images";
import "./style.css";

function FeaturedContent() {
  return (
    <>
      <Row className="featured px-0 pb-3">
        <h1>Featured Articles</h1>
      </Row>
      <Row className="pb-4">
        <Col
          xxl={3}
          xs={12}
          className="d-flex justify-content-center p-md-0 p-sm-5"
        >
          <div className="preview-container">
            <Link to="/articles/1844-made-complicated-part-1">
              <div className="preview-image d-sm-block d-xl-none">
                <img
                  src={Images.imgNewsClipping1843Landscape}
                  alt="1843 news"
                />
              </div>
              <div className="preview-image d-none d-xl-block">
                <img src={Images.imgNewsClipping1843} alt="1843 news" />
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
              <div className="preview-image d-sm-block d-xl-none">
                <img
                  src={Images.imgMilleriteChartLandscape}
                  alt="Millerite Chart"
                />
              </div>
              <div className="preview-image d-none d-xl-block">
                <img src={Images.imgMilleriteChart} alt="Millerite Chart" />
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
            <Link to="/coming-soon">
              <div className="preview-image d-none d-xl-block">
                <img src={Images.imgEGW} alt="Ellen G. White" />
              </div>
              <div className="preview-image d-sm-block d-xl-none">
                <img src={Images.imgEgwLandscape} alt="Ellen G. White" />
              </div>
            </Link>
          </div>
        </Col>
        <Col xxl={9} xs={12} className="d-flex justify-content-evenly p-0">
          <div className="preview-text">
            <div className="title">
              <Link to="/coming-soon">Is Ellen G. White A True Prophet?</Link>
            </div>
            <div className="subtitle">
              <Link to="/coming-soon">
                Lunatic, Liar or Lord&apos;s Prophet
              </Link>
            </div>
            <div className="teaser">
              <Link to="/coming-soon">
                Ellen G. White is believed by majority of Seventh-day Adventists
                as a prophet. She is likened to a modern-day Elijah or John the
                Baptist who heralded the First Advent of the Messiah...
              </Link>
            </div>
            <div className="read-more">
              <Button variant="success" href="/coming-soon">
                Read more
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
    </>
  );
}

function FeaturedProphets() {
  return (
    <>
      <Row className="featured px-0">
        <h1>Featured Prophets</h1>
      </Row>
      <Row className="">
        <Col>
          <div className="preview-image">
            <img src={Images.imgJosephSmith} alt="Joseph Smith" />
          </div>
        </Col>
        <Col>
          <div className="preview-image">
            <img src={Images.imgEGW} alt="Ellen G. White" />
          </div>
        </Col>
        <Col>
          <div className="preview-image">
            <img src={Images.imgMaryBakerEddy} alt="Mary Baker Eddy" />
          </div>
        </Col>
      </Row>
    </>
  );
}

function FeaturedVideos() {
  const nextIcon = (
    <span
      aria-hidden="true"
      className="carousel-control-next-icon show-border"
    />
  );

  const prevIcon = (
    <span
      aria-hidden="true"
      className="carousel-control-prev-icon show-border"
    />
  );
  return (
    <>
      <Row className="featured px-0">
        <h1>Featured Videos</h1>
      </Row>
      <Carousel interval={null} nextIcon={nextIcon} prevIcon={prevIcon}>
        <Carousel.Item>
          <div className="carousel-container">
            <center>
              <h3>Should Tithing be Practiced Today?</h3>
            </center>
            <div className="video">
              <iframe
                className="video"
                frameBorder="0"
                title="featured-video"
                src="https://www.youtube.com/embed/oQspNNcvqEU"
                allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                allowFullScreen
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-container">
            <center>
              <h3>Ellen G. White - A Psychobiography?</h3>
            </center>
            <div className="video">
              <iframe
                className="video"
                frameBorder="0"
                title="featured-video"
                src="https://www.youtube.com/embed/vWSqm1B7NZI"
                allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                allowFullScreen
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-container">
            <center>
              <h3>The Sunday Law That Never Was</h3>
            </center>
            <div className="video">
              <iframe
                className="video"
                frameBorder="0"
                title="featured-video"
                src="https://www.youtube.com/embed/Hv7z2JqsGTM"
                allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                allowFullScreen
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
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
        <Row className="featured-content pt-0 px-0">
          <FeaturedVideos />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
