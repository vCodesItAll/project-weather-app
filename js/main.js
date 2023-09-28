async function  getWeatherData(location) {
    const apiKey = "31f871294bef6e71e10ee3a0e34ee522";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
}

try {
    const response = await axios.get(url);
    const data = response.data;
    const weatherData = {
        temperature: data.main.temp,
        condition:data.weather[0].main,
        location:data.name,
    };
    return weatherData;
} catch (error) {
    console.log (error);
    throw error;
}

function updateUI (weatherData) {
    const temperature = document.getElementById("temperature");
    const condition = document.getElementById("condition");
    const location = document.getElementById("location");

    temperature.textContent = `${weatherData.temperature}°C`;
    condition.textContent = weatherData.condition;
    location.textContent = weatherData.location;
}

const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");

searchBtn.addEventListener("click", async () => {
    const location = searchBar.value;
    getWeatherData(location)
    .then(weatherData => {
        updateUI(weatherData);
    })
    .catch(error => {
        console.log(error);
    });
});