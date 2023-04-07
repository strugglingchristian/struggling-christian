import { useState } from "react";
import { Link } from "react-router-dom";
import ShowModal from "../../components/ShowModal";
import Images from "../../assets/images";
import "../../styles/article.css";

function ArticleMichaelPart2() {
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
            Will The Real Michael Please Stand Up? (Part 2)
          </h1>

          <h4>
            <strong>
              <u>Michael In Judaism</u>
            </strong>
          </h4>
          <p>
            Michael is called the archangel in Jude 1:9. The only other
            reference to the archangel is in 1 Thess 4:16, referring to the
            voice of the archangel. In Judaism
            <sup>
              <button
                type="button"
                onClick={toggleModal(
                  "https://www.jewishvirtuallibrary.org/angels-and-angelology-2"
                )}
              >
                11
              </button>
            </sup>{" "}
            and Eastern Orthodox
            <sup>
              <button
                type="button"
                onClick={toggleModal(
                  "https://www.stgeorgegreenville.org/our-faith/angels"
                )}
              >
                12
              </button>
            </sup>{" "}
            tradition, there are seven archangels named. Both Judaism and
            Eastern Orthodox share the following 4: Michael, Gabriel, Uriel and
            Raphael, while the name of the 3 remaining archangels differ in both
            traditions. In the Roman Catholic tradition
            <sup>
              <button
                type="button"
                onClick={toggleModal(
                  "https://www.catholic.org/saints/angels/archangels.php"
                )}
              >
                13
              </button>
            </sup>
            , there are also 7 archangels but only 3 are named: Michael, Gabriel
            and Raphael, while in the Protestant tradition only Michael is
            regarded as the archangel. But the Anglican and Methodist churches
            recognize four archangels, namely: Michael, Gabriel, Raphael and
            Uriel.
          </p>
          <p align="center">
            <img
              src={Images.img7archangels}
              alt="7 Archangels"
              className="responsive"
            />
            <br />
            <strong>7 Archangels of Judaism</strong>
          </p>
          <p>
            But wait a minute, if there are only 5 occurrences of Michael the
            Archangel in the Bible <em>(Protestant canon)</em>, where did these
            other names of the archangels come from? And if the term archangel
            wasn’t even mentioned in the OT, how come Paul mentioned it in 1
            Thess. 4:16 as if everybody knows what an archangel is? Shouldn’t he
            have given an introduction or explanation first of what an archangel
            is? And also in Jude 1:9, Jude mentioned the event matter-of-factly
            without any explanation. Could it be that the intended readers of
            Paul and Jude’s letters were privy to information that we modern
            readers have no idea about? And could it be that the concept of the
            archangel and the story of Michael contending with the devil for the
            body of Moses was already common knowledge during their time?
            Perhaps that could be the reason why Paul and Jude never offered any
            background information about it.
          </p>
          <p>
            So let’s begin by defining what an archangel <em>is.</em>
          </p>

          <p>
            The word archangel came from the Greek word ἀρχάγγελος
            (arkhángelos), The prefix arch, meaning chief and angelos meaning
            messenger. This term obviously did not appear in the Old Testament
            because the Old Testament was originally written in Hebrew while the
            New Testament was written in Greek. So how did it get introduced in
            the first place?
          </p>
          <p>
            To find out how, we’re going to segue a bit and learn about the
            Scriptures used in Jesus’ day and we’re also going to learn about
            the Intertestamental
            <sup>
              <button
                type="button"
                onClick={toggleModal(
                  "https://www.britannica.com/topic/biblical-literature/Intertestamental-literature"
                )}
              >
                14
              </button>
            </sup>{" "}
            literature or 2nd Temple Literature. Because I believe that in order
            to better understand the context of the biblical writers, one has to
            have an idea about their historical and cultural background. But if
            you already know about this or don’t care about it at all, feel free
            to skip this section <em>(but I hope you won’t)</em>.
          </p>
          <p>
            Growing up as an SDA, I used to naively think that the Scriptures
            used by the people from Jesus’ time were limited to the same 39
            books from the OT (Protestant canon). But that is not the case. The
            Scriptures that was commonly used during Jesus’ time was the
            Septuagint
            <sup>
              <button
                type="button"
                onClick={toggleModal(
                  "https://www.britannica.com/topic/Septuagint"
                )}
              >
                15
              </button>
            </sup>{" "}
            a.k.a LXX. The term “Septuagint” was derived from the Latin “Vetus
            Testamentum ex versione Septuaginta Interpretum” which means “The
            Old Testament from the version of the 70 Translators.”
          </p>
          <p align="center">
            <img
              src={Images.imgSeptuagintManuscript}
              alt="Septuagiant Manuscript"
              className="responsive"
            />
            <br />
            <strong>Septuagint Manuscript</strong>
          </p>
          <p>
            The Septuagint contains all the 39 books of the OT Protestant Bible
            plus 7 additional books. According to tradition, in the mid-3rd
            century BC, Ptolemy II Philadelphus commissioned 72 Jewish
            translators to translate the Hebrew Bible to Greek. The translators
            worked independently but somehow miraculously produced identical
            translations of the text. We don’t know the veracity of this tale
            but what we do know is the Septuagint was widely read before, during
            and after the time of Jesus. The Masoretic Text
            <sup>
              <button
                type="button"
                onClick={toggleModal(
                  "https://www.britannica.com/topic/Masoretic-text"
                )}
              >
                16
              </button>
            </sup>{" "}
            on the other hand, from which most of the Protestant translations
            that we use today were derived from, started in the 6th century AD
            and wasn’t completed until the 10th century AD, more or less 1000
            years after Christ.
          </p>
          <p>
            Aside from the Septuagint and the unknown Hebrew text
            (proto-Masoretic
            <sup>
              <button
                type="button"
                onClick={toggleModal(
                  "https://brill.com/view/journals/text/27/1/article-p135_8.xml"
                )}
              >
                17
              </button>
            </sup>
            ) that the Septuagint was translated from, there was also the
            Samaritan Pentateuch
            <sup>
              <button
                type="button"
                onClick={toggleModal(
                  "https://www.britannica.com/topic/Samaritan-Pentateuch"
                )}
              >
                18
              </button>
            </sup>
            , a text of the Torah written in Samaritan text. There was also the
            Dead Sea Scrolls which was first discovered in the 1940s in a cave
            in Qumran
            <sup>
              <button
                type="button"
                onClick={toggleModal("https://www.britannica.com/place/Qumran")}
              >
                19
              </button>
            </sup>
            . The Dead Sea Scrolls is interesting because it contains fragments
            of most of the Hebrew Bible except Esther and some other apocryphal
            books{" "}
            <em>
              (including the War Scroll which would be of interest to our study
              on the subject of Michael)
            </em>
            .
          </p>
          <p align="center">
            <img
              src={Images.imgQumranCaves}
              alt="Qumran Caves"
              className="responsive"
            />
            <br />
            <strong>Qumran Caves, Location of Dead Sea Scrolls</strong>
          </p>
          <p>
            Since we’ve briefly discussed the Scriptures used during Jesus’
            time, let’s then take a look at the Intertestamental period{" "}
            <em>(between Testaments)</em> as referred to by Protestants or the
            Deuterocanonical period as called by Catholics and Orthodox.
          </p>
          <p>
            The Intertestamental period
            <sup>
              <button
                type="button"
                onClick={toggleModal(
                  "https://www.gotquestions.org/intertestamental-period.html"
                )}
              >
                20
              </button>
            </sup>{" "}
            covers the time period of the prophet Malachi{" "}
            <em>(around 400 BC)</em> up to John the Baptist’s time in the 1st
            century AD. This is commonly referred to as the{" "}
            <em>“400 years of silence ”</em>{" "}
            <sup>
              <button
                type="button"
                onClick={toggleModal(
                  "https://www.christianity.com/wiki/bible/what-happened-during-the-400-years-of-silence-between-the-old-and-new-testaments.html"
                )}
              >
                21
              </button>
            </sup>{" "}
            by Protestants because they believe that during these 400 years, God
            has ceased speaking through prophets and no inspired writing came
            about until the time of the coming of the Messiah. For Jews on the
            other hand, this is the period where much of the Intertestamental
            literature was produced. Aside from the Septuagint, Dead Sea scrolls
            and Samaritan Pentateuch; the Pseudepigrapha
            <sup>
              <button
                type="button"
                onClick={toggleModal(
                  "https://www.britannica.com/art/pseudepigrapha"
                )}
              >
                22
              </button>
            </sup>
            , Apocrypha
            <sup>
              <button
                type="button"
                onClick={toggleModal(
                  "https://www.britannica.com/topic/apocrypha"
                )}
              >
                23
              </button>
            </sup>{" "}
            and Wisdom Literature
            <sup>
              <button
                type="button"
                onClick={toggleModal(
                  "https://www.britannica.com/topic/biblical-literature/Wisdom-literature#ref597911"
                )}
              >
                24
              </button>
            </sup>{" "}
            were also produced during this time.
          </p>
          <p>
            Now that we’ve had a little background information about the
            Intertestamental Period and Intertestamental Literature, let’s go
            back to our main topic, Michael.
          </p>
          <p>
            Michael is highly regarded by the Jews. Not only do they see Michael
            as an archangel, he is also Israel’s protector, advocate, high
            priest and prince.
            <sup>
              <button
                type="button"
                onClick={toggleModal(
                  "https://www.jewishencyclopedia.com/articles/10779-michael"
                )}
              >
                25
              </button>
            </sup>{" "}
            For example, in the book of Tobit, Michael is one of the seven
            angels who stands in the presence of God (Tobit 12:15). And in the
            non-canonical book of Enoch, Michael was said to be the angel that
            will cast the fallen angels into the abyss to execute judgment on
            them (1 Enoch 10:4, 18:1-2). Michael is also referred to as the
            merciful and long-suffering (1 Enoch 40:9). Michael also appears in
            a manuscript found in the Dead Sea scrolls called{" "}
            <em>
              <strong>
                “The War of the Sons of Light Against the Sons of Darkness”
              </strong>
            </em>{" "}
            or simply known as the{" "}
            <em>
              <strong>War Scroll</strong>
            </em>
            . In this book Michael was described as the{" "}
            <em>
              “Prince of Light who will defeat the devil Belial and establish
              his kingdom”{" "}
              <sup>
                <button
                  type="button"
                  onClick={toggleModal(
                    "https://isthatinthebible.wordpress.com/2020/09/20/michael-the-great-prince-and-saviour-of-israel/"
                  )}
                >
                  26
                </button>
              </sup>
            </em>
          </p>
          <p>From the War Scroll:</p>
          <blockquote>
            <span align="center">
              <em>
                “This is the day appointed by Him for the defeat and overthrow
                of the Prince of the kingdom of wickedness, and He will send
                eternal succour to the company of His redeemed by the might of
                the princely Angel of the kingdom of Michael. With everlasting
                light He will enlighten with joy [the children] of Israel; peace
                and blessing shall be with the company of God. He will raise up
                the kingdom of Michael in the midst of the gods, and the realm
                of Israel in the midst of all flesh. (1QM 17.5–9)”{" "}
                <sup>
                  <button
                    type="button"
                    onClick={toggleModal(
                      "https://books.google.com.ph/books?id=DYa8NLLO5RMC&pg=PT151&lpg=PT151&dq=%22This+is+the+day+appointed+by+Him+for+the+defeat+and+overthrow+of+the+Prince+of+the+kingdom+of+wickedness,+and+He+will+send+eternal+succour+to+the+company+of+His+redeemed+by+the+might+of+the+princely+Angel+of+the+kingdom+of+Michael%22&source=bl&ots=AWpUVwJYIM&sig=ACfU3U2v2VRxuS7KDyyNhsmbs9X9qofteQ&hl=en&sa=X&ved=2ahUKEwiIp6mv_o_9AhXvHbcAHZtTBG8Q6AF6BAgJEAM#v=onepage&q=%22This%20is%20the%20day%20appointed%20by%20Him%20for%20the%20defeat%20and%20overthrow%20of%20the%20Prince%20of%20the%20kingdom%20of%20wickedness%2C%20and%20He%20will%20send%20eternal%20succour%20to%20the%20company%20of%20His%20redeemed%20by%20the%20might%20of%20the%20princely%20Angel%20of%20the%20kingdom%20of%20Michael%22&f=false",
                      "1QM 17.5-9"
                    )}
                  >
                    27
                  </button>
                </sup>
              </em>
            </span>
          </blockquote>
          <blockquote>
            <span align="center">
              <em>
                And the Prince of Light Thou hast appointed from ancient times
                to come to our support; [all the sons of righteousness are in
                his hand], and all the spirits of truth are under his dominion.
                But Belial, the Angel of Malevolence, Thou hast created for the
                Pit; his [rule] is in Darkness and his purpose is to bring about
                wickedness and iniquity. All the spirits of his company, the
                Angels of Destruction, walk according to the precepts of
                Darkness; towards them is their [inclination] (1QM 13.10){" "}
                <sup>
                  <button
                    type="button"
                    onClick={toggleModal(
                      "https://books.google.com.ph/books?id=DYa8NLLO5RMC&pg=PT148&lpg=PT148&dq=%22And+the+Prince+of+Light+Thou+hast+appointed+from+ancient+times+to+come+to+our+support%22&source=bl&ots=AWpUVwLZOL&sig=ACfU3U1t2PJw3Nrn0833ZmjRVzFfCBKaPQ&hl=en&sa=X&ved=2ahUKEwir_vW0hpD9AhWlg1YBHRaXALQQ6AF6BAgGEAM#v=onepage&q=%22And%20the%20Prince%20of%20Light%20Thou%20hast%20appointed%20from%20ancient%20times%20to%20come%20to%20our%20support%22&f=false",
                      "1QM 13.10)"
                    )}
                  >
                    28
                  </button>
                </sup>
              </em>
            </span>
          </blockquote>
          <p>
            As you can see, not only Michael was mentioned here but also Belial.
            Belial is a demon/fallen angel mentioned in 2 Corinthians 6:15.
          </p>
          <blockquote>
            <span align="center">
              <em>
                “What harmony is there between Christ and Belial? Or what does a
                believer have in common with an unbeliever? 2 Cor. 6:15”
              </em>
            </span>
          </blockquote>
          <p>
            Could it be that perhaps the Jewish writers of the War Scroll are
            actually referring to the pre-incarnate Christ when they wrote this?
            If that is the case, then the Seventh-day Adventists and Jehovah’s
            Witnesses are correct that Jesus and Michael are indeed one and the
            same person. But before we come to any conclusion, we will look at
            the other references and hopefully we will be able to determine the
            correct answer.
          </p>
          <p>
            In another apocryphal book,{" "}
            <em>
              <strong>The Testament of Abraham</strong>
            </em>
            , Michael is regarded as the one who escorts the souls of the dead
            to the judgment seat of God and he also has a role in the judgment
            of the dead.{" "}
            <sup>
              <button
                type="button"
                onClick={toggleModal(
                  "https://www.newadvent.org/fathers/1007.htm"
                )}
              >
                29
              </button>
            </sup>
          </p>
          <p>
            Michael is also mentioned in another apocryphal book called{" "}
            <em>
              <strong>The Life of Adam and Eve</strong>{" "}
              <sup>
                <button
                  type="button"
                  onClick={toggleModal(
                    "http://www2.iath.virginia.edu/anderson/vita/english/vita.lat.html"
                  )}
                >
                  30
                </button>
              </sup>
            </em>
            . In this book, Michael was tasked with preventing Adam and Eve from
            accessing the tree of life in the Garden of Eden. Michael was also
            assigned by God to protect Adam and Eve after they were expelled
            from Paradise. Michael is also depicted as a mediator between God
            and humanity. He intercedes on behalf of Adam and Eve, pleading
            their cause before God and asking for their forgiveness.
          </p>
          <p>
            In this book, it is mentioned that the devil is angry with Adam
            because the Lord made all the angels to worship Adam because he was
            made in the image of God. Michael led in the worship of Adam but the
            devil refused. When Adam died, Michael instructed Seth to prepare
            Adam’s body for burial while he transported Adam’s soul to Paradise
            and he promised Seth that Adam’s soul would return to his body on
            the day of resurrection and he will live forever in the presence of
            God.
          </p>
          <p>
            An expanded account of the Nephilims that was mentioned in Genesis
            6:1-4 can also be found in the Book of Enoch. The angels called
            Watchers in the book took human wives and their union produced the
            Nephilims, a hybrid of human and angelic beings of great stature.
            The Watchers also taught the humans the art of warfare, astrology,
            the use of cosmetics and other arcane stuff. This caused great evil
            in the land that’s why God destroyed the evil inhabitants of the
            earth by flood. As for the Watchers, God sent Michael to bind the
            Watchers along with their leader named Samyaza/Shemihaza.
          </p>
          <blockquote>
            <span align="center">
              <em>
                And to Michael [the Most High] said, “Go, Michael, bind
                Shemihazah and the others with him, who have mated with the
                daughters of men, so that they were defiled by them in their
                uncleanness. And when their sons perish and they see the
                destruction of their beloved ones, bind them for seventy
                generations in the valleys of the earth, until the day of their
                judgment and consummation, until the everlasting judgment is
                consummated. (1 Enoch 10:11–12)
              </em>
            </span>
          </blockquote>
          <p>
            In another apocryphal book titled 3 Baruch, Michael is identified
            with traits that modern Christians would attribute to Christ.
          </p>
          <p>
            <strong>
              Michael is identified as the one who holds the keys of the kingdom
              of heaven.
            </strong>
          </p>
          <blockquote>
            <span align="center">
              <em>
                “And the angel took me and led me thence to a fifth heaven. And
                the gate was closed. And I said, Lord, is not this gate-way open
                that we may enter? And the angel said to me, We cannot enter
                until Michael comes, who holds the keys of the Kingdom of
                Heaven;” 3 Baruch 11:1,2
              </em>
            </span>
          </blockquote>
          <p>
            <strong>
              Michael is identified as the commander of the angels
            </strong>
          </p>
          <blockquote>
            <span align="center">
              <em>
                “And he said to me, Even now Michael, the commander of the
                angels, comes down to receive the prayers of men. And behold a
                voice came, Let the gates be opened. And they opened them” 3
                Baruch 11:4,5
              </em>
            </span>
          </blockquote>
          <p>
            <strong>Michael as the mediator between God and man</strong>
          </p>
          <blockquote>
            <span align="center">
              <em>
                “And in that very hour Michael departed, and the doors were
                closed. And there was a sound as thunder. And I asked the angel,
                What is the sound? And he said to me, “Michael is even now
                presenting the merits of men to God.” Baruch 14:1,2
              </em>
            </span>
          </blockquote>
          <p>
            Another reference to Michael that can be found in Jude 1:9 is
            believed by some, including Origen
            <sup>
              <button
                type="button"
                onClick={toggleModal(
                  "https://www.britannica.com/biography/Origen"
                )}
              >
                31
              </button>
            </sup>
            , to have come from another apocryphal book called the{" "}
            <em>
              <strong>Assumption of Moses</strong>
              <sup>
                <button
                  type="button"
                  onClick={toggleModal(
                    "http://www.pseudepigrapha.com/pseudepigrapha/assumptionofmoses.html",
                    "Assumption of Moses"
                  )}
                >
                  32
                </button>
              </sup>
            </em>{" "}
            a.k.a{" "}
            <em>
              <strong>Testament of Moses</strong>
            </em>
            . This book contains the supposedly last instructions of Moses to
            Joshua, his successor. But the dispute over the body of Moses&apos;
            account that is found in Jude is not found in surviving copies of
            this apocryphal book. Biblical scholars therefore think that perhaps
            some portions of the original manuscripts may have been lost or that
            the account was taken from other sources not found in any other
            Apocrypha. Which brings us to another source material for Jewish
            traditions, and that is the Talmud and the Midrash.
          </p>
          <h5>
            <strong>The Talmud</strong>
          </h5>
          <p align="center">
            <img
              src={Images.imgTalmud}
              alt="The Talmud"
              className="responsive"
            />
            <br />
            <strong>The Talmud</strong>
          </p>
          <p>
            “The Talmud is a collection of writings that covers the full gamut
            of Jewish law and tradition, compiled and edited between the third
            and sixth centuries.
            <sup>
              <button
                type="button"
                onClick={toggleModal(
                  "https://www.chabad.org/library/article_cdo/aid/3347866/jewish/What-Is-the-Talmud-Definition-and-Comprehensive-Guide.htm"
                )}
              >
                33
              </button>
            </sup>
            ”
          </p>
          <p>
            The Talmud is considered sacred by most Jews but is not on the same
            level of authority as the Scriptures. Michael is also referenced in
            the Talmud.
          </p>
          <p>
            In <strong>Talmud Bavli Sanhedrin 38b</strong>, Michael is described
            as one of the four &apos;angels of mercy&apos; who intercede on
            behalf of humanity in the heavenly court. The other three angels are
            Gabriel, Raphael, and Uriel.
          </p>
          <p>
            In <strong>Talmud Bavli Avodah Zarah 3b</strong>, Michael is
            depicted as one of the angels who accompanies God in his judgment of
            the nations. The text states that Michael speaks in defense of the
            people of Israel and presents their good deeds before God.
          </p>
          <h5>
            <strong>The Midrash</strong>
          </h5>
          <p align="center">
            <img
              src={Images.imgMidrash}
              alt="The Midrash"
              className="responsive"
            />
            <br />
            <strong>The Midrash</strong>
          </p>
          <p>
            The Midrash “is an interpretive act, seeking the answers to
            religious questions (both practical and theological) by plumbing the
            meaning of the words of the Torah.
            <sup>
              <button
                type="button"
                onClick={toggleModal(
                  "https://www.myjewishlearning.com/article/midrash-101/"
                )}
              >
                34
              </button>
            </sup>
            ”
          </p>
          <p>
            In other words, think of Midrash as Jewish commentaries that attempt
            to explain certain passages in Scripture or aims to solve apparent
            discrepancies or inconsistencies in Scriptures.
          </p>
          <p>The archangel Michael is also referenced in the Midrash.</p>
          <p>
            In{" "}
            <strong>
              <em>Midrash Rabbah Genesis 68:10</em>
            </strong>
            , Michael is identified as one of the angels who accompany God on
            his visits to Abraham. According to the text, Michael is tasked with
            announcing the good news of Sarah&apos;s impending pregnancy.
          </p>
          <p>
            In{" "}
            <strong>
              <em>Midrash Tanhuma Vayakhel 6</em>
            </strong>
            , Michael is portrayed as an advocate for the people of Israel in
            the heavenly court. The text states that Michael intercedes on
            behalf of Israel, reminding God of the people&apos;s merits and
            beseeching him to show them mercy.
          </p>
          <p>
            In{" "}
            <strong>
              <em>Midrash Tadshe 23</em>
            </strong>
            , Michael is depicted as the guardian of the Garden of Eden. The
            text states that Michael guards the garden with a flaming sword,
            preventing anyone from entering.
          </p>
          <h5>
            <strong>Angel Worship and the Cult of Michael</strong>
          </h5>
          <p align="center">
            <img
              src={Images.imgCultOfMichael}
              alt="Cult of Michael"
              className="responsive"
            />
            <br />
            <strong>Statue of Michael the Archangel</strong>
          </p>
          <p>
            Since Michael is an exalted figure in Judaism, Some groups within
            Judaism and even in Christianity{" "}
            <em>(Christianity started out as a Jewish sect)</em> have resorted
            to elevating Michael and other angels to divine status. That is why
            the apostle Paul warned in Colossians 2:18 about the worship of
            angels
          </p>
          <blockquote>
            <span align="center">
              <em>
                “Do not let anyone who delights in false humility and the
                worship of angels disqualify you. Such a person also goes into
                great detail about what they have seen; they are puffed up with
                idle notions by their unspiritual mind.” Col. 2:18
              </em>
            </span>
          </blockquote>
          <p>
            Rabbinic literature also prohibits the worship of Michael or any
            other angels because some Jews of that day have turned it into a
            practice.
          </p>
          <blockquote>
            <span align="center">
              <em>
                When distress comes upon a man, he should not cry out to either
                Michael or to Gabriel; instead, he should cry out to me, and I
                will answer him immediately. That is what is written: ‘Everyone
                who calls on the name of the Lord shall be saved’. (j. Berakhoth
                9:13)
              </em>
            </span>
          </blockquote>
          <p>
            The practice of calling on to Michael, Gabriel or any other angel
            for help in time of need is discouraged in Judaism but encouraged in
            Catholicism as we shall see later.
          </p>
          <p>
            These are just some of the references to Michael found in the
            Intertestamental Literature. While these are not considered as
            authoritative by Protestants, it gives us a glimpse of what the
            average Jew in Jesus’ day believes in.
          </p>
          <p>
            We don’t know for sure how the Jews got their traditions about
            Michael and the other traditions that are not found in the Bible.
            According to them, Moses gave them the Written Torah, that is the
            first five books of the Bible and then he also passed down orally
            the Oral Torah to Joshua and Joshua to the the elders and in turn
            they passed to their descendants in an unbroken chain down to the
            rabbis. The final codification of this oral law was finished in the
            3rd century AD and is called the Mishnah
            <sup>
              <button
                type="button"
                onClick={toggleModal("https://www.britannica.com/topic/Mishna")}
              >
                35
              </button>
            </sup>
            .
          </p>
          <p>
            This is authoritative for the Jews but for Christians, we do not
            recognize this as authoritative since we cannot ascertain which of
            these are transmitted from Moses or which are later additions or
            embellishment.
          </p>
          <p>
            Even Jesus said that Jews have traditions that they have inherited
            from their elders that are clearly of human origin
          </p>
          <blockquote>
            <span align="center">
              <em>
                “You have let go of the commands of God and are holding on to
                human traditions.” And he continued, “You have a fine way of
                setting aside the commands of God in order to observe your own
                traditions!” Mark 7:8-9
              </em>
            </span>
          </blockquote>
          <p>
            Clearly the Jews recognize that Michael is not just an ordinary
            angel, as we have seen, and that they have given to Michael some of
            the attributes that Christians have given to Jesus Christ. Perhaps
            Michael is all that to the nation of Israel, but Michael and his
            role for the nation of Israel is just a type for the role of Jesus
            to the whole world. I guess it’s no surprise that the Jews may have
            misattributed the role of Jesus to Michael because the Jews do not
            recognize Jesus as the Son of God or as the Messiah. The Bible says,
          </p>
          <blockquote>
            <span align="center">
              <em>
                “He was in the world, and though the world was made through him,
                the world did not recognize him.” John 1:10
              </em>
            </span>
          </blockquote>
          <p>
            But one thing is certain, the Jews do not believe that Jesus Christ
            and Michael the archangel are one and the same person. For them,
            Michael is the highest archangel and worthy of reverence while Jesus
            Christ is just a man claiming to be the Son of God and king of the
            Jews but was crucified for it.
          </p>
          <p>
            <strong>
              VERDICT: For the Jews, Jesus and Michael are not the same person.
            </strong>
          </p>
          <p>
            <em>
              <Link to="/articles/coming-soon">
                To be continued on part 3...
              </Link>
            </em>
          </p>
        </div>
      </div>
    </>
  );
}

export default ArticleMichaelPart2;
