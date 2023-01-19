const humanNames = require('human-names');

const elem = document.getElementById('foo');
const tasks = document.getElementById('myTasks');
const cities = document.getElementById('myCities');
const name = document.getElementById('name');


const dataTasks = {
    labels: [
        'Rome',
        'Paris',
        'Berlin',
        'London',
        'Barcelona',
    ],
    datasets: [{
    label: 'Европейские столицы для туризма в 3000году',
    data: [3, 2, 1, 1, 3],
    backgroundColor: [
        'rgb(234, 190, 198)',
        'rgb(236, 209, 137)',
        'rgb(127, 213, 209)',
        'rgb(126, 149, 192)',
        'rgb(164, 119, 124)'
    ],
    hoverOffset: 4
    }],
    options: {
        responsive: false,
        maintainAspectRatio: true,
        showScale: false,
    }
};

new Chart (tasks, {
    type: 'doughnut',
    data: dataTasks,
});

let jsonCities = `[
    { "city": "Rome", "count": 32 },
    { "city": "Paris", "count": 28 },
    { "city": "Berlin", "count": 25 },
    { "city": "London", "count": 22 },
    { "city": "Barcelona", "count": 34 }
]`

const dataCities = JSON.parse(jsonCities);
new Chart(cities, {
    type: 'bar',
    data: {
        labels: dataCities.map(row => row.city),
        datasets: [
        {
            label: 'Температору летом в европейский столицах',
            data: dataCities.map(row => row.count)
        }
        ]
    }
    }
);

const datepicker = new Datepicker(elem); 

button.addEventListener('click', () => {
    
    let result = humanNames.femaleRandom()
    name.innerHTML = result + " является одно из самых популярных имен в мире"
    
})






  // var densityData = {
//   label: 'Density of Planets (kg/m3)',
//   data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
//   backgroundColor: [
//     'rgba(0, 99, 132, 0.6)',
//     'rgba(30, 99, 132, 0.6)',
//     'rgba(60, 99, 132, 0.6)',
//     'rgba(90, 99, 132, 0.6)',
//     'rgba(120, 99, 132, 0.6)',
//     'rgba(150, 99, 132, 0.6)',
//     'rgba(180, 99, 132, 0.6)',
//     'rgba(210, 99, 132, 0.6)',
//     'rgba(240, 99, 132, 0.6)'
//   ],
//   borderColor: [
//     'rgba(0, 99, 132, 1)',
//     'rgba(30, 99, 132, 1)',
//     'rgba(60, 99, 132, 1)',
//     'rgba(90, 99, 132, 1)',
//     'rgba(120, 99, 132, 1)',
//     'rgba(150, 99, 132, 1)',
//     'rgba(180, 99, 132, 1)',
//     'rgba(210, 99, 132, 1)',
//     'rgba(240, 99, 132, 1)'
//   ],
//   borderWidth: 2,
//   hoverBorderWidth: 0
// };

// var barChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
//     datasets: [densityData]
//   }
// });
