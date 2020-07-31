class Rest {
    title = "Rest";
    slug = "rest";
    stamina;

    constructor(stamina) {
        this.stamina = stamina;
    }
    
    execute() {
        console.log("Executing Rest");
        this.stamina.incrementValue();
    }
}

export default Rest;