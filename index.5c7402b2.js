const e={button:document.querySelector("#mob-menu"),header:document.querySelector(".header.section")};window.matchMedia("(min-width: 1024px)").addEventListener("change",t=>{t.matches&&(e.header.classList.remove("js-open-menu"),document.body.style.overflow="auto",t.currentTarget.ariaExpanded=!1)}),e.button.addEventListener("click",t=>{"false"===t.currentTarget.ariaExpanded?(e.header.classList.add("js-open-menu"),document.body.style.overflow="hidden",t.currentTarget.ariaExpanded=!0):(e.header.classList.remove("js-open-menu"),document.body.style.overflow="auto",t.currentTarget.ariaExpanded=!1)});const t=document.querySelectorAll(".js-logo");setTimeout(()=>t.forEach(e=>e.classList.add("animated")),1e3);
//# sourceMappingURL=index.5c7402b2.js.map
