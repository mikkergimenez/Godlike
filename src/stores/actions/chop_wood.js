class ChopWood {
    title = "Chop Wood";
    slug = "chop_wood";
    stamina;
    wood;

    constructor(stamina, wood) {
        this.stamina = stamina;
        this.wood = wood;
    }
   
    get failMessage() {
        return "Couldn't chop wood because there you didn't have enough stamina";
    } 

    execute() {
        console.log("Executing Chop Wood");
        if (this.stamina.decrementValue()) {
            this.wood.incrementValue();
            return true;
        } 
        return false;
    }
}

export default ChopWood;