class Weather {
    constructor(city) {
        this.apiKey = '3615006bf501cf1f8bcc7866f26ffa5a';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`);

        const responseData = await response.json();
        return responseData;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}


