function LimpiarErrores() {
  document.querySelector(".errorNumero").innerHTML = "";
  document.querySelector("#numeroIngresado").innerHTML = "";
}

function exito() {
  document.querySelector("#numeroIngresado").innerHTML =
    alert("Número enviado con éxito!!!");
}

function validar(numero) {
  let pasamoslaValidacion = true;
  let validacionNumero =  /\d/gim;

  if (validacionNumero.test(numero) == false) {
    document.querySelector(".errorNumero").innerHTML = "";
      alert("Ingrese un numero válido");
    pasamoslaValidacion = false;
  }
  return pasamoslaValidacion;
}

$(document).ready(function(){
    $("button").on("click", function(){
        var numero = $('#numeroIngresado').val();                                            
        validar(numero)   
    
    $.ajax({
        type: "GET",
        url: "https://superheroapi.com/api.php/10224382433362957/" + [numero] ,
        dataType: "json",
        success: function (datosApi){
            $('#nombreSuperheroe').text(`Nombre :  ${datosApi.name}`);
            $('#conexiones').text(`Conexiones :  ${datosApi.connections['group-affiliation']}`);
            $('#publicado').text(`Publicado Por :  ${datosApi.biography.publisher}`);
            $('#primeraAparicion').text(`Primera Aparicion : ${datosApi.biography['first-appearance']}`);
            $('#altura').text(`Altura : ${datosApi.appearance['height']} `);
            $('#peso').text(`Peso : ${datosApi.appearance['weight']} `);
            $('#alianzas').text(`Alianzas : ${datosApi.biography.aliases}`);
            $("#imagenHero").attr("src", `${datosApi.image.url}`);
        },
        error: function (error) {
            console.log(error);
        },       
    });    
  });
});

// window.onload = function () {

//     var options = {
//         title: {
//             text: "Estadisticas de Poder Para "
//         },
//         data: [{
//             Nombre: "pie",
//             startAngle: 45,
//             showInLegend: "true",
//             legendText: "{label}",
//             indexLabel: "{label} ({y})",
//             yValueFormatString: "#,##0.#" % "",
//             dataPoints: [
//                 { label: "Inteligencia", y: 36 },
//                 { label: "Fuerza", y: 31 },
//                 { label: "Velocidad", y: 7 },
//                 { label: "Duravilidad", y: 7 },
//                 { label: "Poder", y: 6 },
//                 { label: "Combate", y: 10 },
//             ]
//         }]
//     };
//     $("#chartContainer").CanvasJSChart(options)
// =======
// let formulario = document.getElementById("chartContainer");


// function LimpiarErrores() {
//   document.querySelector(".errorNumero").innerHTML = "";
//   document.querySelector(".resultado").innerHTML = "";
// }

// function exito() {
//   document.querySelector(".resultado").innerHTML =
//     "Número enviado con éxito!!!";
// }

// function validar(numero) {
//   let pasamoslaValidacion = true;
//   let validacionNumero =  /\d/gim;

//   if (validacionNumero.test(numero) == false) {
//     document.querySelector(".errorNumero").innerHTML =
//       alert("Ingrese un numero válido");
//     pasamoslaValidacion = false;
//   }
//   return pasamoslaValidacion;
// }

// $(document).ready(function(){

//     $("botton").on("click", function(){

//     })
//     $.ajax({
//         type: "GET",
//         url: "https://superheroapi.com/api.php/10224382433362957/",
//         dataType: "json",
//         success: function (datosApi){
//             datosApi.id.forEach((u) => {
//             $("#resultado").append(`
//             <p>${u.id} - ${u.name}<p>
//             `)    
//             });
//         },
//         error: function (error) {
//             console.log(error);
//         },
//     });
// });

// window.onload = function () {

//     var options = {
//         title: {
//             text: "Estadisticas de Poder Para "
//         },
//         data: [{
//             Nombre: "pie",
//             startAngle: 45,
//             showInLegend: "true",
//             legendText: "{label}",
//             indexLabel: "{label} ({y})",
//             yValueFormatString: "#,##0.#" % "",
//             dataPoints: [
//                 { label: "Inteligencia", y: 36 },
//                 { label: "Fuerza", y: 31 },
//                 { label: "Velocidad", y: 7 },
//                 { label: "Duravilidad", y: 7 },
//                 { label: "Poder", y: 6 },
//                 { label: "Combate", y: 10 },
//             ]
//         }]
//     };
//     $("#chartContainer").CanvasJSChart(options);

// }
// >>>>>>> 235cc2439ef9048e6d82a830328d912478dab5ae
