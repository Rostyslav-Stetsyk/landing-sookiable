const refs = {
  button: document.querySelector("#mob-menu"),
  header: document.querySelector(".header.section"),
};

const openMobMenu = (e: MouseEvent): void => {
  const target = e.currentTarget as HTMLElement;
  if (!target || !refs.header) return;

  if (target.ariaExpanded === "false") {
    refs.header.classList.add("js-open-menu");
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    target.ariaExpanded = "true";
  } else {
    refs.header.classList.remove("js-open-menu");
    document.body.style.overflow = "auto";

    target.ariaExpanded = "false";
  }
};

window
  .matchMedia("(min-width: 1024px)")
  .addEventListener("change", (e): void => {
    if (!e.matches || !refs.header || !refs.button) return;

    refs.header.classList.remove("js-open-menu");
    document.body.style.overflow = "auto";

    refs.button.ariaExpanded = "false";
  });

(refs.button as HTMLElement).addEventListener("click", openMobMenu);
