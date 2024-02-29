import data from "../data/learning-app.json";

interface dataEl {
  id: number;
  linkLogo: string;
  linkApp: string;
  describe: string;
}

const appList = document.querySelector(".js-learning-app") as HTMLElement;
console.log(data);

const getMarkupElement = ({ id, linkLogo, linkApp, describe }: dataEl) =>
  `<li data-id="${id}">
    <a href="${linkApp}" target="_blank" rel="noreferrer noopener">
        <img src="${linkLogo}" alt="${describe}" height="44px"/>
    </a>
  </li>`;

const murkup = data.map(getMarkupElement).join("\n");

appList.innerHTML = murkup + murkup;
