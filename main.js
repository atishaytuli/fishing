function locoMotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    multiplier: 0.8,
    lerp: 0.05
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, { duration: 0 }) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.defaults({ scroller: "#main" });

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      locoScroll.update();
      ScrollTrigger.refresh();
    }, 150);
  });

  ScrollTrigger.refresh();
}

function moveCursor() {
  var page1Content = document.querySelector("#page1-1");
  var cursor = document.querySelector("#cursor");

  gsap.set(cursor, {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.clientX,
      y: dets.clientY,
      duration: 0.2,
      ease: "power1.out",
    });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

function menuToggle() {
  var menu = document.querySelector("nav h4");
  var fullScreen = document.querySelector(".menupagediv");

  let flag = 0;

  menu.addEventListener("click", function () {
    if (flag == 0) {
      fullScreen.style.top = 0;
      flag = 1;
      menu.textContent = "Close";
      menu.style.color = "#000";
      menutextAnimation();
    } else {
      fullScreen.style.top = "-100vh";
      flag = 0;
      menu.textContent = "Menu";
      menu.style.color = "#fff";
    }
  });

  fullScreen.style.top = "-100vh";
  menu.textContent = "Menu";
  menu.style.color = "#fff";
}

function menutextAnimation() {
  var inTime = gsap.timeline();
  inTime.from(".menuTop .mTopRight a", {
    opacity: 0,
    x: 500,
    stagger: 0.2,
  });
  inTime.from(".menubtm h3, .btmright a", {
    y: 100,
    stagger: 0.1,
  });
}

function page2ani() {
  gsap.from("#page2-2 h2", {
    y: 140,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",
      scrub: 2,
    }
  });

  gsap.from("#page2-1 .elem h4, #page2-1 .elem h3", {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.4,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 50%",
      end: "top 50%",
      scrub: 1,
    }
  });

  gsap.from("#page2-3 h2", {
    y: 30,
    opacity: 0,
    stagger: 0.3,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 10%",
      end: "top 0%",
      scrub: 2,
    },
  });
}

function gsapTimeline() {
  const tl = gsap.timeline();

  tl.from("#loader h3", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
  })

  tl.to("#loader h3", {
    opacity: 0,
    duration: 1,
  })

  tl.to("#loader", {
    opacity: 0,
  })

  tl.to("#loader", {
    display: "none"
  })

  tl.from("#page1-1 nav h3", {
    x: 40,
    delay: 0.2,
    opacity: 0,
  })

  tl.from("#page1-1 nav h4", {
    opacity: 0,
  })

  tl.from("#page1-1 h1 span", {
    y: 50,
    opacity: 0,
    delay: 0.2,
    y: 120,
    stagger: 0.05,
  })

  tl.to("#page1-1 h1 span:nth-child(5)", {
    rotate: 20,
    marginLeft: "1vw",
    marginRight: "2vw",
    duration: 0.8,
    ease: "power1.inOut"
  })
}

function page3Animation() {
  gsap.from("#page3-1 .box", {
    y: 150,
    duration: 1,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "top 70%",
      end: "top 30%",
      scrub: 1,
      markers: false
    },
  });
}

function page4Animation() {
  const page4Items = document.querySelectorAll("#page4-1 .page4-left h1, #page4-1 .page4-left p, #page4-1 .search-container, #page4-1 .spot-features");

  let hoveredItem = null;

  gsap.set("#page4-1", {
    opacity: 1,
    y: 0
  });
}

function page5Animation() {
  gsap.from("#page5 .circleText", {
    y: 320,
    stagger: 0.2,
    duration: 0.4,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      start: "top 56%",
      end: "top 54%",
      scrub: 3,
    },
  });
}

function swiperJS() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 15,
    speed: 10000,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
  });
}

function page5Bottom() {
  gsap.from(".page5Bottom h2, .page5Bottom h4", {
    y: 120,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".page5Bottom",
      scroller: "#main",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
}

function page6Animation() {
  gsap.from("#page6-2 h2", {
    y: 140,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",
      scrub: 2,
    }
  });

  gsap.from("#page6-1 .elem h4, #page6-1 .elem h3", {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.4,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      start: "top 50%",
      end: "top 50%",
      scrub: 1,
    }
  });

  gsap.from("#page6-3 h2", {
    y: 30,
    opacity: 0,
    stagger: 0.3,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      start: "top 10%",
      end: "top 0%",
      scrub: 2,
    }
  });
}

function page7Animation() {
  gsap.from(".equipment-category", {
    y: 150,
    duration: 1,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page7",
      scroller: "#main",
      start: "top 70%",
      end: "top 30%",
      scrub: 1,
      markers: false
    },
  });
}

function pageFooterAnimation() {
  gsap.from(".ftb h1 span", {
    y: -200,
    stagger: 0.1,
    duration: 1,
    delay: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".footerbottom",
      scroller: "#main",
      start: "top 60%",
      end: "top 54%",
      scrub: 3,
    },
  });
}

function init() {
  locoMotiveScroll();
  moveCursor();
  menuToggle();
  gsapTimeline();
  page2ani();
  page3Animation();
  page4Animation();
  page5Animation();
  swiperJS();
  page5Bottom();
  page6Animation();
  page7Animation();
  pageFooterAnimation();
}

window.addEventListener("load", init);


