import { Container, Row } from "react-bootstrap";

import "./style.css";

function UsefulLinks() {
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

function Sidebar() {
  return (
    <Container>
      <Row className="sidebar-row-group">
        <DubiousDoctrinesSidebar />
      </Row>
      <Row className="sidebar-row-group">
        <UsefulLinks />
      </Row>
    </Container>
  );
}

export default Sidebar;
