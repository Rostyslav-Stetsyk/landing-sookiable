!function(){let e={button:document.querySelector("#mob-menu"),menu:document.querySelector("#menu"),header:document.querySelector(".header.section")};e.button.addEventListener("click",t=>{"false"===t.currentTarget.ariaExpanded?(e.header.classList.add("js-open-menu"),e.menu.classList.remove("hidden-visually"),t.currentTarget.ariaExpanded=!0):(e.header.classList.remove("js-open-menu"),e.menu.classList.add("hidden-visually"),t.currentTarget.ariaExpanded=!1)});let t=document.querySelectorAll(".js-logo");setTimeout(()=>t.forEach(e=>e.classList.add("animated")),1e3)}();
//# sourceMappingURL=index.d30dfbf2.js.map
