window.onload = function() {

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
                yValueFormatString:"#,##0.#"%"",
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