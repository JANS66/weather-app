export default class Weather {
  constructor(rawJson) {
    this.location = rawJson.resolvedAddress;
    this.description = rawJson.description;

    // Extracting nested current conditions
    const current = rawJson.currentConditions;
    this.temp = Math.round(current.temp);
    this.feelsLike = Math.round(current.feelslike);
    this.humidity = current.humidity;
    this.conditions = current.conditions;
    this.icon = current.icon;
  }
}
