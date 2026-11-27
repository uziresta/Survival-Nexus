import test from "node:test";
import assert from "node:assert/strict";
import { daysOfSupplies } from "../web/js/domain.js";

// NORMAL INPUT
test("calculates complete days of supplies", () => {
  assert.equal(daysOfSupplies(18, 6), 3);
});

// EXACT DIVISION
test("handles exact division", () => {
  assert.equal(daysOfSupplies(20, 5), 4);
});

// ZERO UNITS
test("returns zero when there are no units", () => {
  assert.equal(daysOfSupplies(0, 5), 0);
});

// INVALID DAILY USE
test("rejects zero daily use", () => {
  assert.throws(
    () => daysOfSupplies(18, 0),
    RangeError
  );
});


// FRACTIONAL INPUTS
test("rejects fractional units", () => {
  assert.throws(
    () => daysOfSupplies(10.5, 2),
    RangeError
  );
});

test("rejects fractional daily use", () => {
  assert.throws(
    () => daysOfSupplies(10, 2.5),
    RangeError
  );
});

// STRING INPUT
test("rejects string inputs", () => {
  assert.throws(
    () => daysOfSupplies("10", 2),
    RangeError
  );
});

// MAXIMUM SUPPORTED UNITS
test("handles maximum supported units", () => {
  assert.equal(daysOfSupplies(1000000, 1), 1000000);
});