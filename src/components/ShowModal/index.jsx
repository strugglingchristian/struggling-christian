/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ShowModal({
  content = "",
  url = "",
  show = false,
  handleClose = () => {}
}) {
  const footer =
    url === "" && content !== "" ? (
      content
    ) : (
      <a href={url} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Footnote</Modal.Title>
      </Modal.Header>
      <Modal.Body>{footer}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShowModal;
