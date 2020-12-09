const react = require("react");

import $ from "jquery";

function inputBlur() {
  let inputVal = $("#input-character-flat-atk").val();
  if (inputVal !== "") {
    $("#label-character-flat-atk").css({
      transform: "translateY(-15px)",
      "font-size": "13px",
    });
  } else {
    $("#label-character-flat-atk").css({
      transform: "translateY(0px)",
      "font-size": "16px",
    });
  }
}

function inputFocus() {
  let inputVal = $("#input-character-flat-atk").val();
  if (inputVal == "") {
    $("#label-character-flat-atk").css({ transform: "", "font-size": "" });
  }
}

export { inputBlur, inputFocus };
