
// TOTAL SUPPLIES AND DEMAND //
const waterUnits = 18;
const waterSurvivorCount = 6;
const waterUnitsPerDay = 2;

// COMPUTATION //
const waterdayDemand =
  waterSurvivorCount * waterUnitsPerDay;

const waterCompleteDays = Math.floor(waterUnits / waterDailyDemand);

const waterLeft =
  waterUnits - waterCompleteDays * waterdayDemand;

console.log("Water daily demand:", waterdayDemand);
console.log("Water complete days:", waterCompleteDays);
console.log("Water leftover:", waterLeft);


// TOTAL FOOD SUPPLIES AND SURVIVOR COUNT //
const foodUnits = 25;
const foodSurvivorCount = 4;
const foodUnitsSurvivorPerDay = 2;

// COMPUTATION //
const foodDailyDemand =
  foodSurvivorCount * foodUnitsSurvivorPerDay;

const foodCompleteDays = Math.floor(foodUnits / foodDailyDemand);

const foodLeftover =
  foodUnits - foodCompleteDays * foodDailyDemand;

console.log("Food daily demand:", foodDailyDemand);
console.log("Food complete days:", foodCompleteDays);
console.log("Food leftover:", foodLeftover);