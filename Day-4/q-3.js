function convertToCelsius() {
    const fahrenheitInput = document.getElementById("tempF");
    const celsiusInput = document.getElementById("tempC");

    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * (5 / 9);

    celsiusInput.value = celsius.toFixed(2);
}

function convertToFahrenheit() {
    const celsiusInput = document.getElementById("tempC");
    const fahrenheitInput = document.getElementById("tempF");

    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;

    fahrenheitInput.value = fahrenheit.toFixed(2);
}



