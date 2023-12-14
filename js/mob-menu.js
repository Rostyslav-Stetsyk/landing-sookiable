const refs = {
  button: document.querySelector("#mob-menu"),
  menu: document.querySelector("#menu"),
  header: document.querySelector(".header.section"),
};

const openMobMenu = (e) => {
  if (e.currentTarget.ariaExpanded === "false") {
    refs.header.classList.add("js-open-menu");
    refs.menu.classList.remove("hidden-visually");
    e.currentTarget.ariaExpanded = true;
  } else {
    refs.header.classList.remove("js-open-menu");
    refs.menu.classList.add("hidden-visually");
    e.currentTarget.ariaExpanded = false;
  }
};

refs.button.addEventListener("click", openMobMenu);
