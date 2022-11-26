import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function SDA() {
  return (
    <div id="dubious">
      <div className="body-content">
        <h1 className="title">Seventh-day Adventists</h1>
        <p>
          Seventh-day Adventists are Christians who are known for their emphasis
          on strict Sabbath observance. Phasellus et magna blandit, tincidunt
          lectus ut, vehicula nisi. Suspendisse a sodales massa, convallis
          semper odio. Praesent vitae diam purus.
        </p>
        <div className="top-spacer">
          <Row>
            <Col xs={12} md={12}>
              <h3 className="link-header">
                <Link to="/dubious-doctrines/sda">Dubious Doctrines (8)</Link>
              </h3>
              <ul className="list-link">
                <Link to="/dubious-doctrines/sda/authority-of-egw ">
                  <li>Authority of Ellen G. White as a prophet</li>
                </Link>
                <Link to="/dubious-doctrines/sda/coming-soon">
                  <li>State of the Dead (Soul Sleep)</li>
                </Link>
                <Link to="/dubious-doctrines/sda/coming-soon">
                  <li>Investigative Judgment (1844)</li>
                </Link>
                <Link to="/dubious-doctrines/sda/coming-soon">
                  <li>
                    Sabbath as the Seal of God/ Sunday as Mark of the Beast
                  </li>
                </Link>
                <Link to="/dubious-doctrines/sda/coming-soon">
                  <li>Strict obedience to food laws (but not kosher)</li>
                </Link>
                <Link to="/dubious-doctrines/sda/coming-soon">
                  <li>Tithing</li>
                </Link>
                <Link to="/dubious-doctrines/sda/coming-soon">
                  <li>The Archangel Michael is Jesus</li>
                </Link>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default SDA;
