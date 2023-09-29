// dark mode toggle
const toggleDarkMode = () => {
    const body = document.body;
    const cardHeaders = document.querySelectorAll('.card-header');
    body.classList.toggle('dark-mode');
    cardHeaders.forEach(header => {
        header.classList.toggle('bg-dark');
        header.classList.toggle('text-white');
    });
};

const darkModeBtn = document.getElementById("dark-mode-toggle");
darkModeBtn.addEventListener("click", toggleDarkMode);

const initializeDarkMode = () => {
    const body = document.body;
    const cardHeaders = document.querySelectorAll('.card-header');
    const isDarkMode = body.classList.contains('dark-mode');
    cardHeaders.forEach(header => {
        if (isDarkMode) {
            header.classList.add('bg-dark','text-white');
        } else {
            header.classList.remove('bg-dark','text-white');
        }
    });
};

window.addEventListener('load',initializeDarkMode);

async function  getWeatherData(location) {
    const apiKey = "31f871294bef6e71e10ee3a0e34ee522";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},us&units=metric&appid=${apiKey}`;

    try {
        const response = await axios.get(url);
        const data = response.data;
        if (data.name) {
            const weatherData = {
                temperature: data.main.temp,
                condition:data.weather[0].main,
                location:data.name,
            };
        console.log(data);
        return weatherData;
        } else {
            return null;
        }
    } catch (error) {
        console.log (error);
        throw error;
    }
}


function updateUI (weatherData) {
    const temperature = document.getElementById("temperature");
    const condition = document.getElementById("condition");
    const location = document.getElementById("location");
    const image = document.getElementById("image");
    const alert = document.querySelector(".alert");

    if (weatherData === null) {
        alert.style.display = "block";
    } else {

        const celsius = `${weatherData.temperature}°C`;
        const fahrenheit = `${(weatherData.temperature * 9/5 + 32).toFixed(2)}°F`;
        const kelvin = `${(weatherData.temperature + 273.15).toFixed(2) }K`;

        temperature.textContent = `${celsius} | ${fahrenheit} | ${kelvin}`;
        condition.textContent = weatherData.condition;
        location.textContent = weatherData.location;

        const conditionImages = {
            "Clear": "img/Picsart_23-09-28_13-45-42-618.jpg",
            "Clouds": "img/Picsart_23-09-28_13-46-07-835.jpg",
            "Tornado": "img/Picsart_23-09-28_13-46-07-835.jpg",
            "Squall":  "img/Picsart_23-09-28_13-46-07-835.jpg",
            "Ash": "img/Picsart_23-09-28_13-46-07-835.jpg",
            "Dust": "img/Picsart_23-09-28_13-46-07-835.jpg",
            "Sand": "img/Picsart_23-09-28_13-46-07-835.jpg", 
            "Fog": "img/Picsart_23-09-28_13-46-07-835.jpg", 
            "Haze": "img/Picsart_23-09-28_13-46-07-835.jpg", 
            "smoke": "img/Picsart_23-09-28_13-46-07-835.jpg", 
            "Mist": "img/Picsart_23-09-28_13-46-07-835.jpg", 
            "Snow": "img/Picsart_23-09-28_13-44-55-194.jpg",
            "Rain": "img/Picsart_23-09-28_13-44-25-843.jpg",
            "Drizzle": "img/Picsart_23-09-28_13-44-25-843.jpg",
            "Thunderstorm": "img/Picsart_23-09-28_13-46-07-835.jpg", 
        }

        if (weatherData.condition === "Clouds") {
            image.src = "img/1161797901.jpg";
        }
        alert.style.display = "none";
    }
}
   
const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const alert = document.querySelector(".alert");

searchBtn.addEventListener("click", () => {
    const location = searchBar.value;
    getWeatherData(location)
    .then(weatherData => {
        const isValidZipCode = weatherData && weatherData.location;
        weatherData.validZipCode = isValidZipCode;
        updateUI(weatherData);
    })
    .catch(error => {
        console.log(error);
        updateUI(null);
    });
});

document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    const html = document.documentElement;
    html.dataset.bsTheme = html.dataset.bsTheme === 'dark' ? 'light' : 'dark';
  });

  