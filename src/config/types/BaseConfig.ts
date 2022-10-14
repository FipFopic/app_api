export class BaseConfig {
  constructor(config) {
    for (const key of Object.keys(config)) {
      this[key] = config[key]
    }
  }
}
