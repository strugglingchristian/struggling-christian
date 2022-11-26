import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function INC() {
  return (
    <div id="dubious">
      <div className="body-content">
        <h1 className="title">Iglesia ni Cristo (Church of Christ)</h1>
        <p>
          The Iglesia ni Cristo is a Christian religion that came from the
          Philippines. It&apos;s founder was Felix Eraño Manalo who is believed
          by its members to be the &quot;Last Messenger of God&quot;. For the
          Iglesia ni Cristo, Jesus Christ is not God but merely a human being.
          Phasellus et magna blandit, tincidunt lectus ut, vehicula nisi.
          Suspendisse a sodales massa, convallis semper odio. Praesent vitae
          diam purus.
        </p>
        <div className="top-spacer">
          <Row>
            <Col xs={12} md={12}>
              <h3 className="link-header">
                <Link to="/dubious-doctrines/inc">Dubious Doctrines (8)</Link>
              </h3>
              <ul className="list-link">
                <Link to="/dubious-doctrines/inc/coming-soon">
                  <li>
                    Salvation belongs only to the members of the Iglesia Ni
                    Cristo
                  </li>
                </Link>
                <Link to="/dubious-doctrines/inc/coming-soon">
                  <li>Jesus Christ is just a man and not God</li>
                </Link>
                <Link to="/dubious-doctrines/inc/coming-soon">
                  <li>Felix Manalo is The Last Messenger of God</li>
                </Link>
                <Link to="/dubious-doctrines/inc/coming-soon">
                  <li>
                    The Iglesia Ni Cristo expects total submission from
                    it&apos;s members
                  </li>
                </Link>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default INC;
