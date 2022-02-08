export default class Currency {
    constructor(code, name) {
      // Create objs
      this._code = code;
      this._name = name;
    }
    displayFullCurrency() {
      return (`${this.name} (${this.code})`);
    }
    set name(newName) {
      this._name = newName;
    }
    set code(newCode) {
      this._name = newCode;
    }
    // Getters
    get name() {
      return this._name;
    }
    get code() {
      return this._code;
    }
  }