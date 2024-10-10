let delSections = document.querySelectorAll(".delayed-section");

delSections.forEach((section) => {
  let imageAnim = gsap.to(section.querySelector("img"), {
    y: "-100vh",
    ease: "none",
    paused: true,
  });

  let progressTo = gsap.quickTo(imageAnim, "progress", {
    ease: "power3",
    duration: parseFloat(section.dataset.scrub) || 0.1,
  });

  gsap.to(section.querySelector(".innerContainer"), {
    y: "100vh",
    ease: "none",
    scrollTrigger: {
      scrub: true,
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => progressTo(self.progress),
    },
  });
});

// 💚 This just adds the GSAP link to this pen, don't copy this bit
import { GSAPInfoBar } from "https://codepen.io/GreenSock/pen/vYqpyLg.js";
new GSAPInfoBar({ link: "https://gsap.com/docs/v3/Plugins/ScrollTrigger/" });
// 💚 Happy tweening!
