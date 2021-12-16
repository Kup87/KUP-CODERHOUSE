const graphVO2MAX = document.getElementById("graphVO2MAX").getContext("2d");
//let v1 = parseFloat(prompt("")); //Formas de pedir los datos

const labels = [
    "mes 1",
    "mes 2",
    "mes 3",
    "mes 4",
    "mes 5",
    "mes 6",
];

const dataVO2MAX = {
    labels,
    datasets: [{
        data: [35.5, 36.4, 37.3, 38, 38.1, 40.1 /*, v1 */], //Los datos a mostrar
        label: "Progreso VO2 Máx", //El nombre del gráfico
        fill: true,
        //backgroundColor: ,
        borderColor: "#fff",
        pointBackgroundColor:"#000", //Color de las bolitas
        tension: .2, //Le da un redondeo al gráfico. Va de 0 a 1

    }]
};

const configVO2MAX = {
    type: "line",
    data: dataVO2MAX,
    options: {
        radius: 5, //Tamaño de las bolitas
        hitRadius: 30,
        hoverRadius: 12, //::hover Transformación
        responsive: true,
        
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return "VO2 Máx" + value //Agrego lo que necesite en los valores en X (no funciona desde Data)
                    }
                }
            },
        }
    }
}

const myChartVO2Máx = new Chart (graphVO2MAX, configVO2MAX);
///////////////////////////////////////////////////////////////

const graphKgBcoPlano = document.getElementById("graphKgBcoPlano").getContext("2d");
//let v1 = parseFloat(prompt("")); //Formas de pedir los datos

const dataKgBcoPlano = {
    labels,
    datasets: [{
        data: [90, 92, 95, 97.5, 97.5, 100], //Los datos a mostrar
        label: "Progreso Bco Plano", //El nombre del gráfico
        fill: true,
        //backgroundColor: ,
        borderColor: "#fff",
        pointBackgroundColor:"#000", //Color de las bolitas
        tension: .2, //Le da un redondeo al gráfico. Va de 0 a 1

    }]
};

const configKgBcoPlano = {
    type: "line",
    data: dataKgBcoPlano,
    options: {
        radius: 5, //Tamaño de las bolitas
        hitRadius: 30,
        hoverRadius: 12, //::hover Transformación
        responsive: true,
        
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return value + "Kg"//Agrego lo que necesite en los valores en X (no funciona desde Data)
                    }
                }
            },
        }
    }
}

const myChartKgBcoPlano = new Chart (graphKgBcoPlano, configKgBcoPlano);

