jQuery.fn.feriados = function () {
  var element = this;
  $.ajax({
    type: "GET",
    url: "https://www.feriadosapp.com/api/holidays.json",
    dataType: "json",
    success: function (datosApi) {
      console.log(datosApi);
      let endpoint = datosApi.data;
      endpoint.forEach(({ id, date, title, extra }) => {
        $(".myTable > tbody:last-child").append(`
              <tr>
                <td scope="col">${id}</td>
                <td scope="col">${date}</td>
                <td scope="col">${title}</td>
                <td scope="col">${extra}</td>
              </tr>
              `);
      });
      return this;
    },
  });
};
