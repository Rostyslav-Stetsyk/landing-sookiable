const refs = {
  button: document.querySelector("#mob-menu") as HTMLElement,
  header: document.querySelector(".header.section") as HTMLElement,
  navLinks: document.querySelectorAll(".nav-link") as NodeListOf<HTMLElement>,
};

const openMobMenu = (e: MouseEvent): void => {
  const target = e.currentTarget as HTMLElement;
  if (window.matchMedia("(min-width: 1024px)").matches) return;

  if (target.ariaExpanded === "false") {
    refs.header.classList.add("js-open-menu");
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    target.ariaExpanded = "true";
  } else {
    refs.header.classList.remove("js-open-menu");
    document.body.style.overflow = "auto";
    refs.button.ariaExpanded = "false";
  }
};

window
  .matchMedia("(min-width: 1024px)")
  .addEventListener("change", (e): void => {
    if (!e.matches) return;

    refs.header.classList.remove("js-open-menu");
    document.body.style.overflow = "auto";
    refs.button.ariaExpanded = "false";
  });

refs.button.addEventListener("click", openMobMenu);

refs.navLinks.forEach((el) => {
  el.addEventListener("click", openMobMenu);
});
