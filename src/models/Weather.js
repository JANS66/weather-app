export default class Weather {
  constructor(rawJson) {
    if (!rawJson || !rawJson.currentConditions) {
      throw new Error('Incomplete weather data provided to model');
    }

    this.location = rawJson.resolvedAddress || 'Unknown Location';
    this.description = rawJson.description || 'No description available.';

    const current = rawJson.currentConditions;

    this.temp = Math.round(current.temp ?? 0);
    this.conditions = current.conditions || 'Clear';
    this.icon = current.icon || 'cloudy';

    // 3. Immutability
    // Prevents accidental changes to the weather object after it's created
    Object.freeze(this);
  }
}
