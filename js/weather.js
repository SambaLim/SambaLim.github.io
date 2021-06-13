const COORDS = 'coords';
const WEATHER_API_KEY = 'b8a9efd7fc7f6920f14d3ce93733eca7';

const weather = document.querySelector('.js-weather');

const getWeather = (lat, lon) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    .then((response) => {
      return response.json();
    }).then((json) => {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature}℃ at ${place}`;
    })
}

const saveCoords = (coordsObj) => {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

const handleGeoSuccess = (position) => {
  const { latitude, longitude } = position.coords;
  saveCoords({
    latitude,
    longitude
  });
  getWeather(latitude, longitude);
}

const handleGeoError = () => {
  console.log('Can\'t access geo location');
}

const askForCoords = () => {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

const loadCoords = () => {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const { latitude, longitude } = JSON.parse(loadedCoords);
    getWeather(latitude, longitude);
  }
}

const initWeather = () => {
  loadCoords();
}

initWeather();
