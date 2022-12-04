/* eslint-disable */
import Images from "../../assets/images";
function About() {
  return (
    <div id="about">
      <div className="body-content">
        <h1 className="title">About</h1>
        <p>
          Do you remember a day when you did not sin one bit? If you do, then
          good for you. I could barely make it to a few hours before I knew I'd
          done something wrong that could be considered as sinful. It kind of
          reminds me of the sign that’s posted on factories indicating the last
          time they had an accident. When everything is going well, sometimes
          the counter could go on for a number of days without any incident, and
          it creates a good feeling for everyone working there. But there are
          also days when anything that could go wrong would go wrong and the
          counter would reset to zero. And the cycle begins again, until the
          next accident happens.
        </p>
        <p align="center">
          <img
            src={Images.imgSafetyFirst}
            alt="0 days since last sinned!"
            className="responsive"
          />
        </p>

        <p>
          That is how I feel about my Christian life. I try to avoid committing
          sin but more often than not, the more I try to avoid sin, the more I
          fall into sin. The Apostle Paul penned it so accurately:
        </p>
        <blockquote>
          <p align="center">
            <em>
              I do not understand what I do. For what I want to do I do not do,
              but what I hate I do. <sup>16</sup>And if I do what I do not want
              to do, I agree that the law is good. <sup>17</sup>As it is, it is
              no longer I myself who do it, but it is sin living in me.{" "}
              <sup>18</sup>For I know that good itself does not dwell in me,
              that is, in my sinful nature. For I have the desire to do what is
              good, but I cannot carry it out. <sup>19</sup>For I do not do the
              good I want to do, but the evil I do not want to do—this I keep on
              doing. <sup>20</sup>Now if I do what I do not want to do, it is no
              longer I who do it, but it is sin living in me that does it.
              Romans 7:15-20
            </em>
          </p>
        </blockquote>
        <p>You’re probably thinking one of the following things:</p>
        <p>
          <ol>
            <li>
              If you’re a Christian who believes in eternal security, you’re
              probably thinking “You shouldn’t trouble yourself about this
              because there is nothing on earth or heaven that can take away
              your salvation.
            </li>
            <li>
              Or If you’re a Christian who believes in conditional security, you
              might say “why worry about sinning when you have already been
              saved by grace through faith and that the Holy Spirit is at work
              in you so you would produce the fruit of the Spirit”
            </li>
            <li>
              Or if you’re an atheist, you might probably be thinking, “What
              sin? As long as you obey the laws of your country, treat others
              with respect, and be mindful of another’s preferred pronouns -
              basically don’t be a jerk, that’s it.{" "}
            </li>
            <li>
              <em>
                You’re probably thinking about something else that I don’t know
                about but it’s ok because it’s not one of my points.{" "}
              </em>
            </li>
          </ol>
        </p>
        <p>
          Why struggle as a Christian? Struggling is hard. Struggling is not
          fun. Struggling is inconvenient. In this day and age where convenience
          is expected, it would be easier to not struggle. It would be easier if
          you could just be your natural self and conform to the world's
          standards and be one with the world.
        </p>
        <p>
          Struggling is hard. Struggling is not fun. Struggling is inconvenient.
          Why struggle when you can go with the flow? In this day and age, it's
          easy to just give up, be your natural self and be one with the world.
          But as Christians, we were called by God to a higher standard. We are
          in this world, but we are not of the world.
        </p>
        <p>
          We are called by God to love the people of the world, but we are not
          to love the world and it's false belief systems that are in conflict
          with God. It would be easier to be politically correct all the time
          and not step on anybody's toes and hope we can all get along and love
          each other and live in peace but the reality is this is extremely
          hard, if not impossible.
        </p>
        <p>
          After all, Jesus himself said that He did not come to bring peace but
          a sword.
        </p>
      </div>
    </div>
  );
}

export default About;
