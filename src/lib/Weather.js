const Key = "c60affe7bd71ca5cf3853f5a6fba4dbb";
const location = ["Cape+Town", "Johannesburg", "Durban"];
const API_URL = [`http://api.openweathermap.org/data/2.5/weather?q=${location[0]}&APPID=${Key}`,
    `http://api.openweathermap.org/data/2.5/weather?q=${location[1]}&APPID=${Key}`,
    `http://api.openweathermap.org/data/2.5/weather?q=${location[2]}&APPID=${Key}`
];

function getWeather() {

    const forecast = [fetch(API_URL[0]).then(response => response.json()),
        fetch(API_URL[1]).then(response => response.json()),
        fetch(API_URL[2]).then(response => response.json())
    ];

    return forecast;
}

export default {
    getWeather
};