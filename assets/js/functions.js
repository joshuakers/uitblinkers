$(function () {


// Mobile nav toggle

$(".mobileNavToggle").on("click", function () {
  $(".mobileNav").toggleClass("is-open");
  $(".mobileNavToggle").toggleClass("is-open");

});

$(".mobileNav").find('li').on("click", function () {
  $(".mobileNav").toggleClass("is-open");
  $(".mobileNavToggle").toggleClass("is-open");
});

// Pillar Card Show

$(".pijler").on("click", function() { 
  var position = $(this).parent().children().index($(this));
  
  $(".pijler-card").eq(position).toggleClass("is-open").siblings().removeClass("is-open");
  $(this).toggleClass("active").siblings().removeClass("active");
});

/*
$(".pijler-1").on("click", function () {
  $(".pijler-card-1").toggleClass("is-open")
  .siblings().removeClass("is-open");
});
$(".pijler-2").on("click", function () {
  $(".pijler-card-2").toggleClass("is-open")
  .siblings().removeClass("is-open");
});
$(".pijler-3").on("click", function () {
  $(".pijler-card-3").toggleClass("is-open")
  .siblings().removeClass("is-open");
});
$(".pijler-4").on("click", function () {
  $(".pijler-card-4").toggleClass("is-open")
  .siblings().removeClass("is-open");  
}); */

 
// Coaches Text Expand

$(".coach-card").on("click", function () {
  $(this).toggleClass("expanded");
});

  // custom cursor
  // const cursor = document.querySelector('.cursor');
  // window.onmousemove = (e) => {
  //   cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px; z-index: 999;`)
  // }

// Smooth Scrolling:

$(".scroll").on("click", function (event) {
  event.preventDefault();
  $('body,html').animate( {
    scrollTop: $(this.hash).offset().top
  }, 800 ) 

});

// let menuToggle appear on scroll

  const navbar = document.querySelector(".navbar");
  const hero = document.querySelector(".hero-container");
  const navToggle = document.querySelector(".mobileNavToggle")

  const sectionOneOptions = {
    rootMargin: "-100px 0px 0px 0px"
  };

  const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navbar.classList.add("minify");
        navToggle.classList.add("minify");

      } else {
        navbar.classList.remove("minify");
        navToggle.classList.remove("minify");
      }
    });
  },
    sectionOneOptions);

  sectionOneObserver.observe(hero);

/* 

// Pijlers Intersection Observer

//const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 1,
  rootMargin: "-20px 500px -20px 500px"
};

 Remove 'appear' class from pijlers in pijlers.html before use.

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log(entry.target, entry.isIntersecting);
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
  appearOptions);


sliders.forEach(slider => {
  appearOnScroll.observe(slider);
}); */

});