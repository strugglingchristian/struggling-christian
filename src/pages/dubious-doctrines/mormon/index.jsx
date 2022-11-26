import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function LDS() {
  return (
    <div id="dubious">
      <div className="body-content">
        <h1 className="title">Latter-day Saints (Mormons)</h1>
        <p>
          The Church of Jesus Christ of Latter-day Saints or commonly known as
          Mormons are Christians who believes that Joseph Smith is a prophet of
          God and they also put the Book of Mormon to the same level as the Holy
          Bible. Phasellus et magna blandit, tincidunt lectus ut, vehicula nisi.
          Suspendisse a sodales massa, convallis semper odio. Praesent vitae
          diam purus.
        </p>
        <div className="top-spacer">
          <Row>
            <Col xs={12} md={12}>
              <h3 className="link-header">
                <Link to="/dubious-doctrines/lds">Dubious Doctrines (8)</Link>
              </h3>
              <ul className="list-link">
                <Link to="/dubious-doctrines/lds/coming-soon">
                  <li>Authority of Joseph Smith as a prophet</li>
                </Link>
                <Link to="/dubious-doctrines/lds/coming-soon">
                  <li>Inerrancy of the Book of Mormon</li>
                </Link>
                <Link to="/dubious-doctrines/lds/coming-soon">
                  <li>Mormon Multiverse (Multiple worlds and gods)</li>
                </Link>
                <Link to="/dubious-doctrines/lds/coming-soon">
                  <li>The Heavenly Father has flesh and blood</li>
                </Link>
                <Link to="/dubious-doctrines/lds/coming-soon">
                  <li>
                    The Heavenly Father physically impregnated the virgin Mary
                  </li>
                </Link>
                <Link to="/dubious-doctrines/lds/coming-soon">
                  <li>Tithing</li>
                </Link>
                <Link to="/dubious-doctrines/lds/coming-soon">
                  <li>God lives on the planet Kolob</li>
                </Link>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default LDS;
