class ChopWood {
    title = "Chop Wood";
    slug = "chop_wood";
    stamina;
    wood;

    constructor(stamina, wood) {
        this.stamina = stamina;
        this.wood = wood;
    }
    
    execute() {
        console.log("Executing Chop Wood");
        if (this.stamina.decrementValue()) {
            this.wood.incrementValue();
        };
    }
}

export default ChopWood;