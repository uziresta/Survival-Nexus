export function daysOfSupplies(units, dailyUse) {
  if (
    !Number.isSafeInteger(units) ||
    !Number.isSafeInteger(dailyUse) ||
    units < 0 ||
    units > 1000000 ||
    dailyUse < 1 ||
    dailyUse > 1000000
  ) {
    throw new RangeError("Invalid supply inputs");
  }

  return Math.floor(units / dailyUse);
}