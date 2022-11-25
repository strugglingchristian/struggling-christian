import { Container, Row, Col } from "react-bootstrap";
import "../../styles/sidebar.css";

function BibleStudyResourcesSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">BIBLE STUDY RESOURCES</div>
      <div className="sidebar-title">
        <a
          target="_blank"
          href="https://www.christian-history.org/"
          rel="noreferrer"
        >
          Christian-History.org
        </a>
      </div>
      <div className="sidebar-title">
        <a target="_blank" href="https://drmsh.com/" rel="noreferrer">
          Dr. Michael Heiser
        </a>
      </div>
      <div className="sidebar-title">
        <a target="_blank" href="https://www.nonsda.org/" rel="noreferrer">
          NonSDA.org
        </a>
      </div>
      <div className="sidebar-title">
        <a
          target="_blank"
          href="https://www.gotquestions.org/"
          rel="noreferrer"
        >
          GotQuestions.org
        </a>
      </div>
      <div className="sidebar-title">
        <a target="_blank" href="https://ccel.org/fathers" rel="noreferrer">
          Christian Classics Ethereal Library (<em>Early Church Fathers</em>)
        </a>
      </div>
    </div>
  );
}

function DubiousDoctrinesSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">TRUTH OR CULT?</div>
      <div className="sidebar-title">Jehovah&apos; Witnesses</div>
      <div className="sidebar-title">Seventh-day Adventists</div>
      <div className="sidebar-title">Latter-day Saints</div>
      <div className="sidebar-title">Iglesia Ni Cristo</div>
      <div className="sidebar-title">Kingdom Of Jesus Christ</div>
    </div>
  );
}

function YoutubeChannelsSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">RECOMMENDED CHANNELS</div>
      <div className="sidebar-title">
        <a
          target="_blank"
          href="https://www.youtube.com/@strugglingchristian"
          rel="noreferrer"
        >
          Struggling Christian (<em>Filipino</em>)
        </a>
      </div>
      <div className="sidebar-title">
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCvlwjKB8N5FH4xamd9ezzVg"
          rel="noreferrer"
        >
          Christian Scholars Forum
        </a>
      </div>
      <div className="sidebar-title">
        <a
          target="_blank"
          href="https://www.youtube.com/c/DrMichaelSHeiser"
          rel="noreferrer"
        >
          Dr. Michael Heiser
        </a>
      </div>
      <div className="sidebar-title">
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=L-nhOwEwtrE&list=PLYFBLkHop2alFacrvkn2qtR3y1D2fQmad"
          rel="noreferrer"
        >
          Dr. Bruce Gore
        </a>
      </div>
      <div className="sidebar-title">
        <a
          target="_blank"
          href="https://www.youtube.com/c/HouseformApologetics"
          rel="noreferrer"
        >
          Houseform Apologetics
        </a>
      </div>
      <div className="sidebar-title">
        <a
          target="_blank"
          href="https://www.youtube.com/c/NakedBible/videos"
          rel="noreferrer"
        >
          Naked Bible
        </a>
      </div>
      <div className="sidebar-title">
        <a
          target="_blank"
          href="https://www.youtube.com/c/ProlifeAndrew/videos"
          rel="noreferrer"
        >
          ProLife Andrew
        </a>
      </div>
    </div>
  );
}

function AmazonAffiliateLinkSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">RECOMMENDED BOOKS</div>
      <Row>
        <Col className="pb-3">
          <div className="affiliate-container">
            <iframe
              title="The White Lie"
              sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
              style={{ width: "120px", height: "240px" }}
              marginWidth="0"
              marginHeight="0"
              scrolling="no"
              frameBorder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=clowreed-20&language=en_US&marketplace=amazon&region=US&placement=0960742417&asins=0960742417&linkId=e02dc5e7e64772b8891c06332dbc6d3a&show_border=true&link_opens_in_new_window=true"
            />
          </div>
        </Col>
        <Col className="pb-3">
          <div className="affiliate-container">
            <iframe
              title="Sabbath in Christ"
              sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
              style={{ width: "120px", height: "240px" }}
              marginWidth="0"
              marginHeight="0"
              scrolling="no"
              frameBorder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=clowreed-20&language=en_US&marketplace=amazon&region=US&placement=0974767980&asins=0974767980&linkId=ba98f57d7a3bad3478e49c085914e54f&show_border=true&link_opens_in_new_window=true"
            />
          </div>
        </Col>
        <Col className="pb-3">
          <div className="affiliate-container">
            <iframe
              title="Decoding Nicea"
              sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
              style={{ width: "120px", height: "240px" }}
              marginWidth="0"
              marginHeight="0"
              scrolling="no"
              frameBorder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=clowreed-20&language=en_US&marketplace=amazon&region=US&placement=B00MPXOV9G&asins=B00MPXOV9G&linkId=e9551ee9d5ba071ed2011413770947c5&show_border=true&link_opens_in_new_window=true"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

function Sidebar() {
  return (
    <Container>
      <Row className="sidebar-row-group">
        <BibleStudyResourcesSidebar />
      </Row>
      <Row className="sidebar-row-group">
        <YoutubeChannelsSidebar />
      </Row>
      <Row className="sidebar-row-group">
        <AmazonAffiliateLinkSidebar />
      </Row>
      <Row className="sidebar-row-group">
        <DubiousDoctrinesSidebar />
      </Row>
    </Container>
  );
}

export default Sidebar;
