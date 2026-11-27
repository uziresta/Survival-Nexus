import { daysOfSupplies } from "./domain.js";

// TOTAL SUPPLIES AND DEMAND //
const waterUnits = 18;
const waterSurvivorCount = 6;
const waterUnitsPerDay = 2;

// COMPUTATION //
const waterdayDemand =
  waterSurvivorCount * waterUnitsPerDay;

const waterCompleteDays = daysOfSupplies(waterUnits, waterdayDemand);

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

const foodCompleteDays = daysOfSupplies(foodUnits, foodDailyDemand);

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

// ACTIVITY 05 - CALCULATE DAILY RATIONS


// SHELTER WATER DATA
const waterCounts = [12, 9, 0];
const dailyRequirement = 3;

// VALIDATION
let isValid = true;

// Validate daily requirement
if (
  !Number.isSafeInteger(dailyRequirement) ||
  dailyRequirement <= 0
) {
  console.log("Rejected: Invalid daily water requirement.");
  isValid = false;
}

// Validate each shelter's water stock
for (let i = 0; i < waterCounts.length; i++) {
  const stock = waterCounts[i];

  if (
    !Number.isSafeInteger(stock) ||
    stock < 0 ||
    stock > 1000000
  ) {
    console.log(
      `Rejected: Invalid water stock at array index ${i} (position ${i + 1}).`
    );
    isValid = false;
  }
}

// COMPUTATION
if (isValid) {
  const shelterCoverage = [];

  let totalWater = 0;
  let sheltersBelowTwoDays = 0;

  for (const water of waterCounts) {
    const completeDays = Math.floor(water / dailyRequirement);

    shelterCoverage.push(completeDays);
    totalWater += water;

    if (completeDays < 2) {
      sheltersBelowTwoDays++;
    }
  }

  // RESULTS
  console.log("Shelter coverage:", shelterCoverage);
  console.log("Total water:", totalWater);
  console.log("Shelter count:", waterCounts.length);
  console.log("Shelters below 2 days:", sheltersBelowTwoDays);
}
