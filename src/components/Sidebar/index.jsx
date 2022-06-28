import { Container, Row } from "react-bootstrap";

import "./style.css";

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
        <a target="_blank" href="https://www.nonsda.org/" rel="noreferrer">
          Christian Classics Ethereal Library
        </a>
      </div>
    </div>
  );
}

function DubiousDoctrinesSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">CULT OR NOT?</div>
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
      <div className="sidebar-header">RECOMMEND CHANNELS</div>
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
        {" "}
        <a
          target="_blank"
          href="https://www.youtube.com/c/NakedBible/videos"
          rel="noreferrer"
        >
          Naked Bible
        </a>
      </div>
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
        <DubiousDoctrinesSidebar />
      </Row>
    </Container>
  );
}

export default Sidebar;
