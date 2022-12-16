// =============================================
var imgs = gsap.utils.toArray('#images img'),
    wrap = gsap.utils.wrap(imgs),
    count = imgs.length * 30,
    tl = gsap.timeline({
      scrollTrigger: {
        start: 0,
        end: "+=100000",
        pin: "#images",
        scrub: 0.2
      }
    }),
    i;

imgs.reverse();

for (i = 0; i < count; i++) {
  tl.to(wrap(i), {
    duration: 0,
    autoAlpha: 0,
    scale: 1
  }, "+=30");
  tl.to(wrap(i+1), {
    duration: 0,
    autoAlpha: 1,
    scale: 1
  }, "<");
}

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  start: 0,
  end: "max",
  onLeave: self => {
    self.scroll(1);
    ScrollTrigger.update();
  },
  onLeaveBack: self => {
    self.scroll(ScrollTrigger.maxScroll(window)-1);
    ScrollTrigger.update();
  }
});