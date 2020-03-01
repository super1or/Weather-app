class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.visibility = document.getElementById('w-visibility');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.location.name;
        this.desc.textContent = weather.current.weather_descriptions;
        this.string.textContent = weather.current.temperature;
        this.icon.setAttribute('src', weather.current.weather_icons);
        this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}`;
        this.wind.textContent = `Wind Speed: ${weather.current.wind_speed}`;
        this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike}`;
        this.visibility.textContent = `Visibility: ${weather.current.visibility}`;
    }
}