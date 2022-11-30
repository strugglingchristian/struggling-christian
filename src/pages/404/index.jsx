import Button from "react-bootstrap/Button";
import "../../styles/lost-404.css";

function Page404() {
  return (
    <div className="lost-404">
      <section>
        <div className="text-content">
          <h1 className="lost-title">Feeling lost? </h1>
          <p>This site doesn&apos;t have all the answers but Jesus does.</p>
          <p>
            Jesus said, “I am the way and the truth and the life. No one comes
            to the Father except through me. <sub>John 14:16</sub>
          </p>

          <p>But we can redirect you back to the home page</p>
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

export default Page404;
