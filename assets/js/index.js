"use strict";

$(document).ready(function () {
  $("button").on("click", function () {
    $(".myTable").feriados();
  });
});

$(document).ready(function () {
  //parpadean los elementos de class CSS "parpadear"
  $("h4").parpadea();
  //añado evento click para un botón. Al pulsar parpadearán los    elementos de clase parpadear
  $("#botonparpadear").click(function () {
    $(".parpadear").parpadea();
  });
});
