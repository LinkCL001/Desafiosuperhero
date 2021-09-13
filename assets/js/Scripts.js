let formulario = document.getElementById("chartContainer");


function LimpiarErrores() {
  document.querySelector(".errorNumero").innerHTML = "";
  document.querySelector(".resultado").innerHTML = "";
}

function exito() {
  document.querySelector(".resultado").innerHTML =
    "Número enviado con éxito!!!";
}

function validar(numero) {
  let pasamoslaValidacion = true;
  let validacionNumero =  /\d/gim;

  if (validacionNumero.test(numero) == false) {
    document.querySelector(".errorNumero").innerHTML =
      alert("Ingrese un numero válido");
    pasamoslaValidacion = false;
  }
  return pasamoslaValidacion;
}

$(document).ready(function(){

    $("botton").on("click", function(){

    })
    $.ajax({
        type: "GET",
        url: "https://superheroapi.com/api.php/10224382433362957/",
        dataType: "json",
        success: function (datosApi){
            datosApi.id.forEach((u) => {
            $("#resultado").append(`
            <p>${u.id} - ${u.name}<p>
            `)    
            });
        },
        error: function (error) {
            console.log(error);
        },
    });
});

window.onload = function () {

    var options = {
        title: {
            text: "Estadisticas de Poder Para "
        },
        data: [{
            Nombre: "pie",
            startAngle: 45,
            showInLegend: "true",
            legendText: "{label}",
            indexLabel: "{label} ({y})",
            yValueFormatString: "#,##0.#" % "",
            dataPoints: [
                { label: "Inteligencia", y: 36 },
                { label: "Fuerza", y: 31 },
                { label: "Velocidad", y: 7 },
                { label: "Duravilidad", y: 7 },
                { label: "Poder", y: 6 },
                { label: "Combate", y: 10 },
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);

}