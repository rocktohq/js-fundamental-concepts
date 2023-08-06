function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const woodPerChair = 3;
    const woodPerTable = 5;
    const woodPerBed = 10;

    const chairWood = woodPerChair * chairQuantity;
    const tableWood = woodPerTable * tableQuantity;
    const bedWood = woodPerBed * bedQuantity;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(6, 1, 1);
console.log(totalWood);