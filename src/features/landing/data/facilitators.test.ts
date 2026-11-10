import { describe, expect, it } from "vitest";
import { facilitatorProfiles } from "./content";

describe("facilitator sample profiles", () => {
  it("contains four clearly labelled demo personas", () => {
    expect(facilitatorProfiles).toHaveLength(4);
    expect(facilitatorProfiles.every((profile) => profile.imageAlt.includes("fictional sample"))).toBe(
      true,
    );
  });

  it("uses unique ordered profile numbers", () => {
    const numbers = facilitatorProfiles.map((profile) => profile.number);
    expect(new Set(numbers).size).toBe(numbers.length);
    expect(numbers).toEqual(["01", "02", "03", "04"]);
  });

  it("provides complete copy, focus areas, and local portrait assets", () => {
    for (const profile of facilitatorProfiles) {
      expect(profile.name.trim().length).toBeGreaterThan(0);
      expect(profile.role.trim().length).toBeGreaterThan(0);
      expect(profile.bio.trim().length).toBeGreaterThan(0);
      expect(profile.focus.length).toBeGreaterThan(0);
      expect(profile.image).toMatch(/\.webp$/);
    }
  });
});
