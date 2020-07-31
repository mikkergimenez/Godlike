import { observable } from "mobx";

class ScheduleStore {
  schedule = [];
  rootStore;

  save() {
    console.log(this.toJSON());
    localStorage.setItem("godlike-schedule-save", this.toJSON());
  }

  toJSON() {
    return JSON.stringify({ schedule: this.schedule });
  }

  load() {
    let obj;
    try {
      let raw = localStorage.getItem("godlike-schedule-save");
      console.log(raw);
      obj = JSON.parse(raw);
      console.log(obj);
      if (!obj) return false;
    } catch {
      return false;
    }

    for (let i = 0; i <= 23; i++) {
      this.schedule.push(
        this.rootStore.actionStore.map.get(obj.schedule[i].slug)
      );
    }

    return true;
  }

  constructor(rootStore) {
    this.rootStore = rootStore;
    if (this.load()) return;

    for (let i = 0; i <= 23; i++) {
      this.schedule.push(rootStore.actionStore.rest);
    }
  }

  setScheduleItem(id, slug) {
    this.schedule[id] = this.rootStore.actionStore.map.get(slug);
    this.save();
  }

  execute(time) {
    if (!this.schedule[time].execute()) {
        this.rootStore.uiStore.showFailure(this.schedule[time].failMessage)
    } else {
        this.rootStore.uiStore.hideFailure();
    }
  }
}

export default ScheduleStore;
