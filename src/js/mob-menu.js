const refs = {
  button: document.querySelector("#mob-menu"),
  header: document.querySelector(".header.section"),
};

const openMobMenu = (e) => {
  if (e.currentTarget.ariaExpanded === "false") {
    refs.header.classList.add("js-open-menu");
    document.body.style.overflow = "hidden";

    e.currentTarget.ariaExpanded = true;
  } else {
    refs.header.classList.remove("js-open-menu");
    document.body.style.overflow = "auto";

    e.currentTarget.ariaExpanded = false;
  }
};

window.matchMedia("(min-width: 1024px)").addEventListener("change", (e) => {
  if (!e.matches) {
    return;
  }
  refs.header.classList.remove("js-open-menu");
  document.body.style.overflow = "auto";

  e.currentTarget.ariaExpanded = false;
});

refs.button.addEventListener("click", openMobMenu);
