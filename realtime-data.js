// realtime-data.js

// Function to fetch weather data from Open-Meteo
async function fetchWeather(latitude, longitude) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

// Function to fetch cryptocurrency data from CoinGecko
async function fetchCryptoData(cryptoId) {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

// Example usage of the functions
// Fetch weather data for a specific location
// fetchWeather(35.6895, 139.6917).then(data => console.log(data));

// Fetch crypto data for Bitcoin
// fetchCryptoData('bitcoin').then(data => console.log(data));
