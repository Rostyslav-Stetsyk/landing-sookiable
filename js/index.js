const refs = {
  logo: document.querySelectorAll(".logo"),
  button: document.querySelector(".button"),
  laterC: document.querySelector(".later-c"),
};

setTimeout(() => refs.logo.forEach((el) => el.classList.add("animated")), 1000);
