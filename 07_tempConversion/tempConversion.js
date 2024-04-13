const convertToCelsius = function (fahrenheit) {
  // Check if fahrenheit is a number
  if (typeof fahrenheit !== "number") {
    return "ERROR";
  } else {
    // Convert Fahrenheit to Celsius
    const celsius = ((fahrenheit - 32) * 5) / 9;
    // Round up the result to the nearest integer
    const celsiusRoundedUp = parseFloat(celsius.toFixed(1));
    return celsiusRoundedUp;
  }
};

const convertToFahrenheit = function (celsius) {
  // Check if celsius is a number
  if (typeof celsius !== "number") {
    return "ERROR";
  }
  // The Temperature Conversion Formula from Celsius to Fahrenheit is
  const fahrenheit = celsius * (9 / 5) + 32;
  const fahrenheitRoundedUp = parseFloat(fahrenheit.toFixed(1));
  return fahrenheitRoundedUp;
};

// function call
console.log(convertToCelsius(100));
console.log(convertToFahrenheit(32));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
