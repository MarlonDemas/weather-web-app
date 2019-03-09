const Key = "c60affe7bd71ca5cf3853f5a6fba4dbb";

function getForecast(id) {
    const location = ["Cape+Town", "Johannesburg", "Durban"];
    const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${location[id]}&APPID=${Key}`;

    return fetch(API_URL).then(response => response.json());
}

export default {
    getForecast
};