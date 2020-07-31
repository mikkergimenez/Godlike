import Stamina from "./attributes/stamina";

import Wood from "./resources/wood";

class CharacterStore {
  stamina;
  wood;

  tick() {
    this.save();
  }

  save() {
      console.log(this.toJSON());
    localStorage.setItem("godlike-character-save", this.toJSON());
  }

  toJSON() {
    return JSON.stringify({
      stamina: this.stamina,
      wood: this.wood,
    });
  }

  load() {
    let obj;
    try {
      let raw = localStorage.getItem("godlike-character-save");
      console.log(raw);
      obj = JSON.parse(raw);
      console.log(obj);
      if (!obj) return false;
    } catch {
      return false;
    }

    this.stamina = new Stamina(obj.stamina);
    this.wood = new Wood(obj.wood);
    return true;
  }

  constructor() {
    if (this.load()) return;

    this.stamina = new Stamina();
    this.wood = new Wood();
  }
}

export default CharacterStore;
