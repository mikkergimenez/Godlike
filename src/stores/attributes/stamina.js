class Rest {
    title = "Stamina";
    _value = 0;

    constructor(obj) {
        if (obj && obj._value) {
            this._value = obj._value;
        } else {
            this._value = 0;
        }
    }

    decrementValue() {
        if (this._value > 2) {
            this._value =  this._value - 2;
            return true;
        }
        return false;
    }

    incrementValue() {
        if (this._value >= this.max) return false;
        this._value++;
        
        if (this._value > this.max) {
            this._value = this.max;
        }

        return true;
    }

    get value() {
        return this._value;
    }

    get max() {
        return 100;
    }
    
    execute() {
        this.stamina++;
    }
}

export default Rest;