window.addEventListener("DOMContentLoaded", (event) => {
  /* Ajout ou suppression de classe css en fonction du scroll vertical */
  // changement de couleur à n scrollY sur le header
  const navigation = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 160) {
      navigation.classList.add("anime-nav");
    } else {
      navigation.classList.remove("anime-nav");
    }
  });

  // changement de couleur à n scrollY sur un Id du ul de la navigation
  const colorUl = document.getElementById("switch-ulcolor");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 160) {
      colorUl.classList.add("colorUl");
    } else {
      colorUl.classList.remove("colorUl");
    }
  });
  /* FIN Ajout ou suppression de classe css en fonction du scroll vertical */

  /* ACTION M.BURGER */
  $(document).ready(function () {
    $(".burger").click(function () {
      $(".burger").toggleClass("active");
      $(".menu").slideToggle();
    });
  });
  /* FIN ACTION M.BURGER */

  /* APPARITION DE DIV */
  //Element visible à l'intersection du bas de page
  const ratio = 0.5;
  const options = {
    root: null, //detecter quand l'element est visible dans l'écran
    rootMargin: "0px", // doit dépasser (x)px de marge pour être visible
    threshold: ratio /* à quel moement le système d'intersection est détecté 
    100% s'écrit 1.0 => l'entièreter de l'élément doit être visible pour que l'intersection observer fonctionne. 
    10% => s'écrit .1 */,
  };

  const callback = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.add("element-show");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(
    callback /*fonction qui sera executer lorsque l'élément deviendra visible ou sera masqué de la zone*/,
    options
  );
  document
    .querySelectorAll(".element-hide, .element-hide-left, .element-hide-right")
    .forEach(function (r) {
      observer.observe(r);
    });
  /* FIN APPARITION DE DIV */

  /* BOUTON BACK TOP */
  mybutton = document.getElementById("myBtn");

  // Scroll en bas de x pixels => montre le bouton
  window.onscroll = function () {
    scrollFunction();
  };

  // config option du bouton (show / hide)
  function scrollFunction() {
    if (
      document.body.scrollTop > 120 ||
      document.documentElement.scrollTop > 120
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // Click bouton = active back top
  myBtn.addEventListener("click", () => {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
  });
  /* FIN BOUTON BACK TOP */

  /* ECRIT TEXTE AUTO */
  const textElement = document.getElementById("text");
  const speedElement = document.getElementById("speed");
  const text =
    "Bonjour ! Je m'appelle Benjamin EPS, \n je suis développeur web ";
  let index = 1;
  let speed = 300 / 4;
  let nbTextDisplayed = 0;

  const writeText = () => {
    if (nbTextDisplayed === 0) {
      textElement.innerText = text.slice(0, index);
      index++;
      if (index > text.length) index = 1;
      setTimeout(writeText, speed);
      if (index === 63) {
        nbTextDisplayed = 1;
      }
      console.log(text.length);
      console.log(index);
    }
  };

  writeText();
  /* FIN ECRIT TEXTE AUTO */

  /* CAROUSSEL */
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
      481: {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
  });
  /* FIN CAROUSSEL */
});
