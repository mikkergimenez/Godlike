import CharacterStore from "./character.store";
import UIStore        from "./ui.store";
import ActionStore    from "./action.store";
import ScheduleStore  from "./schedule.store";

class RootStore {
  characterStore;
  uiStore;
  actionStore;
  scheduleStore;

  constructor() {
    this.characterStore = new CharacterStore(this);
    this.uiStore        = new UIStore(this);
    this.actionStore    = new ActionStore(this);
    this.scheduleStore  = new ScheduleStore(this);
  }
}

export default RootStore;