import $ from "jquery";

function preventLoad(e) {
  var valores = document.getElementById("#formulario").val();
  console.log(valores);
  e.preventDefault();
}

export default preventLoad;

// $(".input-text").on("blur", function () {
//   var inputVal = $(this).val();
//   var inputID = $(this).attr("id");
//   console.log(inputID);
//   console.log(inputVal);

//   if (inputVal != null || undefined) {
//     $("#" + inputID).addClass("input-text-focus");
//   } else {
//     $("#" + inputID).removeClass("input-text-focus");
//   }
// });
