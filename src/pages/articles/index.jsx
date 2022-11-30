import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { allArticlesList } from "../../contents/contentData";

function Articles() {
  const allArticles = allArticlesList.map((article) => {
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
  });

  return (
    <div id="articles">
      <Container fluid>
        <Row className="featured-content pt-0 px-0">
          <Row className="featured px-0 pb-3">
            <h1>Articles</h1>
          </Row>
          {allArticles}
        </Row>
      </Container>
    </div>
  );
}

export default Articles;
