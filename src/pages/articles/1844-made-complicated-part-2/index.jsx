import Images from "../../../assets/images";

function Article1844Part2() {
  return (
    <div id="articles">
      <div className="title">1844 Made Complicated (Part 2) </div>
      <div className="body-content">
        <h2>Evolution of the 1844 doctrine</h2>
        <p>
          The 1844 doctrine or Sanctuary doctrine of the Seventh-day Adventists
          underwent several iterations from the time of Miller before reaching
          its final form as Seventh-day Adventists know it today. Let’s now take
          a quick look at the evolution of this unique doctrine of Seventh-day
          Adventists.
        </p>
        <p>
          Having been born and raised as a Seventh-day Adventist, I have heard
          about the 1844 doctrine but I had very little knowledge about it.
          Sometimes I hear 1844 being mentioned in sermons and in evangelical
          crusades that I had attended growing up.
        </p>
        <p>
          Although I had no deep understanding of this doctrine yet, by seeing
          the charts and hearing the explanations, my young mind at that time
          was convinced that this doctrine was correct, although I don’t fully
          understand it. It’s like seeing a math professor solve a complex
          equation and in a few minutes time, the whole whiteboard was filled
          with the numbers and symbols until arriving at the correct solution.
          That’s how I felt when I saw the charts, the symbols, the graphics.
          Like smoke and mirrors in a magic show, I was mesmerized.
        </p>
        <p align="center">
          <br />
          <img
            src={Images.img1844ComplicatedEquation}
            alt="1844 Complicated equation"
            className="responsive"
          />
          <br />
          <strong>
            <em>How I saw the 1844 doctrine as a kid</em>
          </strong>
        </p>
        <p align="center">
          <img
            src={Images.img1844SDAChart}
            alt="How SDAs see 1844"
            className="responsive"
          />
          <br />
          <strong>
            <em>How SDAs see the 1844 doctrine</em>
          </strong>
        </p>
        <p align="center">
          <img
            src={Images.img1844EquationWrong}
            alt="1844 Wrong equation"
            className="responsive"
          />
          <br />
          <strong>
            <em>How the 1844 doctrine really is</em>
          </strong>
        </p>
      </div>
    </div>
  );
}

export default Article1844Part2;
