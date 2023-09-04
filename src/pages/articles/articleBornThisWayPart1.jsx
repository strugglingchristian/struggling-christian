import { useState } from "react";
import { Link } from "react-router-dom";
import ShowModal from "../../components/ShowModal";
import Images from "../../assets/images";
import "../../styles/article.css";

function ArticleBornThisWayPart1() {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");

  const handleClose = () => setShow(false);
  const toggleModal =
    (url = "", footnote = "") =>
    () => {
      setShow(!show);
      setUrl(url);
      if (footnote === "" && url !== "") {
        setContent(url);
      } else if (url === "" && footnote !== "") {
        setContent(footnote);
      } else if (url !== "" && footnote !== "") {
        setUrl(url);
        setContent(footnote);
      }
    };

  return (
    <>
      <ShowModal
        show={show}
        handleClose={handleClose}
        toggleModal={toggleModal}
        content={content}
        url={url}
      />
      <div id="articles">
        <div className="body-content">
          <h1 className="title">
            Born This Way? An Unnatural View of Romans 1 (Part 1)
          </h1>
          <h3 className="subtitle">
            “Because of this, God gave them over to shameful lusts. Even their
            women exchanged natural sexual relations for unnatural ones. In the
            same way the men also abandoned natural relations with women and
            were inflamed with lust for one another. Men committed shameful acts
            with other men, and received in themselves the due penalty for their
            error.” Romans 1:26-27
          </h3>
          <p align="center">
            <img
              src={Images.imgBornThisWay}
              alt="The Gospel of love and inclusivitity, according to Lady Gaga"
              className="responsive"
            />
          </p>
          <p>
            It is true that the LGBTQIA++ community has suffered discrimination
            for the past how many years. Unfortunately, even from traditional
            Christian communities. Instead of receiving love and understanding
            from their families and from their church, many gays and lesbians
            have been shunned by their family and friends for coming out while
            some are even driven by despair to commit suicide.
            <sup>
              <button
                type="button"
                onClick={toggleModal("https://ellenwhite.org/people/18141")}
              >
                1
              </button>
            </sup>
          </p>
          <p>
            Even the late great Alan Turing, an English mathematician, computer
            scientist and cryptographer, who aided the Allied Powers during
            World War II for cracking the German coded messages, was not
            exempted from this discrimination. In 1952, He was arrested for
            having a relationship with Alan Murray, because homosexuality was
            illegal in the UK at that time. He underwent chemical castration in
            order to avoid prison time and in 1954 he was found dead from
            cyanide poisoning. Investigation found out that it was suicide. In
            1967, homosexuality was legalized in the UK and in 2013, Alan Turing
            was posthumously given a royal pardon.
          </p>
          <p>
            Fast forward to 2023, the tides of political and societal favor have
            shifted towards the LGBTQIA++ community. Now instead of just having
            2 genders, there is now a whole spectrum of genders that are
            recognized. Even misgendering or wrongly using a person’s preferred
            pronoun can be grounds for discrimination these days, particularly
            in Western cultures. Now, women can be men and men can be women and
            even everything in between.
          </p>
          <p>
            But some traditional Christian groups are pushing back against the
            Transgender rights movement, because the trans rights agenda is
            being pushed in the educational system, especially in the US. Even
            kindergarten and elementary schools are being targeted because
            indoctrinating the children while they are young is vital to the
            success of the agenda.
          </p>
          <p>
            I don&apos;t intend for this article to veer towards politics, but
            it&apos;s essential to acknowledge the socio-political factors that
            have influenced the conversation surrounding LGBTQIA++ rights. While
            discussions about sexual orientation and gender identity inherently
            have a social and personal dimension, the role of politics in
            shaping the rights and acceptance of the LGBTQIA++ community cannot
            be overlooked.
          </p>
          <p>
            But if you are a Christian, the moral standard for living should
            come from the Bible and not from what society dictates. What is
            acceptable in our society changes with time. Some values that were
            considered as virtues before can now be seen as archaic while some
            behaviors that were once viewed as immoral or indecent are now
            celebrated. That is why morality should come from the word of God,
            because the word of God endures forever.
          </p>
          <blockquote>
            <span align="center">
              <em>
                Isaiah 40:8 - “The grass withers and the flowers fall, but the
                word of our God endures forever”
              </em>
            </span>
          </blockquote>
          <p>
            But what does the Bible say about this hot topic of homosexuality?
          </p>
          <p>
            <em>
              <Link to="/articles/coming-soon">
                To be continued on part 2...
              </Link>
            </em>
          </p>
        </div>
      </div>
    </>
  );
}

export default ArticleBornThisWayPart1;
