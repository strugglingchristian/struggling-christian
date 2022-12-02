import Button from "react-bootstrap/Button";
import "../../styles/coming-soon.css";

function ComingSoon() {
  return (
    <div className="coming-soon">
      <section>
        <div className="text-content">
          <h1 className="coming-soon-title">Under Construction</h1>
          <p>
            This site is still under construction. Please check back again later
          </p>

          <div className="back-to-home">
            <Button variant="success" href="/">
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ComingSoon;
