import Rest from './actions/rest';
import ChopWood from './actions/chop_wood';

class ActionStore {
    actionMap =  new Map();
    chopWood
    rest
    rootStore

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.chopWood = new ChopWood(rootStore.characterStore.stamina, rootStore.characterStore.wood);
        this.rest     = new Rest(rootStore.characterStore.stamina);

        this.actionMap.set(this.rest.slug, this.rest);
        this.actionMap.set(this.chopWood.slug, this.chopWood);

    }

    get map() {
        return this.actionMap;        
    }
    
    get all() {
        return [
            this.chopWood,
            this.rest
        ]
    }
}

export default ActionStore;