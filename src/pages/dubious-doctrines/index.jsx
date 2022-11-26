import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function DubiousDoctrines() {
  return (
    <div id="dubious">
      <div className="body-content">
        <h1 className="title">Dubious Doctrines</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere
          enim eu accumsan pulvinar. Mauris sagittis vestibulum nisl, molestie
          fringilla velit eleifend id. Duis a metus dictum, imperdiet tellus
          vel, auctor nisl. Phasellus et magna blandit, tincidunt lectus ut,
          vehicula nisi. Suspendisse a sodales massa, convallis semper odio.
          Praesent vitae diam purus. Vestibulum convallis in turpis elementum
          fermentum. Sed eget risus ullamcorper, dignissim ipsum at, blandit
          neque. Donec rhoncus euismod nisl in faucibus. Integer sit amet ligula
          erat. Quisque ac nisl in nibh tincidunt pulvinar.
        </p>
        <div className="top-spacer">
          <Row>
            <Col xs={12} md={6}>
              <h3 className="link-header">
                <Link to="/dubious-doctrines/sda">
                  Seventh-day Adventists (8)
                </Link>
              </h3>
              <ul className="list-link">
                <Link to="/dubious-doctrines/sda/authority-of-egw">
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
                <Link to="/dubious-doctrines/sda">
                  <li>More...</li>
                </Link>
              </ul>
            </Col>
            <Col xs={12} md={6}>
              <h3 className="link-header">
                <Link to="/dubious-doctrines/lds">Latter-Day Saints (10)</Link>
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
                <Link to="/dubious-doctrines/lds">
                  <li>More...</li>
                </Link>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <h3 className="link-header">
                <Link to="/dubious-doctrines/jw">
                  Jehovah&apos;s Witnesses (8)
                </Link>
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
                <Link to="/dubious-doctrines/jw">
                  <li>More...</li>
                </Link>
              </ul>
            </Col>
            <Col xs={12} md={6}>
              <h3 className="link-header">
                <Link to="/dubious-doctrines/inc">Iglesia Ni Cristo (10)</Link>
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
                <Link to="/dubious-doctrines/inc">
                  <li>More...</li>
                </Link>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default DubiousDoctrines;
