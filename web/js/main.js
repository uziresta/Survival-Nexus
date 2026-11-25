
// TOTAL SUPPLIES AND DEMAND //
const waterUnits = 18;
const waterSurvivorCount = 6;
const waterUnitsPerDay = 2;

// COMPUTATION //
const waterdayDemand =
  waterSurvivorCount * waterUnitsPerDay;

const waterCompleteDays = Math.floor(waterUnits / waterdayDemand);

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



// ACTIVITY 04 - SUPPLY APPROVAL


const supplyStock = 5;
const requestedQuantity = 2;
const isSourceInfected = false;

if (!Number.isSafeInteger(supplyStock) || supplyStock < 0 || supplyStock > 1000000) {
  console.log("Rejected: Invalid stock.");

} else if (!Number.isSafeInteger(requestedQuantity) || requestedQuantity < 1 || requestedQuantity > 1000000) {
  console.log("Rejected: Invalid quantity.");

} else if (typeof isSourceInfected !== "boolean" || isSourceInfected) {
  console.log("Rejected: Invalid or infected source.");

} else if (requestedQuantity > supplyStock) {
  console.log("Rejected: Insufficient stock.");

} else {
  console.log("Request approved.");
  console.log("Remaining stock:", supplyStock - requestedQuantity);
}