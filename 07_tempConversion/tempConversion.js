const convertToCelsius = function(temperature) {
  let toCelsius = (temperature - 32) * (5 / 9)
  return Math.round(toCelsius * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  let toFahrenheit = (temperature * 1.8) + 32;
  return Math.round(toFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
