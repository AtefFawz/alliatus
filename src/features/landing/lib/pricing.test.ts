import { describe, expect, it } from "vitest";
import { annualTotal, formatEuro, plans, pricePerMonth } from "./pricing";

const growth = plans.find((p) => p.id === "growth")!;

describe("pricing", () => {
  it("returns the list price for monthly billing", () => {
    expect(pricePerMonth(growth, "monthly")).toBe(89);
  });

  it("charges 10 months for 12 on annual billing", () => {
    expect(annualTotal(growth)).toBe(890);
    expect(pricePerMonth(growth, "annual")).toBe(74.17);
  });

  it("annual is always cheaper per month", () => {
    for (const plan of plans) {
      expect(pricePerMonth(plan, "annual")).toBeLessThan(pricePerMonth(plan, "monthly"));
    }
  });

  it("marks exactly one plan as featured", () => {
    expect(plans.filter((p) => p.featured)).toHaveLength(1);
  });

  it("formats whole and fractional euros", () => {
    expect(formatEuro(49)).toBe("€49");
    expect(formatEuro(74.17)).toBe("€74.17");
  });
});
