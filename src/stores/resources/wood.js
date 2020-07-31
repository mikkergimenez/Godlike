class Wood {
    title = "Wood";
    _value = 0;

    constructor(obj) {
        if (obj && obj._value) {
            this._value = obj._value;
        } else {
            this._value = 0;
        }
    }

    get value() {
        return this._value;
    }

    incrementValue() {
        if (this._value >= this.max) return;
        this._value++;
        
        if (this._value > this.max) {
            this._value = this.max;
        }
    }

    get max() {
        return 100;
    }
    
    execute() {
        this.stamina++;
    }
}

export default Wood;