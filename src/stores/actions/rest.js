class Rest {
    title = "Rest";
    slug = "rest";
    stamina;

    constructor(stamina) {
        this.stamina = stamina;
    }

    get failMessage() {
        return "Stamina full";
    } 

    
    execute() {
        console.log("Executing Rest");
        return this.stamina.incrementValue();
    }
}

export default Rest;