import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function JW() {
  return (
    <div id="dubious">
      <div className="body-content">
        <h1 className="title">Jehovah&apos;s Witnesses</h1>
        <p>
          The Jehovah&apos;s Witnesses are Christians who teach that Jesus
          Christ is a lesser god compared to the Father who is the Almighty and
          that the Holy Spirit is not a person but just an impersonal force,
          like a breath, or wind. Phasellus et magna blandit, tincidunt lectus
          ut, vehicula nisi. Suspendisse a sodales massa, convallis semper odio.
          Praesent vitae diam purus.
        </p>
        <div className="top-spacer">
          <Row>
            <Col xs={12} md={12}>
              <h3 className="link-header">
                <Link to="/dubious-doctrines/jw">Dubious Doctrines (8)</Link>
              </h3>
              <ul className="list-link">
                <Link to="/dubious-doctrines/jw/coming-soon">
                  <li>
                    The Holy Spirit is not a person but an impersonal force
                  </li>
                </Link>
                <Link to="/dubious-doctrines/jw/coming-soon">
                  <li>
                    Jehovah&apos; witnesses believe that getting a blood
                    transfusion is sinful
                  </li>
                </Link>
                <Link to="/dubious-doctrines/jw/coming-soon">
                  <li>Invisible Second Coming</li>
                </Link>
                <Link to="/dubious-doctrines/jw/coming-soon">
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

export default JW;
