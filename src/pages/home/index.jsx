/* eslint-disable */
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Images from "../../assets/images";
import { featuredArticlesList } from "../../contents/contentData";
import "../../styles/home.css";

function FeaturedContent() {
  const featuredArticles = featuredArticlesList.map((article) => {
    if (article.isActive) {
      return (
        <Row key={article.title} className="pb-4 mt-sm-2">
          <Col
            xxl={3}
            xs={12}
            className="d-flex justify-content-center p-md-0 p-sm-5"
          >
            <div className="preview-container">
              <Link to={article.url}>
                <div className="preview-image d-sm-block d-xl-none">
                  <img src={article.imgMobile} alt={article.imgAlt} />
                </div>
                <div className="preview-image d-none d-xl-block">
                  <img src={article.imgWeb} alt={article.imgAlt} />
                </div>
              </Link>
            </div>
          </Col>
          <Col xxl={9} xs={12} className="d-flex justify-content-evenly p-0">
            <div className="preview-text">
              <div className="title">
                <Link to={article.url}>{article.title}</Link>
              </div>
              <div className="subtitle">
                <Link to={article.url}>{article.subtitle}</Link>
              </div>
              <div className="teaser">
                <Link to={article.url}>{article.teaser}</Link>
              </div>
              <div className="read-more">
                <Button variant="success" href={article.url}>
                  Read more
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      );
    }
    return null;
  });

  return (
    <>
      <Row className="featured px-0 pb-3">
        <h1>Featured Articles</h1>
      </Row>
      {featuredArticles}
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
              <h3>The Troublesome Legacy of 1844</h3>
            </center>
            <div className="video">
              <iframe
                className="video"
                frameBorder="0"
                title="featured-video"
                src="https://www.youtube.com/embed/JF3LjYDriZY"
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
