import anime from "animejs/lib/anime.es.js";

function DecoLines() {

  const animation = anime({
    targets: "#line path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 300,
    autoplay: false,
  });

  const animation2 = anime({
    targets: "#line2 path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 300,
    autoplay: false,
  });

  const section2 = document.querySelector(".section1");

  // Animate on scroll
  const animateOnScroll = function (div, speed = 100, offset = 0) {
    const scrollPercent = window.pageYOffset - div.offsetTop;
    return (scrollPercent + offset) / speed;
  };

  // Scroll listener
  window.onscroll = function () {
    animation.seek(animateOnScroll(section2, 1000, 200) * animation.duration);
    animation2.seek(animateOnScroll(section2, 1000, 200) * animation.duration);
  };


  return (
    <div className="App">
      <section className="section1"></section>
      <section className="section2">
        <svg id="line2"
          width="1440"
          height="257"
          viewBox="0 0 1440 257"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-62.6849 245.637C110.212 297.504 608.949 80.1284 858.754 24.3733C1108.56 -31.3818 1541.79 44.864 1541.79 44.864"
            stroke="#FAAF3D"
            stroke-width="6"
          />
        </svg>

        <svg
          id="line"
          width="1440"
          height="315"
          viewBox="0 0 1440 315"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <path
            d="M1650.87 283.158C1162.08 393.543 883.218 151.301 618.725 60.3703C354.231 -30.5604 -387.944 0.240273 -270.502 58.79"
            stroke="#00B7B4"
            stroke-width="6"
          />
        </svg>
      </section>

      <section className="section3"></section>
    </div>
  );
}

export default DecoLines;
