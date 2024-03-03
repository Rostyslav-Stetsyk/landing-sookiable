import "./mob-menu.ts";
import "./animated.ts";
import "./materials.ts";
import "intl-tel-input/build/js/utils.js";

import intlTelInput from "intl-tel-input";

const input = document.querySelector("#phone") as HTMLElement;

intlTelInput(input, {
  initialCountry: "UA",
});
