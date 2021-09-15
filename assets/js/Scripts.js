
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
            let poderes = datosApi.powerstats;   

              var chart = new CanvasJS.Chart("chartContainer", {
                theme: "light2", // "light1", "light2", "dark1", "dark2"
                exportEnabled: true,
                animationEnabled: true,
                title: {
                  text: `Estadísticas de poder Para ${datosApi.name}`
                },
                data: [{
                  type: "pie",
                  startAngle: 25,
                  toolTipContent: "<b>{label}</b>: {y}%",
                  showInLegend: "true",
                  legendText: "{label}",
                  indexLabelFontSize: 16,
                  indexLabel: "{label} - {y}%",
                  dataPoints: [
                    { y: `${poderes.combat}`, label: "Combate" },
                    { y: `${poderes.durability}`, label: "Durabilidad" },
                    { y: `${poderes.intelligence}`, label: "Inteligencia" },
                    { y: `${poderes.power}`, label: "Poder" },
                    { y: `${poderes.speed}`, label: "Velocidad" },
                    { y: `${poderes.strength}`, label: "Fuerza" },
                  ]
                }]
              });
              chart.render();
                      
            },
            error: function(error){
              console.log(error);
          }
        });
    }); 
})